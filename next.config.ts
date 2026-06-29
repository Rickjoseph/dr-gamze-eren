import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Prefer AVIF (smaller) over WebP; Next will fall back automatically.
    formats: ["image/avif", "image/webp"],
    // Cache optimised variants for a year — these never change in practice.
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  // Compress static text responses (HTML/CSS/JS/JSON). On by default in
  // most hosting environments, but make it explicit.
  compress: true,
  // Redirect old site URLs that Google has indexed to the correct pages
  async redirects() {
    return [
      // Old site pages → correct new URLs
      { source: "/home", destination: "/", permanent: true },
      { source: "/home-2", destination: "/", permanent: true },
      { source: "/home-3", destination: "/", permanent: true },
      { source: "/contacts", destination: "/contact", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/services-2", destination: "/services", permanent: true },
      { source: "/gallery", destination: "/media", permanent: true },
      { source: "/portfolio", destination: "/media", permanent: true },
      { source: "/team", destination: "/about", permanent: true },
      { source: "/dr-gamze-eren", destination: "/about", permanent: true },
      { source: "/rhinoplasty", destination: "/services", permanent: true },
      { source: "/nose-job", destination: "/services", permanent: true },
      { source: "/breast-augmentation", destination: "/services", permanent: true },
      { source: "/blog-single/:slug*", destination: "/blog/:slug*", permanent: true },
      { source: "/single-post/:slug*", destination: "/blog/:slug*", permanent: true },
      // Catch-all: any unrecognised path → homepage
      { source: "/:path*", destination: "/", permanent: false, missing: [
        { type: "header", key: "x-nextjs-data" }
      ]},
    ];
  },
};

export default nextConfig;
