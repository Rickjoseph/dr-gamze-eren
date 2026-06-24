import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://drgamzeeren.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/results", "/calculator", "/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}

