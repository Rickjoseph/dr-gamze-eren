"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/content/blog";

type Props = {
  posts: Post[];
  /** Heading copy — passed from server component (locale-aware) */
  eyebrow: string;
  headlineA: string;
  headlineAccent: string;
  cta: string;
  readMore: string;
};

const CATEGORY_COLORS: Record<string, string> = {
  Rhinoplasty: "bg-rose-100/90 text-rose-800",
  Breast: "bg-pink-100/90 text-pink-800",
  Body: "bg-amber-100/90 text-amber-800",
  Face: "bg-purple-100/90 text-purple-800",
  "Patient Guide": "bg-teal-100/90 text-teal-800",
};

/**
 * Snap-scroll blog carousel.
 *
 * - Mobile / tablet: touch swipe is native (CSS scroll-snap).
 * - Desktop: prev/next pill buttons advance one card at a time. Buttons
 *   disable themselves at the ends and the arrows hide entirely below
 *   `sm:` so phone users aren't shown chrome they don't need.
 * - Uses `IntersectionObserver` against the scroll container to enable
 *   each button only when there's actually somewhere to scroll.
 */
export function BlogCarousel({ posts, eyebrow, headlineA, headlineAccent, cta, readMore }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
  }, []);

  useEffect(() => {
    updateButtons();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateButtons, { passive: true });
    const ro = new ResizeObserver(updateButtons);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      ro.disconnect();
    };
  }, [updateButtons]);

  function scrollByCards(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    // One card width = first child width + the gap (gap-5 = 20px)
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  }

  return (
    <section className="relative px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header row with arrows on the right (desktop only) */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="headline mt-3 text-4xl sm:text-5xl">
              {headlineA}{" "}
              <span className="italic-accent">{headlineAccent}</span>
            </h2>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCards(-1)}
              disabled={!canPrev}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/60 bg-white/50 text-[var(--color-cocoa)] backdrop-blur-md transition hover:bg-white/80 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCards(1)}
              disabled={!canNext}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/60 bg-white/50 text-[var(--color-cocoa)] backdrop-blur-md transition hover:bg-white/80 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll-snap track. Negative margin + padding bleeds the cards
            to the screen edge on mobile so peek-of-next-card works. */}
        <div
          ref={scrollerRef}
          className="mt-10 -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:scroll-px-8 sm:px-8"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex w-[78vw] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/30 shadow-[0_8px_32px_-8px_rgba(26,20,16,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_-12px_rgba(26,20,16,0.22)] sm:w-[360px]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 640px) 78vw, 360px"
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
                <span className="absolute bottom-4 right-4 rounded-full bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white/95 backdrop-blur-md">
                  {post.readTime}
                </span>
              </div>
              <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                <h3 className="font-display text-lg leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-rosegold)]">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--color-cocoa)]">
                  {post.excerpt}
                </p>
                <span className="mt-4 text-xs font-medium uppercase tracking-widest text-[var(--color-cocoa)] transition group-hover:text-[var(--color-rosegold)]">
                  {readMore} →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA — view all */}
        <div className="mt-6 flex justify-center sm:justify-end">
          <Link
            href="/blog"
            className="text-sm font-medium text-[var(--color-cocoa)] underline decoration-[var(--color-rosegold)] decoration-2 underline-offset-4 transition hover:text-[var(--color-ink)]"
          >
            {cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
