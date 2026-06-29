import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  compress: true,
  async redirects() {
    return [
      // Old site nav pages
      { source: "/home", destination: "/", permanent: true },
      { source: "/home-2", destination: "/", permanent: true },
      { source: "/home-3", destination: "/", permanent: true },
      { source: "/contacts", destination: "/contact", permanent: true },
      { source: "/contacts/:path*", destination: "/contact", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/appointment", destination: "/contact", permanent: true },
      { source: "/appointment/:path*", destination: "/contact", permanent: true },
      { source: "/team", destination: "/about", permanent: true },
      { source: "/team/:path*", destination: "/about", permanent: true },
      { source: "/dr-gamze-eren", destination: "/about", permanent: true },
      // Old service/procedure pages
      { source: "/services-2", destination: "/services", permanent: true },
      { source: "/liposuction", destination: "/services", permanent: true },
      { source: "/liposuction/:path*", destination: "/services", permanent: true },
      { source: "/gynecomastia", destination: "/services", permanent: true },
      { source: "/gynecomastia/:path*", destination: "/services", permanent: true },
      { source: "/facelift", destination: "/services", permanent: true },
      { source: "/facelift/:path*", destination: "/services", permanent: true },
      { source: "/rhinoplasty", destination: "/services", permanent: true },
      { source: "/nose-job", destination: "/services", permanent: true },
      { source: "/breast-augmentation", destination: "/services", permanent: true },
      // Old media/portfolio pages
      { source: "/gallery", destination: "/media", permanent: true },
      { source: "/portfolio", destination: "/media", permanent: true },
      // Old blog structure
      { source: "/blog-single/:slug*", destination: "/blog/:slug*", permanent: true },
      { source: "/single-post/:slug*", destination: "/blog/:slug*", permanent: true },
      // Old site junk pages
      { source: "/shortcodes", destination: "/", permanent: true },
      { source: "/shortcodes/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
