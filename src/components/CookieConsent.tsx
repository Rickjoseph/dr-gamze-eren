"use client";

import { useEffect, useState } from "react";
import type { Dict } from "@/i18n/dict";

const COOKIE_NAME = "cookie-consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

type Props = { t: Dict };

// Bottom-left floating glass banner. Mounts only when the consent cookie
// is missing — once the user picks Accept or Decline we set the cookie
// and slide it back out. Inset enough on mobile to clear the WhatsApp
// widget that lives in the bottom-right corner.
export function CookieConsent({ t }: Props) {
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const already = document.cookie
      .split("; ")
      .some((c) => c.startsWith(`${COOKIE_NAME}=`));
    if (already) return;

    setMounted(true);
    // Two rAFs so the entrance transition actually plays. Track BOTH ids
    // so Strict Mode's unmount/remount cycle can cancel the inner frame
    // before it fires setShown on an about-to-mount-again component
    // (which trips React 19's "state update before mount" warning).
    let outer = 0;
    let inner = 0;
    outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setShown(true));
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, []);

  function dismiss(value: "accepted" | "declined") {
    document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
    setShown(false);
    // setTimeout fires on the next tick after the slide-out animation.
    // No need to return a cleanup — this is called from a click handler.
    setTimeout(() => setMounted(false), 450);
  }

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-label={t.cookies.title}
      aria-live="polite"
      className={`fixed bottom-4 left-4 z-40 max-w-[calc(100vw-6rem)] transition-all duration-500 ease-out sm:bottom-6 sm:left-6 sm:max-w-md ${
        shown
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <div className="glass rounded-2xl p-5 sm:p-6">
        <p className="eyebrow">{t.cookies.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-cocoa)]">
          {t.cookies.message}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => dismiss("accepted")}
            className="btn-solid !px-4 !py-2 text-sm"
          >
            {t.cookies.accept}
          </button>
          <button
            type="button"
            onClick={() => dismiss("declined")}
            className="btn-glass !px-4 !py-2 text-sm"
          >
            {t.cookies.decline}
          </button>
        </div>
      </div>
    </div>
  );
}
