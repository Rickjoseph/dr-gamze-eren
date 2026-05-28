import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Journal",
  description: "Procedure guides, recovery advice, and patient stories from Dr. Gamze Eren's clinic in Istanbul.",
};

const CATEGORY_COLORS: Record<string, string> = {
  Rhinoplasty: "bg-rose-100 text-rose-700",
  Breast: "bg-pink-100 text-pink-700",
  Body: "bg-amber-100 text-amber-700",
  Face: "bg-purple-100 text-purple-700",
  "Patient Guide": "bg-teal-100 text-teal-700",
};

export default function BlogPage() {
  return (
    <section className="relative px-4 sm:px-8">
      <div className="mx-auto max-w-5xl pt-8 pb-20">

        {/* Header */}
        <p className="eyebrow">Journal</p>
        <h1 className="headline mt-4 text-[clamp(2.4rem,6vw,4.6rem)]">
          Insights &{" "}
          <span className="italic-accent">guidance.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-cocoa)]">
          Procedure guides, recovery advice, and honest answers to the questions patients ask most.
        </p>

        {/* Post grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-3xl overflow-hidden bg-white/30 border border-white/60 shadow-[0_8px_32px_-8px_rgba(26,20,16,0.12)] hover:shadow-[0_16px_48px_-8px_rgba(26,20,16,0.18)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Category pill */}
              <div className="px-6 pt-6">
                <span className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${CATEGORY_COLORS[post.category] ?? "bg-gray-100 text-gray-600"}`}>
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-6 pb-6 pt-4">
                <h2 className="font-display text-xl leading-snug text-[var(--color-ink)] group-hover:text-[var(--color-rosegold)] transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-cocoa)] flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-[var(--color-taupe)]">
                  <span>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
