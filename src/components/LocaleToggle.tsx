"use client";

import { useRouter } from "next/navigation";
import { useTransition, useState, useRef, useEffect } from "react";
import type { Locale } from "@/i18n/dict";

type Props = {
  current: Locale;
  className?: string;
};

const LOCALES: { code: Locale; label: string; native: string }[] = [
  { code: "en", label: "EN", native: "English" },
  { code: "de", label: "DE", native: "Deutsch" },
  { code: "ru", label: "RU", native: "Русский" },
  { code: "tr", label: "TR", native: "Türkçe" },
];

export function LocaleToggle({ current, className = "" }: Props) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLocale = LOCALES.find((l) => l.code === current) ?? LOCALES[0];

  function setLocale(next: Locale) {
    if (next === current) { setOpen(false); return; }
    document.cookie = `locale=${next}; path=/; max-age=31536000; SameSite=Lax`;
    setOpen(false);
    startTransition(() => { router.refresh(); });
  }

  // Close on outside click or Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`} data-pending={pending ? "" : undefined}>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${currentLocale.native}`}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/40 px-2.5 py-1 text-[0.7rem] font-medium tracking-widest text-[var(--color-cocoa)] backdrop-blur-md transition hover:text-[var(--color-ink)]"
      >
        {/* Globe icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5 shrink-0"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span>{currentLocale.label}</span>
        <svg
          className={`h-2.5 w-2.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown panel */}
      <div
        role="listbox"
        aria-label="Select language"
        className={`absolute right-0 top-[calc(100%+8px)] z-50 min-w-[130px] origin-top-right rounded-2xl border border-white/70 bg-[var(--color-ivory)]/95 p-1 shadow-[0_16px_40px_-12px_rgba(26,20,16,0.28)] backdrop-blur-xl transition-all duration-200 ease-out ${
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        {LOCALES.map(({ code, label, native }) => (
          <button
            key={code}
            role="option"
            aria-selected={current === code}
            type="button"
            onClick={() => setLocale(code)}
            className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-sm transition ${
              current === code
                ? "bg-[var(--color-ink)] text-[var(--color-ivory)]"
                : "text-[var(--color-cocoa)] hover:bg-[var(--color-ink)]/8 hover:text-[var(--color-ink)]"
            }`}
          >
            <span className="w-6 shrink-0 text-[0.65rem] font-bold tracking-wider opacity-70">{label}</span>
            <span className="font-light">{native}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
