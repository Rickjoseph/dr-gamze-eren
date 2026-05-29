"use client";

import { useState } from "react";

type Props = {
  labels: {
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
  procedures?: string[];
  estimatedMin?: number;
  estimatedMax?: number;
  onUnlock: () => void;
};

export function LeadGate({ labels, procedures, estimatedMin, estimatedMax, onUnlock }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setLoading(true);
    setError("");

    try {
      await fetch("/api/calculator-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || null,
          procedures: procedures ?? [],
          estimatedMin: estimatedMin ?? null,
          estimatedMax: estimatedMax ?? null,
        }),
      });
    } catch {
      // Non-blocking — we unlock regardless of API success
    }

    // Store in session so gate doesn't re-appear on same visit
    try { sessionStorage.setItem("calc_unlocked", "1"); } catch {}
    setLoading(false);
    onUnlock();
  }

  const inputClass =
    "w-full rounded-xl border border-[var(--color-cocoa)]/20 bg-white/70 px-4 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-cocoa)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-cocoa)]/30";

  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-2xl border border-[var(--color-cocoa)]/10 bg-[var(--color-cream)]/90 backdrop-blur-sm p-8 sm:p-10 text-center shadow-sm">
        {/* Icon */}
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-cocoa)]/8">
          <svg className="h-6 w-6 text-[var(--color-cocoa)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
          </svg>
        </div>

        <h2 className="font-display text-xl font-semibold text-[var(--color-ink)]">
          {labels.gateTitle}
        </h2>
        <p className="mt-2 text-sm text-[var(--color-cocoa)] leading-relaxed">
          {labels.gateSub}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-3 text-left">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={labels.namePlaceholder}
            className={inputClass}
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={labels.emailPlaceholder}
            className={inputClass}
          />
          <div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={labels.phonePlaceholder}
              className={inputClass}
            />
            <p className="mt-1.5 text-xs text-[var(--color-cocoa)]/50 pl-1">
              {labels.phoneHint}
            </p>
          </div>

          {error && (
            <p className="text-xs text-rose-500 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !name.trim() || !email.trim()}
            className="mt-2 w-full rounded-xl bg-[var(--color-cocoa)] px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-white transition hover:opacity-90 disabled:opacity-40"
          >
            {loading ? labels.submitting : labels.submitLabel}
          </button>
        </form>

        <p className="mt-4 text-xs text-[var(--color-cocoa)]/40 leading-relaxed">
          {labels.privacyNote}
        </p>
      </div>
    </div>
  );
}
