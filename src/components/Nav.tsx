"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Dict, Locale } from "@/i18n/dict";
import { LocaleToggle } from "./LocaleToggle";

type Props = {
  locale: Locale;
  t: Dict;
};

// Logo intrinsic aspect ratio (width / height of the source PNG).
// Used to compute the rendered width from the rendered height so the
// proportions stay rock-stable through the scroll transition.
const LOGO_RATIO = 825 / 198; // horizontal lockup

export function Nav({ locale, t }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile/tablet menu
  const [moreOpen, setMoreOpen] = useState(false); // desktop "More" dropdown
  const pathname = usePathname();
  const moreRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change (avoids stale-open state after Link click)
  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  // Close mobile/tablet menu on viewport resize past the lg breakpoint
  // and on Escape; close the More dropdown on Escape or outside click.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMoreOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!moreOpen) return;
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [moreOpen]);

  // Primary inline nav (desktop only). Secondary pages live under "More".
  const primary = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/contact", label: t.nav.contact },
  ];
  const moreItems = [
    { href: "/results", label: t.nav.results, sub: t.nav.moreSubs.results },
    { href: "/blog", label: t.nav.blog, sub: t.nav.moreSubs.blog },
    { href: "/media", label: t.nav.media, sub: t.nav.moreSubs.media },
  ];
  // Full list for the mobile/tablet dropdown — flat, every page reachable
  // in one tap (no nested submenu on touch).
  const mobileItems = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/results", label: t.nav.results },
    { href: "/blog", label: t.nav.blog },
    { href: "/media", label: t.nav.media },
    { href: "/contact", label: t.nav.contact },
  ];

  const logoHeight = scrolled ? 34 : 40;
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
            ? "max-w-4xl px-3 py-2 lg:max-w-5xl"
            : "max-w-5xl px-4 py-3 sm:px-5"
        }`}
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 pr-2"
          aria-label="Dr. Gamze Eren — Estetik ve Plastik Cerrahi"
        >
          {/* CG monogram image — keeps the face silhouette detail */}
          <Image
            src="/brand/logo-monogram.png"
            alt=""
            width={241}
            height={166}
            priority
            style={{
              height: logoHeight,
              width: "auto",
              filter: "drop-shadow(0 1px 1px rgba(26,20,16,0.12))",
            }}
            className="transition-all duration-700 ease-out"
          />
          {/* Text stack — name + pill */}
          <div className="flex flex-col items-start gap-0.5">
            <span
              className="font-display tracking-[0.22em] uppercase text-[#9b8a7a] leading-none transition-all duration-700"
              style={{ fontSize: scrolled ? "11px" : "13px", fontWeight: 500 }}
            >
              Dr.Gamze Eren
            </span>
            <span
              className="border border-[#9b8a7a]/50 rounded-full px-2 py-px tracking-[0.16em] uppercase text-[#9b8a7a] font-light leading-none transition-all duration-700"
              style={{ fontSize: scrolled ? "6px" : "7px" }}
            >
              Estetik ve Plastik Cerrahi
            </span>
          </div>
        </Link>

        {/* Inline page links — desktop only (lg+). Home/About/Services,
            then a "More" dropdown for secondary pages, then Contact. */}
        <ul className="hidden items-center gap-1 lg:flex">
          {primary.slice(0, 3).map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-[var(--color-cocoa)] transition hover:bg-white/40 hover:text-[var(--color-ink)] xl:px-4"
              >
                {it.label}
              </Link>
            </li>
          ))}
          {/* More — opens a glass panel with secondary pages */}
          <li ref={moreRef} className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={moreOpen}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-[var(--color-cocoa)] transition hover:bg-white/40 hover:text-[var(--color-ink)] xl:px-4"
            >
              {t.nav.more}
              <svg
                className={`h-3 w-3 transition-transform duration-300 ${moreOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown panel — sits well clear of the nav pill so it
                reads as its own surface, and uses a more opaque tint so
                the page content behind doesn't bleed through. */}
            <div
              role="menu"
              aria-label={t.nav.more}
              className={`absolute left-1/2 top-[calc(100%+22px)] z-40 w-72 -translate-x-1/2 origin-top rounded-2xl border border-white/75 bg-[var(--color-ivory)]/92 p-2 shadow-[0_24px_60px_-20px_rgba(26,20,16,0.35)] backdrop-blur-2xl transition-all duration-200 ease-out ${
                moreOpen
                  ? "scale-100 opacity-100"
                  : "pointer-events-none -translate-y-2 scale-95 opacity-0"
              }`}
              style={{ ["--tw-translate-x" as string]: "-50%" }}
            >
              {moreItems.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  role="menuitem"
                  className="group block rounded-xl px-3 py-3 transition hover:bg-white/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-rosegold)]">
                      {it.label}
                    </span>
                    <svg
                      className="h-3.5 w-3.5 text-[var(--color-taupe)] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="mt-0.5 text-xs leading-snug text-[var(--color-taupe)]">
                    {it.sub}
                  </p>
                </Link>
              ))}
            </div>
          </li>
          {/* Contact — primary action, kept at the end */}
          <li>
            <Link
              href={primary[3].href}
              className="rounded-full px-3 py-2 text-sm font-medium text-[var(--color-cocoa)] transition hover:bg-white/40 hover:text-[var(--color-ink)] xl:px-4"
            >
              {primary[3].label}
            </Link>
          </li>
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

      {/* Mobile / tablet dropdown — flat list, every page reachable in one tap */}
      {open && (
        <div className="glass mx-auto mt-2 max-w-3xl rounded-3xl p-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {mobileItems.map((it) => (
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
