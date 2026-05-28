import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://dr-gamze-eren.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/results", "/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
