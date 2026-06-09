"use client";

import { useState } from "react";
import Image from "next/image";
import { GlassCard } from "@/components/GlassCard";
import type { PublicationsLabels } from "@/content/publications";

type Props = {
  labels: PublicationsLabels;
  journal: string[];
  international: string[];
};

// Subtle, collapsed-by-default disclosure for Dr. Gamze's academic record.
// Keeps the About page calm while still surfacing credibility on demand.
export function PublicationsAccordion({ labels, journal, international }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <GlassCard className="p-6 sm:p-9">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 text-left sm:gap-4"
      >
        <span className="flex min-w-0 items-center gap-4">
          <Image
            src="/team/dr-gamze-eren-profile.jpg"
            alt="Dr. Gamze Eren, plastic surgeon"
            width={64}
            height={80}
            className="shrink-0 rounded-2xl object-cover shadow-sm ring-1 ring-white/70"
          />
          <span className="min-w-0">
            <span className="eyebrow block">{labels.eyebrow}</span>
            <span className="mt-1 block font-display text-xl leading-tight sm:text-3xl">
              {labels.title}
            </span>
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-2 text-sm text-[var(--color-taupe)]">
          <span className="hidden sm:inline">{open ? labels.hideLabel : labels.showLabel}</span>
          <svg
            className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-7 text-sm leading-relaxed text-[var(--color-cocoa)]">
            <Group label={labels.journalLabel} items={journal} />
            <Group label={labels.internationalLabel} items={international} />
            <div>
              <p className="eyebrow text-[var(--color-rosegold)]">{labels.nationalLabel}</p>
              <p className="mt-2">{labels.nationalSummary}</p>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function Group({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="eyebrow text-[var(--color-rosegold)]">{label}</p>
      <ol className="mt-2 space-y-2">
        {items.map((cite, i) => (
          <li key={i} className="flex gap-3">
            <span className="select-none text-[var(--color-taupe)]">{i + 1}.</span>
            <span>{cite}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
