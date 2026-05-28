"use client";

import { useState } from "react";

type MediaType = "all" | "videos" | "shorts" | "reels";

interface MediaItem {
  id: string;
  type: Exclude<MediaType, "all">;
  title: string;
  platform: "youtube" | "instagram";
  embedId: string;
  account?: string; // Instagram account handle
  lang?: string;    // Language tag e.g. "RU", "IT", "ES"
}

const MEDIA: MediaItem[] = [
  // ── Full YouTube videos ────────────────────────────────────────────────────
  { id: "v1", type: "videos", platform: "youtube", title: "3D Simulation in Rhinoplasty", embedId: "voMKa2LoFGA" },
  { id: "v2", type: "videos", platform: "youtube", title: "Surgical Options for Abdominal Fat", embedId: "W5krMI9z00A" },
  { id: "v3", type: "videos", platform: "youtube", title: "What Is the Optimal Age for Breast Augmentation?", embedId: "w9h87wyOReY" },
  { id: "v4", type: "videos", platform: "youtube", title: "Breast Augmentation — Frequently Asked Questions", embedId: "oY0VYSY4XKw" },
  { id: "v5", type: "videos", platform: "youtube", title: "Upper Eyelid Surgery", embedId: "T2tynp3sHfY" },
  { id: "v6", type: "videos", platform: "youtube", title: "Dr. Güler Gamze Eren — Clinic Overview", embedId: "IWYZ0xdnkGw" },

  // ── YouTube Shorts ─────────────────────────────────────────────────────────
  { id: "s1", type: "shorts", platform: "youtube", title: "Skincare, Botox & Beauty", embedId: "IuuVzMBW0kk" },
  { id: "s2", type: "shorts", platform: "youtube", title: "Operations After Bariatric Surgery", embedId: "PUKhOe9bqIg" },
  { id: "s3", type: "shorts", platform: "youtube", title: "Tummy Tuck — What You Need to Know", embedId: "UmFWHitIWwY" },
  { id: "s4", type: "shorts", platform: "youtube", title: "Breast Lift", embedId: "93uiIwCpROk" },
  { id: "s5", type: "shorts", platform: "youtube", title: "Liposuction", embedId: "za0CTtMgt6s" },
  { id: "s6", type: "shorts", platform: "youtube", title: "Abdominoplasty Explained", embedId: "bvpDLbyZsXQ" },
  { id: "s7", type: "shorts", platform: "youtube", title: "Post Bariatric Surgery Overview", embedId: "vZAiWt9MABs" },

  // ── Instagram Reels — @dr.gamze.eren (EN) ─────────────────────────────────
  { id: "r1", type: "reels", platform: "instagram", account: "dr.gamze.eren", title: "3D Simulation in Rhinoplasty", embedId: "DVdLU3ODAm6" },
  { id: "r2", type: "reels", platform: "instagram", account: "dr.gamze.eren", title: "Implants: In Front or Behind the Muscle?", embedId: "C6EYRejIDlp" },
  { id: "r3", type: "reels", platform: "instagram", account: "dr.gamze.eren", title: "Rhinoplasty — Beauty, Balance & Confidence", embedId: "DObQAF2jAeD" },
  { id: "r4", type: "reels", platform: "instagram", account: "dr.gamze.eren", title: "Rhinoplasty Before & After — 1 Year Result", embedId: "C3kuku4IfU-" },
  { id: "r5", type: "reels", platform: "instagram", account: "dr.gamze.eren", title: "6-Month Rhinoplasty Result", embedId: "DO5nCklCjZT" },
  { id: "r6", type: "reels", platform: "instagram", account: "dr.gamze.eren", title: "Upper Eyelid Surgery — A Younger Look", embedId: "CvmTAMNohbw" },
  { id: "r7", type: "reels", platform: "instagram", account: "dr.gamze.eren", title: "Thick Skin Revision Rhinoplasty", embedId: "DUoO_5ljaZb" },

  // ── Instagram Reels — @drgamzeerenclinic (EN/IT) ──────────────────────────
  { id: "r8",  type: "reels", platform: "instagram", account: "drgamzeerenclinic", title: "Upper Eyelid Blepharoplasty", embedId: "CkaEpGsDpWS" },
  { id: "r9",  type: "reels", platform: "instagram", account: "drgamzeerenclinic", title: "Patient Testimonials — Body Procedures", embedId: "CtwkI0CAJnm", lang: "ES" },
  { id: "r10", type: "reels", platform: "instagram", account: "drgamzeerenclinic", title: "Liposuction + Rhinoplasty Highlights", embedId: "Ck71c6xDC5s" },
  { id: "r11", type: "reels", platform: "instagram", account: "drgamzeerenclinic", title: "Rhinoplasty + Abdominoplasty + Breast Lift Combo", embedId: "C9LDOp9NdCC" },

  // ── Instagram Reels — @dr.gamzeeren.operations (RU) ──────────────────────
  { id: "r12", type: "reels", platform: "instagram", account: "dr.gamzeeren.operations", title: "Patient Review After Rhinoplasty (RU)", embedId: "C9CX7Sxoldr", lang: "RU" },
  { id: "r13", type: "reels", platform: "instagram", account: "dr.gamzeeren.operations", title: "Patient Review — Elena: Rhinoplasty & Breast Lift (RU)", embedId: "DDo0ztWoc9X", lang: "RU" },
  { id: "r14", type: "reels", platform: "instagram", account: "dr.gamzeeren.operations", title: "3D Nose Simulation — Patient Journey (RU)", embedId: "DLZOuCtMW8k", lang: "RU" },
  { id: "r15", type: "reels", platform: "instagram", account: "dr.gamzeeren.operations", title: "3D Simulation Before Operation (RU)", embedId: "DQZtueXDOgB", lang: "RU" },
  { id: "r16", type: "reels", platform: "instagram", account: "dr.gamzeeren.operations", title: "Breast Augmentation — 3 Month Result (RU)", embedId: "DMsylZNooDr", lang: "RU" },
];

