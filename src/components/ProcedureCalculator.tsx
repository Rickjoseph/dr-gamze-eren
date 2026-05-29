"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { LeadGate } from "@/components/LeadGate";
import { PROCEDURES, calcPackagePrice, type Procedure } from "@/lib/pricingData";

const CATEGORIES = Array.from(new Set(PROCEDURES.map((p) => p.category)));
const MAX_PROCEDURES = 3;

function round100(n: number) {
  return Math.round(n / 100) * 100;
}

type Props = {
  labels: {
    addProcedure: string;
    selectPlaceholder: string;
    yourPackage: string;
    total: string;
    ctaLabel: string;
    ctaHref: string;
    disclaimer: string;
    remove: string;
    fullPrice: string;
    off: string;
    emptyHint: string;
    title?: string;
    subtitle?: string;
    // Gate labels
    gateTitle: string;
    gateSub: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    phoneHint: string;
    submitLabel: string;
    submitting: string;
    privacyNote: string;
  };
};

export function ProcedureCalculator({ labels }: Props) {
  const [selected, setSelected] = useState<Procedure[]>([]);
  const [pickCategory, setPickCategory] = useState<string>(CATEGORIES[0]);
  const [pickId, setPickId] = useState<string>("");
  const [unlocked, setUnlocked] = useState(false);

  // Restore session unlock on mount
  useEffect(() => {
    try {
      if (sessionStorage.getItem("calc_unlocked") === "1") setUnlocked(true);
    } catch {}
  }, []);

  const availableInCategory = PROCEDURES.filter(
    (p) => p.category === pickCategory && !selected.find((s) => s.id === p.id)
  );

  const result = useMemo(() => calcPackagePrice(selected), [selected]);
  const sortedSelected = useMemo(
    () => [...selected].sort((a, b) => b.high - a.high),
    [selected]
  );

  const limitReached = selected.length >= MAX_PROCEDURES;

  function addProcedure() {
    if (limitReached) return;
    const proc = PROCEDURES.find((p) => p.id === pickId);
    if (proc && !selected.find((s) => s.id === proc.id)) {
      setSelected((prev) => [...prev, proc]);
      setPickId("");
    }
  }

  function remove(id: string) {
    setSelected((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="mx-auto max-w-2xl w-full">
      {/* ── Step 1: Procedure selector (always visible) ── */}
      <GlassCard className="rounded-2xl p-6 sm:p-8">
        <h3 className="font-display text-lg font-semibold text-[var(--color-ink)] mb-4">
          {labels.addProcedure}
        </h3>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setPickCategory(cat); setPickId(""); }}
              className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase transition-all ${
                pickCategory === cat
                  ? "bg-[var(--color-cocoa)] text-white"
                  : "border border-[var(--color-cocoa)]/30 text-[var(--color-cocoa)] hover:border-[var(--color-cocoa)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Select + Add */}
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={pickId}
            onChange={(e) => setPickId(e.target.value)}
            disabled={limitReached}
            className="w-full sm:flex-1 rounded-xl border border-[var(--color-cocoa)]/20 bg-white/60 px-4 py-3 text-sm text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-cocoa)]/30 disabled:opacity-40"
          >
            <option value="">{labels.selectPlaceholder}</option>
            {availableInCategory.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
          <button
            onClick={addProcedure}
            disabled={!pickId || limitReached}
            className="w-full sm:w-auto rounded-xl bg-[var(--color-cocoa)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-30"
          >
            + Add
          </button>
        </div>

        {limitReached && (
          <p className="mt-3 text-xs text-center text-[var(--color-cocoa)]/60 italic">
            Maximum {MAX_PROCEDURES} procedures reached. Remove one to add another.
          </p>
        )}

        {selected.length === 0 && (
          <p className="mt-4 text-sm text-[var(--color-cocoa)]/60 text-center italic">
            {labels.emptyHint}
          </p>
        )}
      </GlassCard>

      {/* ── Step 2: Gate — shown once at least 1 procedure is selected ── */}
      {selected.length > 0 && !unlocked && (
        <div className="mt-6">
          <LeadGate
            labels={{
              gateTitle: labels.gateTitle,
              gateSub: labels.gateSub,
              namePlaceholder: labels.namePlaceholder,
              emailPlaceholder: labels.emailPlaceholder,
              phonePlaceholder: labels.phonePlaceholder,
              phoneHint: labels.phoneHint,
              submitLabel: labels.submitLabel,
              submitting: labels.submitting,
              privacyNote: labels.privacyNote,
            }}
            procedures={sortedSelected.map((p) => p.name)}
            estimatedMin={round100(result.low)}
            estimatedMax={round100(result.high)}
            onUnlock={() => setUnlocked(true)}
          />
        </div>
      )}

      {/* ── Step 3: Results — only after gate is passed ── */}
      {selected.length > 0 && unlocked && (
        <GlassCard className="mt-6 rounded-2xl p-6 sm:p-8" tint="rose">
          <h3 className="font-display text-lg font-semibold text-[var(--color-ink)] mb-5">
            {labels.yourPackage}
          </h3>
          <div className="space-y-3">
            {sortedSelected.map((proc, i) => {
              const factor = i === 0 ? 1 : 0.75;
              return (
                <div key={proc.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3 rounded-xl bg-white/50 px-4 py-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[var(--color-ink)]">{proc.name}</p>
                    <p className={`text-xs mt-0.5 ${i === 0 ? "text-[var(--color-cocoa)]/60" : "text-emerald-600 font-medium"}`}>
                      {i === 0 ? labels.fullPrice : `25% ${labels.off}`}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-[var(--color-ink)]">
                    €{round100(proc.low * factor).toLocaleString()} – €{round100(proc.high * factor).toLocaleString()}
                  </p>
                  <button
                    onClick={() => remove(proc.id)}
                    aria-label={labels.remove}
                    className="shrink-0 text-[var(--color-cocoa)]/40 hover:text-rose-400 transition text-xl leading-none"
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-5 border-t border-[var(--color-cocoa)]/10 pt-5 flex items-center justify-between">
            <p className="font-display text-base font-semibold text-[var(--color-ink)]">{labels.total}</p>
            <p className="font-display text-xl sm:text-2xl font-bold text-[var(--color-ink)]">
              €{round100(result.low).toLocaleString()} – €{round100(result.high).toLocaleString()}
            </p>
          </div>

          <Link
            href={labels.ctaHref}
            className="mt-6 block w-full rounded-xl bg-[var(--color-cocoa)] px-6 py-4 text-center text-sm font-semibold tracking-wide uppercase text-white transition hover:opacity-90"
          >
            {labels.ctaLabel}
          </Link>
          <p className="mt-4 text-xs text-center text-[var(--color-cocoa)]/50 leading-relaxed">
            {labels.disclaimer}
          </p>
        </GlassCard>
      )}
    </div>
  );
}
