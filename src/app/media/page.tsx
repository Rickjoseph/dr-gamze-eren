"use client";

import { useState } from "react";

type MediaType = "all" | "videos" | "shorts";

interface MediaItem {
  id: string;
  type: Exclude<MediaType, "all">;
  title: string;
  embedId: string;
}

const MEDIA: MediaItem[] = [
  // ── Full videos ────────────────────────────────────────────────────────────
  { id: "v1", type: "videos", title: "3D Simulation in Rhinoplasty", embedId: "voMKa2LoFGA" },
  { id: "v2", type: "videos", title: "Surgical Options for Abdominal Fat", embedId: "W5krMI9z00A" },
  { id: "v3", type: "videos", title: "What Is the Optimal Age for Breast Augmentation?", embedId: "w9h87wyOReY" },
  { id: "v4", type: "videos", title: "Breast Augmentation — Frequently Asked Questions", embedId: "oY0VYSY4XKw" },
  { id: "v5", type: "videos", title: "Upper Eyelid Surgery", embedId: "T2tynp3sHfY" },
  { id: "v6", type: "videos", title: "Dr. Güler Gamze Eren — Clinic Overview", embedId: "IWYZ0xdnkGw" },

  // ── Shorts ─────────────────────────────────────────────────────────────────
  { id: "s1", type: "shorts", title: "Skincare, Botox & Beauty", embedId: "IuuVzMBW0kk" },
  { id: "s2", type: "shorts", title: "Operations After Bariatric Surgery", embedId: "PUKhOe9bqIg" },
  { id: "s3", type: "shorts", title: "Tummy Tuck — What You Need to Know", embedId: "UmFWHitIWwY" },
  { id: "s4", type: "shorts", title: "Breast Lift — Dr. Güler Gamze Eren", embedId: "93uiIwCpROk" },
  { id: "s5", type: "shorts", title: "Liposuction — Dr. Güler Gamze Eren", embedId: "za0CTtMgt6s" },
  { id: "s6", type: "shorts", title: "Abdominoplasty Explained", embedId: "bvpDLbyZsXQ" },
  { id: "s7", type: "shorts", title: "Breast Lift — Procedure Highlights", embedId: "8UBDJ1HH44Q" },
  { id: "s8", type: "shorts", title: "Liposuction Highlights", embedId: "Ex-pTZ8aVvY" },
  { id: "s9", type: "shorts", title: "Post Bariatric Surgery Overview", embedId: "vZAiWt9MABs" },
];

const FILTERS: { key: MediaType; label: string }[] = [
  { key: "all",    label: "All" },
  { key: "videos", label: "Videos" },
  { key: "shorts", label: "Shorts" },
];

function YouTubeEmbed({ embedId, title, isShort }: { embedId: string; title: string; isShort: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const thumb = `https://img.youtube.com/vi/${embedId}/hqdefault.jpg`;

  const embedUrl = isShort
    ? `https://www.youtube.com/embed/${embedId}?autoplay=1&loop=1&playlist=${embedId}`
    : `https://www.youtube.com/embed/${embedId}?autoplay=1`;

  return loaded ? (
    <iframe
      className="absolute inset-0 w-full h-full rounded-2xl"
      src={embedUrl}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ) : (
    <button
      onClick={() => setLoaded(true)}
      className="absolute inset-0 w-full h-full group"
      aria-label={`Play ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={thumb} alt={title} className="w-full h-full object-cover rounded-2xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/90 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"
            style={{ color: "var(--color-rosegold)" }}>
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      {isShort && (
        <div className="absolute top-3 right-3 bg-black/60 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
          Short
        </div>
      )}
    </button>
  );
}

function MediaCard({ item }: { item: MediaItem }) {
  const isShort = item.type === "shorts";
  return (
    <div className="rounded-3xl overflow-hidden bg-white/30 border border-white/60 shadow-[0_8px_32px_-8px_rgba(26,20,16,0.12)] flex flex-col hover:shadow-[0_16px_48px_-8px_rgba(26,20,16,0.18)] hover:-translate-y-1 transition-all duration-300">
      <div className={`relative w-full bg-black rounded-2xl m-2 overflow-hidden ${isShort ? "aspect-[9/16]" : "aspect-video"}`}
        style={{ width: "calc(100% - 1rem)" }}>
        <YouTubeEmbed embedId={item.embedId} title={item.title} isShort={isShort} />
      </div>
      <div className="px-5 py-4">
        <span className="text-[10px] uppercase tracking-widest text-[var(--color-taupe)]">
          {isShort ? "Short" : "Video"} · YouTube
        </span>
        <p className="mt-1 text-sm font-medium text-[var(--color-cocoa)]">{item.title}</p>
      </div>
    </div>
  );
}

export default function MediaPage() {
  const [active, setActive] = useState<MediaType>("all");
  const filtered = active === "all" ? MEDIA : MEDIA.filter((m) => m.type === active);
  const isShortView = active === "shorts";

  return (
    <section className="relative px-4 sm:px-8">
      <div className="mx-auto max-w-6xl pt-8 pb-20">

        {/* Header */}
        <p className="eyebrow">Media</p>
        <h1 className="headline mt-4 text-[clamp(2.4rem,6vw,4.6rem)]">
          Watch &{" "}
          <span className="italic-accent">learn.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-cocoa)]">
          Procedure walkthroughs, recovery tips, and expert insights — from Dr. Gamze Eren's YouTube channel.
        </p>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition border ${
                active === f.key
                  ? "text-white border-transparent"
                  : "bg-white/40 border-white/60 text-[var(--color-cocoa)] hover:bg-white/60"
              }`}
              style={active === f.key ? { background: "linear-gradient(135deg, var(--color-rosegold), var(--color-rose))", borderColor: "transparent" } : {}}
            >
              {f.label}
              <span className="ml-1.5 opacity-60 text-xs">
                {f.key === "all" ? MEDIA.length : MEDIA.filter(m => m.type === f.key).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={`mt-10 grid gap-6 ${
          isShortView
            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}>
          {filtered.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>

        {/* YouTube channel link */}
        <div className="mt-14 text-center">
          <p className="text-sm text-[var(--color-taupe)]">See more on YouTube</p>
          <a
            href="https://www.youtube.com/@dr.gamzeozcansclinic4133"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold border border-white/60 bg-white/40 text-[var(--color-cocoa)] hover:bg-white/70 transition"
          >
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            @dr.gamzeozcansclinic4133
          </a>
        </div>

      </div>
    </section>
  );
}
