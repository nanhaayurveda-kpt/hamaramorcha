import type { MetadataRoute } from "next";

const baseUrl = "https://www.hamaramorcha.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio/", "/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}