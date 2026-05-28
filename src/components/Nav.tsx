"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dict, Locale } from "@/i18n/dict";
import { LocaleToggle } from "./LocaleToggle";

type Props = {
  locale: Locale;
  t: Dict;
};

// Logo intrinsic aspect ratio (width / height of the source PNG).
// Used to compute the rendered width from the rendered height so the
// proportions stay rock-stable through the scroll transition.
const LOGO_RATIO = 1587 / 865;

export function Nav({ locale, t }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile/tablet menu on viewport resize past the lg breakpoint
  // and on Escape.
  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const items = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/results", label: "Results" },
    { href: "/blog", label: "Journal" },
    { href: "/media", label: "Media" },
    { href: "/contact", label: t.nav.contact },
  ];

  const logoHeight = scrolled ? 38 : 52;
  const logoWidth = Math.round(logoHeight * LOGO_RATIO);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "px-3 pt-3 sm:px-6 sm:pt-5" : "px-3 pt-3 sm:px-8 sm:pt-7"
      }`}
    >
      <nav
        className={`glass-nav mx-auto flex items-center justify-between gap-3 rounded-full transition-all duration-700 ${
          scrolled
            ? "max-w-3xl px-3 py-2 lg:max-w-4xl"
            : "max-w-5xl px-4 py-3 sm:px-5"
        }`}
      >
        <Link
          href="/"
          className="flex shrink-0 items-center pr-2"
          aria-label={t.nav.home}
        >
          <Image
            src="/brand/logo.png"
            alt=""
            width={1587}
            height={865}
            priority
            style={{
              height: logoHeight,
              width: logoWidth,
              filter:
                "drop-shadow(0 1px 1px rgba(26,20,16,0.18)) drop-shadow(0 4px 12px rgba(138,107,86,0.28))",
            }}
            className="transition-[height,width] duration-700 ease-out"
            sizes="(max-width: 640px) 110px, 130px"
          />
          <span className="sr-only">
            Dr. Gamze Eren — {t.about.portrait.title}
          </span>
        </Link>

        {/* Inline page links — desktop only (lg+) */}
        <ul className="hidden items-center gap-1 lg:flex">
          {items.map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-[var(--color-cocoa)] transition hover:bg-white/40 hover:text-[var(--color-ink)] xl:px-4"
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right cluster — desktop (lg+): toggle + solid CTA */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
          <LocaleToggle current={locale} />
          <Link
            href="/contact"
            className="btn-solid whitespace-nowrap text-sm xl:text-[0.95rem]"
          >
            {t.nav.book}
          </Link>
        </div>

        {/* Right cluster — mobile + tablet (< lg): toggle + hamburger.
            Book CTA moves into the dropdown menu so it never crowds. */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <LocaleToggle current={locale} />
          <button
            type="button"
            aria-label={t.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="btn-glass !px-3 !py-2"
          >
            {/* Animated hamburger ↔ close */}
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 right-0 top-0 h-0.5 origin-center bg-current transition-transform duration-300 ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-1.5 h-0.5 bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-3 h-0.5 origin-center bg-current transition-transform duration-300 ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Dropdown menu — covers everything below lg */}
      {open && (
        <div className="glass mx-auto mt-2 max-w-3xl rounded-3xl p-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {items.map((it) => (
              <li key={it.href}>
                <Link
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-[var(--color-cocoa)] hover:bg-white/40"
                >
                  {it.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-solid w-full justify-center whitespace-nowrap"
              >
                {t.nav.book}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
