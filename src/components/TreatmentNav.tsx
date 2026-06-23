"use client";

import Link from "next/link";
import type { Treatment } from "@/content/treatments/types";

type NavLabels = {
  prev: string;
  next: string;
};

type Props = {
  prev: Treatment | null;
  next: Treatment | null;
  prevTitle: string | null;
  nextTitle: string | null;
  categoryLabel: string;
  labels: NavLabels;
};

export function TreatmentNav({
  prev,
  next,
  prevTitle,
  nextTitle,
  categoryLabel,
  labels,
}: Props) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Treatment navigation"
      className="mx-auto mt-8 max-w-5xl grid gap-3 px-4 sm:px-8 pb-16"
      style={{ gridTemplateColumns: prev && next ? "1fr 1fr" : "1fr" }}
    >
      {/* PREV */}
      {prev ? (
        <Link
          href={`/services/${prev.slug}`}
          className="group flex flex-col gap-1 rounded-2xl border border-white/60 bg-white/40 px-5 py-4 backdrop-blur-md transition hover:bg-white/60 hover:shadow-md"
        >
          <span className="text-[0.65rem] font-semibold tracking-widest text-[var(--color-taupe)] uppercase">
            {labels.prev}
          </span>
          <span className="mt-1 flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]">
            <span className="text-base transition group-hover:-translate-x-0.5">←</span>
            <span>{prevTitle}</span>
          </span>
          <span className="text-[0.7rem] text-[var(--color-taupe)]">{categoryLabel}</span>
        </Link>
      ) : (
        /* Empty placeholder so NEXT stays right-aligned */
        <div />
      )}

      {/* NEXT */}
      {next && (
        <Link
          href={`/services/${next.slug}`}
          className="group flex flex-col items-end gap-1 rounded-2xl border border-white/60 bg-white/40 px-5 py-4 backdrop-blur-md transition hover:bg-white/60 hover:shadow-md text-right"
        >
          <span className="text-[0.65rem] font-semibold tracking-widest text-[var(--color-taupe)] uppercase">
            {labels.next}
          </span>
          <span className="mt-1 flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]">
            <span>{nextTitle}</span>
            <span className="text-base transition group-hover:translate-x-0.5">→</span>
          </span>
          <span className="text-[0.7rem] text-[var(--color-taupe)]">{categoryLabel}</span>
        </Link>
      )}
    </nav>
  );
}
