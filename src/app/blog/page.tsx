import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/content/blog";

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
};

export default function BlogPage() {
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
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/30 shadow-[0_8px_32px_-8px_rgba(26,20,16,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_-12px_rgba(26,20,16,0.22)]"
            >
              {/* Feature image — 3:4 portrait, image takes the top */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 360px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* Soft gradient so the category chip + read time read cleanly */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/55 via-transparent to-transparent" />
                {/* Category pill — bottom left */}
                <span
                  className={`absolute bottom-4 left-4 inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest backdrop-blur-md ${
                    CATEGORY_COLORS[post.category] ?? "bg-white/85 text-[var(--color-cocoa)]"
                  }`}
                >
                  {post.category}
                </span>
                {/* Read time — bottom right */}
                <span className="absolute bottom-4 right-4 rounded-full bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white/95 backdrop-blur-md">
                  {post.readTime}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col px-6 pb-7 pt-6">
                <h2 className="font-display text-xl leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-rosegold)]">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-cocoa)]">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-[var(--color-taupe)]">
                  <span>
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="font-medium text-[var(--color-cocoa)] transition group-hover:text-[var(--color-rosegold)]">
                    Read article →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
