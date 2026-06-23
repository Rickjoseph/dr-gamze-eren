"use client";

import { useRouter } from "next/navigation";
import { useTransition, useState, useRef, useEffect } from "react";
import type { Locale } from "@/i18n/dict";

type Props = {
  current: Locale;
  className?: string;
};

const LOCALES: { code: Locale; label: string; full: string }[] = [
  { code: "en", label: "EN", full: "English" },
  { code: "ru", label: "RU", full: "Русский" },
  { code: "tr", label: "TR", full: "Türkçe" },
  { code: "de", label: "DE", full: "Deutsch" },
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

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className={`relative inline-block ${className}`} data-pending={pending ? "" : undefined}>
      {/* Trigger button — same pill aesthetic as the old toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/40 px-3 py-1.5 text-[0.7rem] font-medium tracking-widest backdrop-blur-md text-[var(--color-cocoa)] hover:text-[var(--color-ink)] transition"
      >
        {/* Globe SVG icon */}
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span>{currentLocale.label}</span>
        {/* Chevron */}
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.15s ease" }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <ul
          role="listbox"
          aria-label="Language"
          className="absolute right-0 top-full mt-1.5 min-w-[7rem] rounded-xl border border-white/60 bg-white/80 backdrop-blur-md shadow-lg overflow-hidden z-50"
        >
          {LOCALES.map(({ code, label, full }) => (
            <li key={code} role="option" aria-selected={current === code}>
              <button
                type="button"
                onClick={() => setLocale(code)}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-left text-[0.72rem] font-medium tracking-wider transition ${
                  current === code
                    ? "bg-[var(--color-ink)] text-[var(--color-ivory)]"
                    : "text-[var(--color-cocoa)] hover:bg-black/5 hover:text-[var(--color-ink)]"
                }`}
              >
                <span className="w-6 text-center font-semibold">{label}</span>
                <span className="opacity-70 font-normal normal-case tracking-normal text-[0.68rem]">{full}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
