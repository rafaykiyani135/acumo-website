import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/articles";

const DEFAULT_SITE_URL = "https://www.acumoai.com";

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/services/mvp-development`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/services/voice-ai-crm`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/services/websites-booking`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/services/ai-automation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/articles`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const articles = getArticles();
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => {
    const parsedDate = article.date ? new Date(article.date) : now;
    const lastModified = isNaN(parsedDate.getTime()) ? now : parsedDate;

    return {
      url: `${siteUrl}/articles/${article.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [...staticPages, ...articlePages];
}