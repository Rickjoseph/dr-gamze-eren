"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "px-3 pt-3 sm:px-6 sm:pt-5" : "px-3 pt-3 sm:px-8 sm:pt-7"
      }`}
    >
      <nav
        className={`glass-nav mx-auto flex items-center justify-between rounded-full transition-all duration-700 ${
          scrolled ? "max-w-3xl px-3 py-2" : "max-w-5xl px-5 py-3"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 pl-1 pr-3" aria-label="Dr. Gamze Eren — Home">
          <Image
            src="/brand/logo.png"
            alt=""
            width={1587}
            height={865}
            priority
            style={{
              height: scrolled ? 40 : 56,
              width: "auto",
              filter: "drop-shadow(0 1px 1px rgba(26,20,16,0.18)) drop-shadow(0 4px 12px rgba(138,107,86,0.28))",
            }}
            className="transition-all duration-700"
            sizes="(max-width: 640px) 200px, 260px"
          />
          <span className="sr-only">Dr. Gamze Eren — Aesthetic & Plastic Surgery</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {items.map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-cocoa)] transition hover:bg-white/40 hover:text-[var(--color-ink)]"
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="btn-solid hidden md:inline-flex">
          Book Consultation
        </Link>

        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="btn-glass !px-3 !py-2 md:hidden"
        >
          <span className="block h-0.5 w-5 bg-current" />
        </button>
      </nav>

      {open && (
        <div className="glass mx-auto mt-2 max-w-3xl rounded-3xl p-4 md:hidden">
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
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-solid w-full justify-center">
                Book Consultation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
