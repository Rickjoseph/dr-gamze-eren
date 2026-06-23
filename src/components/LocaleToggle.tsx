"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import type { Locale } from "@/i18n/dict";

type Props = {
  current: Locale;
  className?: string;
};

const LOCALES: { code: Locale; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "tr", label: "TR" },
];

export function LocaleToggle({ current, className = "" }: Props) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function setLocale(next: Locale) {
    if (next === current) return;
    document.cookie = `locale=${next}; path=/; max-age=31536000; SameSite=Lax`;
    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center gap-0.5 rounded-full border border-white/60 bg-white/40 p-0.5 text-[0.7rem] font-medium tracking-widest backdrop-blur-md ${className}`}
      data-pending={pending ? "" : undefined}
    >
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={current === code}
          className={`rounded-full px-2.5 py-1 transition ${
            current === code
              ? "bg-[var(--color-ink)] text-[var(--color-ivory)]"
              : "text-[var(--color-cocoa)] hover:text-[var(--color-ink)]"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