const FILTERS: { key: MediaType; label: string }[] = [
  { key: "all",    label: "All" },
  { key: "videos", label: "Videos" },
  { key: "shorts", label: "Shorts" },
  { key: "reels",  label: "Reels" },
];

const LANG_BADGE: Record<string, string> = {
  RU: "🇷🇺",
  ES: "🇪🇸",
  IT: "🇮🇹",
};

function YouTubeCard({ item }: { item: MediaItem }) {
  const [loaded, setLoaded] = useState(false);
  const isShort = item.type === "shorts";
  const thumb = `https://img.youtube.com/vi/${item.embedId}/hqdefault.jpg`;
  const embedUrl = isShort
    ? `https://www.youtube.com/embed/${item.embedId}?autoplay=1&loop=1&playlist=${item.embedId}`
    : `https://www.youtube.com/embed/${item.embedId}?autoplay=1`;

  return (
    <div className="rounded-3xl overflow-hidden bg-white/30 border border-white/60 shadow-[0_8px_32px_-8px_rgba(26,20,16,0.12)] flex flex-col hover:shadow-[0_16px_48px_-8px_rgba(26,20,16,0.18)] hover:-translate-y-1 transition-all duration-300">
      <div
        className={`relative bg-black rounded-2xl m-2 overflow-hidden ${isShort ? "aspect-[9/16]" : "aspect-video"}`}
        style={{ width: "calc(100% - 1rem)" }}
      >
        {loaded ? (
          <iframe
            className="absolute inset-0 w-full h-full rounded-2xl"
            src={embedUrl}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button onClick={() => setLoaded(true)} className="absolute inset-0 w-full h-full group" aria-label={`Play ${item.title}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={thumb} alt={item.title} className="w-full h-full object-cover rounded-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24" style={{ color: "var(--color-rosegold)" }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {isShort && (
              <div className="absolute top-3 right-3 bg-black/60 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">Short</div>
            )}
          </button>
        )}
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

function InstagramReelCard({ item }: { item: MediaItem }) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
    setTimeout(() => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      } else {
        const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
        if (!existing) {
          const script = document.createElement("script");
          script.src = "https://www.instagram.com/embed.js";
          script.async = true;
          document.body.appendChild(script);
        }
      }
    }, 100);
  };

  const igGradient = "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)";

  return (
    <div className="rounded-3xl overflow-hidden bg-white/30 border border-white/60 shadow-[0_8px_32px_-8px_rgba(26,20,16,0.12)] flex flex-col hover:shadow-[0_16px_48px_-8px_rgba(26,20,16,0.18)] hover:-translate-y-1 transition-all duration-300">
      {!loaded ? (
        <button onClick={handleLoad} className="flex flex-col items-center justify-center gap-3 p-8 aspect-[4/5] w-full group text-center">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: igGradient }}>
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--color-cocoa)] leading-snug">
              {item.lang && <span className="mr-1">{LANG_BADGE[item.lang]}</span>}
              {item.title}
            </p>
            {item.account && (
              <p className="mt-1 text-[11px] text-[var(--color-taupe)]">@{item.account}</p>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full border border-white/60 bg-white/50 group-hover:bg-white/80 transition" style={{ color: "var(--color-cocoa)" }}>
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" style={{ color: "var(--color-rosegold)" }}>
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Reel
          </div>
        </button>
      ) : (
        <div className="p-2 min-h-[500px]">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={`https://www.instagram.com/reel/${item.embedId}/`}
            data-instgrm-version="14"
            style={{ maxWidth: "100%", margin: 0, width: "100%", minHeight: "480px" }}
          />
        </div>
      )}
      {!loaded && (
        <div className="px-5 pb-5">
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-taupe)]">Reel · Instagram</span>
        </div>
      )}
    </div>
  );
}

