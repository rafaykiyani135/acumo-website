import type { MetadataRoute } from "next";

const DEFAULT_SITE_URL = "https://www.acumoai.com";

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/articles`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/articles/why-manual-appointment-booking-is-slowing-your-business-down`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}