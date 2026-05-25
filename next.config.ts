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
};

export default nextConfig;
