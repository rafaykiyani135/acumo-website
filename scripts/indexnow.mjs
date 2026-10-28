import fs from "node:fs";
import path from "node:path";
import slugify from "slugify";

const DEFAULT_SITE_URL = "https://www.acumoai.com";
const KEY = "8869f38c1deb4fd981133045a829c4df";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
const ARTICLES_DIR = path.join(process.cwd(), "Article Content");

const STATIC_PATHS = [
  "/",
  "/services",
  "/services/mvp-development",
  "/services/voice-ai-crm",
  "/services/websites-booking",
  "/services/ai-automation",
  "/services/codebase-cleanup",
  "/articles",
];

function getArticleSlugs() {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  const slugs = [];
  for (const folder of fs.readdirSync(ARTICLES_DIR)) {
    const folderPath = path.join(ARTICLES_DIR, folder);
    if (!fs.statSync(folderPath).isDirectory()) continue;
    const mdFile = fs.readdirSync(folderPath).find((f) => f.endsWith(".md"));
    if (!mdFile) continue;
    const raw = fs.readFileSync(path.join(folderPath, mdFile), "utf8");
    const frontmatter = raw.match(/^---\n([\s\S]*?)\n---/);
    let slug = null;
    if (frontmatter) {
      const match = frontmatter[1].match(/^slug:\s*["']?([^"'\n]+)["']?$/m);
      if (match) slug = match[1].trim();
    }
    if (!slug) {
      const body = raw.replace(/^---\n[\s\S]*?\n---/, "");
      const titleMatch = body.match(/^#\s+(.+)$/m);
      const title = titleMatch ? titleMatch[1] : folder;
      const titleForSlug = title.replace(/\s*\(.*?\)\s*/g, "");
      slug = slugify(titleForSlug, { lower: true, strict: true });
    }
    slugs.push(slug);
  }
  return slugs;
}

async function main() {
  const urls = [
    ...STATIC_PATHS.map((p) => `${SITE_URL}${p === "/" ? "/" : p}`),
    ...getArticleSlugs().map((slug) => `${SITE_URL}/articles/${slug}`),
  ];

  console.log(`IndexNow: submitting ${urls.length} URLs for ${SITE_URL}`);

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
    console.log(`IndexNow: submitted successfully (${res.status})`);
  } else {
    console.warn(`IndexNow: submission failed (${res.status} ${res.statusText})`);
  }
}

main().catch((err) => {
  console.warn(`IndexNow: skipped (${err.message})`);
});
