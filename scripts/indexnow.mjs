import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import slugify from "slugify";

const DEFAULT_SITE_URL = "https://www.acumoai.com";
const KEY = "8869f38c1deb4fd981133045a829c4df";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
const ARTICLES_DIR = path.join(process.cwd(), "Article Content");

// Only runs on Vercel builds to avoid indexing local/dev builds
const RUN_ON_VERCEL = process.env.VERCEL === "1" || process.env.VERCEL === "true";
const FORCE = process.env.INDEXNOW_FORCE === "1";

const STATIC_PATHS = [
  "/",
  "/services",
  "/services/mvp-development",
  "/services/voice-ai-crm",
  "/services/websites-booking",
  "/services/ai-automation",
  "/services/ai-document-processing",
  "/services/codebase-cleanup",
  "/articles",
];

function slugFromMarkdown(raw, folderName) {
  const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (frontmatter) {
    const match = frontmatter[1].match(/^slug:\s*["']?([^"'\r\n]+)["']?$/m);
    if (match) return match[1].trim();
  }
  const body = raw.replace(/^---\r?\n[\s\S]*?\r?\n---/, "");
  const titleMatch = body.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : folderName;
  const titleForSlug = title.replace(/\s*\(.*?\)\s*/g, "");
  return slugify(titleForSlug, { lower: true, strict: true });
}

function getArticleSlugs() {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  const slugs = [];
  for (const folder of fs.readdirSync(ARTICLES_DIR)) {
    const folderPath = path.join(ARTICLES_DIR, folder);
    if (!fs.statSync(folderPath).isDirectory()) continue;
    for (const mdFile of fs.readdirSync(folderPath).filter((f) => f.endsWith(".md"))) {
      const raw = fs.readFileSync(path.join(folderPath, mdFile), "utf8");
      slugs.push(slugFromMarkdown(raw, folder));
    }
  }
  return slugs;
}

// Narrow submission down to articles changed in this deploy, using Vercel's git metadata
function getChangedArticleSlugs(previousSha) {
  try {
    const diff = execSync(`git diff --name-only ${previousSha} HEAD -- "./Article Content"`, {
      encoding: "utf8",
    });
    const slugs = new Set();
    for (const line of diff.split("\n").map((l) => l.trim()).filter(Boolean)) {
      const relPath = path.parse(line.replace(/^["']|["']$/g, ""));
      if (relPath.ext !== ".md") continue;
      const folder = path.parse(relPath.dir).name;
      const raw = fs.readFileSync(path.join(ARTICLES_DIR, folder, relPath.base), "utf8");
      slugs.add(slugFromMarkdown(raw, folder));
    }
    return [...slugs];
  } catch (err) {
    console.warn(`IndexNow: diff against ${previousSha} failed (${err.message}), falling back to all URLs`);
    return null;
  }
}

async function submit(urls) {
  const res = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: SITE_URL.replace(/^https?:\/\//, "").replace(/\/$/, ""),
      key: KEY,
      keyLocation: `${SITE_URL}/${KEY}.txt`,
      urlList: urls,
    }),
  });

  if (res.ok || res.status === 202) {
    console.log(`IndexNow: submitted ${urls.length} URL(s) successfully (${res.status})`);
  } else {
    console.warn(`IndexNow: submission failed (${res.status} ${res.statusText})`);
  }
}

async function main() {
  if (!RUN_ON_VERCEL && !FORCE) {
    console.log("IndexNow: skipped (not a Vercel build)");
    return;
  }

  const previousSha = process.env.VERCEL_GIT_PREVIOUS_SHA;
  let urls;

  if (previousSha && !FORCE) {
    const changed = getChangedArticleSlugs(previousSha);
    if (changed) {
      urls = changed.length
        ? changed.map((slug) => `${SITE_URL}/articles/${slug}`)
        : [];
      console.log(`IndexNow: ${changed.length} article(s) changed since ${previousSha.slice(0, 7)}`);
    } else {
      // diff failed, submit everything as a safe fallback
      urls = [
        ...STATIC_PATHS.map((p) => `${SITE_URL}${p === "/" ? "/" : p}`),
        ...getArticleSlugs().map((slug) => `${SITE_URL}/articles/${slug}`),
      ];
    }
  } else {
    urls = [
      ...STATIC_PATHS.map((p) => `${SITE_URL}${p === "/" ? "/" : p}`),
      ...getArticleSlugs().map((slug) => `${SITE_URL}/articles/${slug}`),
    ];
  }

  if (!urls.length) {
    console.log("IndexNow: no changed article URLs to submit");
    return;
  }

  await submit(urls);
}

main().catch((err) => {
  console.warn(`IndexNow: skipped (${err.message})`);
});
