import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/articles";

const DEFAULT_SITE_URL = "https://www.acumoai.com";

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const articles = getArticles();

  // Compute the most recent article date for dynamic index pages
  const latestArticleDate =
    articles.length > 0 && articles[0].date
      ? new Date(articles[0].date)
      : new Date("2026-11-06");
  const validLatestDate = isNaN(latestArticleDate.getTime())
    ? new Date("2026-11-06")
    : latestArticleDate;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: validLatestDate,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date("2026-11-06"),
    },
    {
      url: `${siteUrl}/services/mvp-development`,
      lastModified: new Date("2026-11-16"),
    },
    {
      url: `${siteUrl}/services/voice-ai-crm`,
      lastModified: new Date("2026-11-16"),
    },
    {
      url: `${siteUrl}/services/websites-booking`,
      lastModified: new Date("2026-11-16"),
    },
    {
      url: `${siteUrl}/services/ai-automation`,
      lastModified: new Date("2026-10-15"),
    },
    {
      url: `${siteUrl}/services/ai-document-processing`,
      lastModified: new Date("2026-11-01"),
    },
    {
      url: `${siteUrl}/services/codebase-cleanup`,
      lastModified: new Date("2026-11-06"),
    },
    {
      url: `${siteUrl}/articles`,
      lastModified: validLatestDate,
    },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => {
    const parsedDate = article.date ? new Date(article.date) : validLatestDate;
    const lastModified = isNaN(parsedDate.getTime()) ? validLatestDate : parsedDate;

    return {
      url: `${siteUrl}/articles/${article.slug}`,
      lastModified,
    };
  });

  return [...staticPages, ...articlePages];
}