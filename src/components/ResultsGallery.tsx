"use client";

import { useState, useRef, useCallback } from "react";
import type { Dict } from "@/i18n/dict";

type Category = "all" | "rhinoplasty" | "breast" | "body" | "face";

interface Case {
  id: number;
  category: Exclude<Category, "all">;
  before: string;
  after: string;
}

// Stable case data — IDs and images only. The label/tag come from
// `t.results.cases[i]` so the gallery stays trilingual without
// duplicating the array per locale. Order here MUST match the order
// of dict.results.cases (the dict array is keyed by index).
const CASES: Case[] = [
  {
    id: 1,
    category: "rhinoplasty",
    before: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80&fit=crop&crop=face",
    after:  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80&fit=crop&crop=face",
  },
  {
    id: 2,
    category: "rhinoplasty",
    before: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80&fit=crop&crop=face",
    after:  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80&fit=crop&crop=face",
  },
  {
    id: 3,
    category: "breast",
    before: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80&fit=crop&crop=top",
    after:  "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=600&q=80&fit=crop&crop=top",
  },
  {
    id: 4,
    category: "breast",
    before: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80&fit=crop&crop=top",
    after:  "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&q=80&fit=crop&crop=top",
  },
  {
    id: 5,
    category: "body",
    before: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80&fit=crop",
    after:  "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80&fit=crop",
  },
  {
    id: 6,
    category: "body",
    before: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=600&q=80&fit=crop",
    after:  "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80&fit=crop",
  },
  {
    id: 7,
    category: "face",
    before: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&fit=crop&crop=face",
    after:  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&fit=crop&crop=face",
  },
  {
    id: 8,
    category: "face",
    before: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80&fit=crop&crop=face",
    after:  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&q=80&fit=crop&crop=face",
  },
];

const CATEGORY_KEYS: Category[] = ["all", "rhinoplasty", "breast", "body", "face"];

// ── Before/After slider card ──────────────────────────────────────────────────
function SliderCard({
  c,
  caseLabel,
  caseTag,
  beforeLabel,
  afterLabel,
}: {
  c: Case;
  caseLabel: string;
  caseTag: string;
  beforeLabel: string;
  afterLabel: string;
}) {
  const [pos, setPos] = useState(50); // percentage
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const updatePos = useCallback((clientX: number) => {
    if (!ref.current) return;
    const { left, width } = ref.current.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - left) / width) * 100));
    setPos(pct);
  }, []);

  return (
    <div className="rounded-3xl overflow-hidden bg-white/30 border border-white/60 shadow-[0_8px_32px_-8px_rgba(26,20,16,0.18)] group">
      <div
        ref={ref}
        className="relative aspect-[4/5] select-none cursor-col-resize overflow-hidden"
        onMouseMove={(e) => dragging && updatePos(e.clientX)}
        onMouseDown={(e) => { setDragging(true); updatePos(e.clientX); }}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onTouchMove={(e) => updatePos(e.touches[0].clientX)}
        onTouchStart={(e) => updatePos(e.touches[0].clientX)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={c.after}
          alt={`${caseLabel} ${afterLabel}`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${pos}%` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={c.before}
            alt={`${caseLabel} ${beforeLabel}`}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        <div
          className="absolute inset-y-0 w-px bg-white/90 shadow-[0_0_8px_rgba(255,255,255,0.8)] pointer-events-none"
          style={{ left: `${pos}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-none"
          style={{ left: `${pos}%` }}
        >
          <svg className="w-4 h-4 text-[var(--color-cocoa)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
          </svg>
        </div>

        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-white/90 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full pointer-events-none">
          {beforeLabel}
        </span>
        <span className="absolute top-3 right-3 text-[10px] uppercase tracking-widest text-white/90 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full pointer-events-none">
          {afterLabel}
        </span>

        <div
          className="absolute inset-0 pointer-events-none"
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>

      <div className="px-5 py-4">
        <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">{caseLabel}</p>
        <p className="mt-1 text-sm text-[var(--color-cocoa)]">{caseTag}</p>
      </div>
    </div>
  );
}

// ── Consent gate ──────────────────────────────────────────────────────────────
function ConsentGate({ t, onAccept }: { t: Dict; onAccept: () => void }) {
  const c = t.results.consent;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--color-ivory)]/80 backdrop-blur-md">
      <div className="max-w-md w-full rounded-3xl bg-white/60 border border-white/70 shadow-[0_30px_60px_-20px_rgba(26,20,16,0.25)] p-8 text-center">
        <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">{c.eyebrow}</p>
        <h2 className="font-display text-3xl mt-4 text-[var(--color-ink)]">
          {c.headlineA}{" "}
          <span className="italic text-[var(--color-rosegold)]">{c.headlineAccent}</span>
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-cocoa)]">{c.body}</p>
        <p className="mt-3 text-xs text-[var(--color-taupe)]">{c.rights}</p>
        <button
          onClick={onAccept}
          className="mt-7 w-full rounded-2xl py-3.5 text-sm font-semibold text-white transition hover:opacity-90 active:scale-95"
          style={{ background: "linear-gradient(135deg, var(--color-rosegold), var(--color-rose))" }}
        >
          {c.accept}
        </button>
        <a href="/" className="mt-3 block text-xs text-[var(--color-taupe)] hover:text-[var(--color-cocoa)] transition">
          {c.back}
        </a>
      </div>
    </div>
  );
}

// ── Main gallery ──────────────────────────────────────────────────────────────
export function ResultsGallery({ t }: { t: Dict }) {
  const [consented, setConsented] = useState(false);
  const [active, setActive] = useState<Category>("all");

  const r = t.results;
  const filtered = active === "all" ? CASES : CASES.filter((c) => c.category === active);

  return (
    <>
      {!consented && <ConsentGate t={t} onAccept={() => setConsented(true)} />}

      <section className="relative px-4 sm:px-8">
        <div className="mx-auto max-w-6xl pt-8 pb-12">
          <p className="eyebrow">{r.hero.eyebrow}</p>
          <h1 className="headline mt-4 text-[clamp(2.4rem,6vw,4.6rem)]">
            {r.hero.headlineA}{" "}
            <span className="italic-accent">{r.hero.headlineAccent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-cocoa)]">
            {r.hero.lede}
          </p>
        </div>
      </section>

      <section className="relative px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORY_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition border ${
                  active === key
                    ? "bg-[var(--color-rosegold)] border-[var(--color-rosegold)] text-white"
                    : "bg-white/40 border-white/60 text-[var(--color-cocoa)] hover:bg-white/60"
                }`}
              >
                {r.categories[key]}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-20">
            {filtered.map((c) => {
              // Look up translated label/tag by case index (1-based id -> 0-based array)
              const idx = c.id - 1;
              const meta = r.cases[idx] ?? { label: "", tag: "" };
              return (
                <SliderCard
                  key={c.id}
                  c={c}
                  caseLabel={meta.label}
                  caseTag={meta.tag}
                  beforeLabel={r.slider.before}
                  afterLabel={r.slider.after}
                />
              );
            })}
          </div>

          <p className="pb-16 text-center text-xs text-[var(--color-taupe)]">
            {r.disclaimer}
          </p>
        </div>
      </section>
    </>
  );
}
