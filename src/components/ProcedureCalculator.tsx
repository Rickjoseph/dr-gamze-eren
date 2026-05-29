"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { PROCEDURES, calcPackagePrice, type Procedure } from "@/lib/pricingData";

const CATEGORIES = Array.from(new Set(PROCEDURES.map((p) => p.category)));

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
  };
};

export function ProcedureCalculator({ labels }: Props) {
  const [selected, setSelected] = useState<Procedure[]>([]);
  const [pickCategory, setPickCategory] = useState<string>(CATEGORIES[0]);
  const [pickId, setPickId] = useState<string>("");

  const availableInCategory = PROCEDURES.filter(
    (p) => p.category === pickCategory && !selected.find((s) => s.id === p.id)
  );

  const result = useMemo(() => calcPackagePrice(selected), [selected]);
  const sortedSelected = useMemo(
    () => [...selected].sort((a, b) => b.high - a.high),
    [selected]
  );

  function addProcedure() {
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
    <div className="mx-auto max-w-2xl">
      <GlassCard className="rounded-2xl p-6 sm:p-8">
        <h3 className="font-display text-lg font-semibold text-[var(--color-ink)] mb-4">
          {labels.addProcedure}
        </h3>
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
        <div className="flex gap-3">
          <select
            value={pickId}
            onChange={(e) => setPickId(e.target.value)}
            className="flex-1 rounded-xl border border-[var(--color-cocoa)]/20 bg-white/60 px-4 py-3 text-sm text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-cocoa)]/30"
          >
            <option value="">{labels.selectPlaceholder}</option>
            {availableInCategory.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
          <button
            onClick={addProcedure}
            disabled={!pickId}
            className="rounded-xl bg-[var(--color-cocoa)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-30"
          >
            +
          </button>
        </div>
        {selected.length === 0 && (
          <p className="mt-4 text-sm text-[var(--color-cocoa)]/60 text-center italic">
            {labels.emptyHint}
          </p>
        )}
      </GlassCard>

      {selected.length > 0 && (
        <GlassCard className="mt-6 rounded-2xl p-6 sm:p-8" tint="rose">
          <h3 className="font-display text-lg font-semibold text-[var(--color-ink)] mb-5">
            {labels.yourPackage}
          </h3>
          <div className="space-y-3">
            {sortedSelected.map((proc, i) => {
              const factor = i === 0 ? 1 : 0.75;
              return (
                <div key={proc.id} className="flex items-center justify-between gap-4 rounded-xl bg-white/50 px-4 py-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[var(--color-ink)] truncate">{proc.name}</p>
                    <p className={`text-xs mt-0.5 ${i === 0 ? "text-[var(--color-cocoa)]/60" : "text-emerald-600 font-medium"}`}>
                      {i === 0 ? labels.fullPrice : `25% ${labels.off}`}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-semibold text-[var(--color-ink)]">
                      €{Math.round(proc.low * factor).toLocaleString()} – €{Math.round(proc.high * factor).toLocaleString()}
                    </p>
                  </div>
                  <button onClick={() => remove(proc.id)} className="ml-2 text-[var(--color-cocoa)]/40 hover:text-rose-400 transition text-xl leading-none">
                    ×
                  </button>
                </div>
              );
            })}
          </div>
          <div className="mt-5 border-t border-[var(--color-cocoa)]/10 pt-5 flex items-center justify-between">
            <p className="font-display text-base font-semibold text-[var(--color-ink)]">{labels.total}</p>
            <p className="font-display text-2xl font-bold text-[var(--color-ink)]">
              €{result.low.toLocaleString()} – €{result.high.toLocaleString()}
            </p>
          </div>
          <Link href={labels.ctaHref} className="mt-6 block w-full rounded-xl bg-[var(--color-cocoa)] px-6 py-4 text-center text-sm font-semibold tracking-wide uppercase text-white transition hover:opacity-90">
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
