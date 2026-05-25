"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import type { Locale } from "@/i18n/dict";

type Props = {
  current: Locale;
  className?: string;
};

// Two-pill toggle. Sets a cookie and asks Next to re-render the route
// on the server with the new locale. Pill style matches the brand chips.
export function LocaleToggle({ current, className = "" }: Props) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function setLocale(next: Locale) {
    if (next === current) return;
    // 1 year, root path, lax so it survives navigation
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
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={current === "en"}
        className={`rounded-full px-2.5 py-1 transition ${
          current === "en"
            ? "bg-[var(--color-ink)] text-[var(--color-ivory)]"
            : "text-[var(--color-cocoa)] hover:text-[var(--color-ink)]"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("tr")}
        aria-pressed={current === "tr"}
        className={`rounded-full px-2.5 py-1 transition ${
          current === "tr"
            ? "bg-[var(--color-ink)] text-[var(--color-ivory)]"
            : "text-[var(--color-cocoa)] hover:text-[var(--color-ink)]"
        }`}
      >
        TR
      </button>
    </div>
  );
}
