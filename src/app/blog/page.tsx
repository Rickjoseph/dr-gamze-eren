import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/content/blog";
import { getDict } from "@/i18n/getLocale";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Procedure guides, recovery advice, and patient stories from Dr. Gamze Eren's clinic in Istanbul.",
};

const CATEGORY_COLORS: Record<string, string> = {
  Rhinoplasty: "bg-rose-100/90 text-rose-800",
  Breast: "bg-pink-100/90 text-pink-800",
  Body: "bg-amber-100/90 text-amber-800",
  Face: "bg-purple-100/90 text-purple-800",
  "Patient Guide": "bg-teal-100/90 text-teal-800",
  Reconstructive: "bg-emerald-100/90 text-emerald-800",
  // Turkish categories
  "Vücut": "bg-amber-100/90 text-amber-800",
  // German categories
  "Körper": "bg-amber-100/90 text-amber-800",
};

export default async function BlogPage() {
  const { locale } = await getDict();

  // Show posts with no locale tag (universal) + posts matching the current locale
  const visiblePosts = posts.filter(
    (p) => !p.locale || p.locale === locale
  );

  return (
    <section className="relative px-4 sm:px-8">
      <div className="mx-auto max-w-6xl pt-8 pb-20">
        {/* Header */}
        <p className="eyebrow">Journal</p>
        <h1 className="headline mt-4 text-[clamp(2.4rem,6vw,4.6rem)]">
          Insights &amp;{" "}
          <span className="italic-accent">guidance.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-cocoa)]">
          Procedure guides, recovery advice, and honest answers to the questions patients ask most.
        </p>

        {/* Vertical post cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/30 shadow-[0_8px_32px_-8px_rgba(26,20,16,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_-12px_rgba(26,20,16,0.22)]"
            >
              {/* Feature image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 360px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/55 via-transparent to-transparent" />
                <span
                  className={`absolute bottom-4 left-4 inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest backdrop-blur-md ${
                    CATEGORY_COLORS[post.category] ?? "bg-white/85 text-[var(--color-cocoa)]"
                  }`}
                >
                  {post.category}
                </span>
                <span className="absolute bottom-4 right-4 rounded-full bg-[var(--color-ink)]/60 px-3 py-1 text-[10px] text-white/90 backdrop-blur-md">
                  {post.readTime}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs text-[var(--color-taupe)]">
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h2 className="mt-3 font-display text-xl leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-rosegold)]">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-cocoa)] line-clamp-3">
                  {post.excerpt}
                </p>
                <p className="mt-5 text-sm font-medium text-[var(--color-rosegold)]">
                  Read more →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