function MediaCard({ item }: { item: MediaItem }) {
  if (item.platform === "instagram") return <InstagramReelCard item={item} />;
  return <YouTubeCard item={item} />;
}

const SOCIAL_LINKS = [
  { label: "YouTube", handle: "@dr.gamzeozcansclinic4133", url: "https://www.youtube.com/@dr.gamzeozcansclinic4133", icon: "youtube" },
  { label: "Instagram (EN)", handle: "@dr.gamze.eren", url: "https://www.instagram.com/dr.gamze.eren", icon: "instagram" },
  { label: "Instagram (Clinic)", handle: "@drgamzeerenclinic", url: "https://www.instagram.com/drgamzeerenclinic", icon: "instagram" },
  { label: "Instagram (RU)", handle: "@dr.gamzeeren.operations", url: "https://www.instagram.com/dr.gamzeeren.operations", icon: "instagram" },
];

export default function MediaPage() {
  const [active, setActive] = useState<MediaType>("all");
  const filtered = active === "all" ? MEDIA : MEDIA.filter((m) => m.type === active);
  const isShortView = active === "shorts";

  const igGradient = "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)";

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
          Procedure walkthroughs, recovery tips, and patient results — from Dr. Gamze Eren across YouTube and Instagram.
        </p>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const count = f.key === "all" ? MEDIA.length : MEDIA.filter((m) => m.type === f.key).length;
            return (
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
                <span className="ml-1.5 opacity-60 text-xs">{count}</span>
              </button>
            );
          })}
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

        {/* Social follow section */}
        <div className="mt-16 rounded-3xl bg-white/30 border border-white/60 p-8 shadow-[0_8px_32px_-8px_rgba(26,20,16,0.10)]">
          <p className="text-center text-sm text-[var(--color-taupe)] mb-6 uppercase tracking-widest text-[11px]">Follow Dr. Gamze Eren</p>
          <div className="flex flex-wrap justify-center gap-3">
            {SOCIAL_LINKS.map((s) => (
              <a key={s.handle} href={s.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-2xl px-5 py-2.5 text-sm font-medium border border-white/60 bg-white/50 text-[var(--color-cocoa)] hover:bg-white/80 transition">
                {s.icon === "youtube" ? (
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                ) : (
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ color: "#E1306C" }}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )}
                <span className="leading-none">{s.handle}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
