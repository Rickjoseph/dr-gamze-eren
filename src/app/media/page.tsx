"use client";

import { useState } from "react";

type MediaType = "all" | "videos" | "shorts" | "reels";

interface MediaItem {
  id: string;
  type: Exclude<MediaType, "all">;
  title: string;
  platform: "youtube" | "instagram";
  embedId: string; // YouTube video ID or Instagram shortcode
  thumbnail?: string;
}

// Placeholder items — swap embedIds with real ones when Dr. Gamze shares her links
const MEDIA: MediaItem[] = [
  {
    id: "1",
    type: "videos",
    title: "Rhinoplasty: What to Expect",
    platform: "youtube",
    embedId: "dQw4w9WgXcQ", // placeholder — replace with real YouTube ID
  },
  {
    id: "2",
    type: "videos",
    title: "3D Kratos Simulation Explained",
    platform: "youtube",
    embedId: "dQw4w9WgXcQ", // placeholder
  },
  {
    id: "3",
    type: "shorts",
    title: "Recovery tip: sleeping position after rhinoplasty",
    platform: "youtube",
    embedId: "dQw4w9WgXcQ", // placeholder
  },
  {
    id: "4",
    type: "shorts",
    title: "Breast augmentation — implant types explained in 60 seconds",
    platform: "youtube",
    embedId: "dQw4w9WgXcQ", // placeholder
  },
  {
    id: "5",
    type: "reels",
    title: "A day at the clinic",
    platform: "instagram",
    embedId: "placeholder", // replace with Instagram reel shortcode
  },
  {
    id: "6",
    type: "reels",
    title: "Istanbul — recovering in one of the world's great cities",
    platform: "instagram",
    embedId: "placeholder",
  },
];

const FILTERS: { key: MediaType; label: string }[] = [
  { key: "all",    label: "All" },
  { key: "videos", label: "Videos" },
  { key: "shorts", label: "Shorts" },
  { key: "reels",  label: "Reels" },
];

function YouTubeEmbed({ embedId, title }: { embedId: string; title: string }) {
  const [loaded, setLoaded] = useState(false);
  const thumb = `https://img.youtube.com/vi/${embedId}/hqdefault.jpg`;

  return loaded ? (
    <iframe
      className="absolute inset-0 w-full h-full rounded-2xl"
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
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
      {/* Thumbnail */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={thumb} alt={title} className="w-full h-full object-cover rounded-2xl" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/90 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-[var(--color-rosegold)] ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}

function InstagramPlaceholder({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] rounded-2xl text-white p-6 text-center">
      <svg className="w-10 h-10 mb-3 opacity-90" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
      <p className="text-sm font-medium leading-snug">{title}</p>
      <p className="mt-2 text-xs opacity-75">Instagram Reel — coming soon</p>
    </div>
  );
}

function MediaCard({ item }: { item: MediaItem }) {
  const isShort = item.type === "shorts";
  return (
    <div className={`rounded-3xl overflow-hidden bg-white/30 border border-white/60 shadow-[0_8px_32px_-8px_rgba(26,20,16,0.12)] flex flex-col ${isShort ? "max-w-xs mx-auto" : ""}`}>
      {/* Video area */}
      <div className={`relative w-full bg-black rounded-2xl m-2 overflow-hidden ${isShort ? "aspect-[9/16]" : "aspect-video"}`}>
        {item.platform === "youtube" ? (
          <YouTubeEmbed embedId={item.embedId} title={item.title} />
        ) : (
          <InstagramPlaceholder title={item.title} />
        )}
      </div>
      {/* Caption */}
      <div className="px-5 py-4">
        <span className="text-[10px] uppercase tracking-widest text-[var(--color-taupe)]">
          {item.type === "shorts" ? "Short" : item.type === "reels" ? "Reel" : "Video"} · {item.platform === "youtube" ? "YouTube" : "Instagram"}
        </span>
        <p className="mt-1 text-sm font-medium text-[var(--color-cocoa)]">{item.title}</p>
      </div>
    </div>
  );
}

export default function MediaPage() {
  const [active, setActive] = useState<MediaType>("all");
  const filtered = active === "all" ? MEDIA : MEDIA.filter((m) => m.type === active);

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
          Procedure walkthroughs, recovery tips, and a closer look at the clinic — from Dr. Gamze Eren's YouTube channel and Instagram.
        </p>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition border ${
                active === f.key
                  ? "bg-[var(--color-rosegold)] border-[var(--color-rosegold)] text-white"
                  : "bg-white/40 border-white/60 text-[var(--color-cocoa)] hover:bg-white/60"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid — shorts get a narrower column */}
        <div className={`grid gap-6 ${
          active === "shorts"
            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}>
          {filtered.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
