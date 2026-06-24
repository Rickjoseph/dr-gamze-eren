import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { treatments } from "@/content/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://drgamzeeren.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                        lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/technology`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`,             lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/media`,            lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/calculator`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy-policy`,   lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,            lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    // /results intentionally excluded — noindex (patient photos)
  ];

  const treatmentRoutes: MetadataRoute.Sitemap = treatments.map((t) => ({
    url: `${base}/services/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...treatmentRoutes, ...blogRoutes];
}

