import Image from "next/image";
import Link from "next/link";
import type { Dict } from "@/i18n/dict";

type Props = { t: Dict };

export function Footer({ t }: Props) {
  return (
    <footer className="relative mt-32 px-4 pb-10 sm:px-8">
      <div className="glass mx-auto max-w-6xl rounded-[2rem] p-8 sm:p-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Image
              src="/brand/logo.png"
              alt="Dr. Gamze Eren"
              width={1587}
              height={865}
              style={{ width: 180, height: "auto" }}
              sizes="180px"
            />
            <p className="mt-5 text-sm leading-relaxed text-[var(--color-cocoa)]">
              {t.footer.tagline}
            </p>
            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/dr.gamze.eren"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/60 bg-white/40 text-[var(--color-cocoa)] transition hover:bg-white/70"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@dr.gamzeozcansclinic4133"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/60 bg-white/40 text-[var(--color-cocoa)] transition hover:bg-white/70"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow">{t.footer.clinic}</p>
            <address className="not-italic mt-3 text-sm leading-relaxed text-[var(--color-cocoa)]">
              {t.footer.addressLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t.footer.addressLines.length - 1 && <br />}
                </span>
              ))}
            </address>
            <p className="mt-3 text-sm text-[var(--color-cocoa)]">
              <a href="tel:+905411637220" className="hover:text-[var(--color-ink)]">
                +90 541 163 72 20
              </a>
              <br />
              <a href="mailto:info@drgamzeeren.com" className="hover:text-[var(--color-ink)]">
                info@drgamzeeren.com
              </a>
            </p>
          </div>

          <div>
            <p className="eyebrow">{t.footer.hours}</p>
            <ul className="mt-3 space-y-1 text-sm text-[var(--color-cocoa)]">
              <li className="flex justify-between gap-4">
                <span>{t.footer.monFri}</span>
                <span>10:00 – 18:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>{t.footer.sat}</span>
                <span>10:00 – 14:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>{t.footer.sun}</span>
                <span>{t.footer.closed}</span>
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              <Link href="/contact" className="btn-glass !py-2 !px-4 text-sm">
                {t.footer.getInTouch}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-taupe)] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Dr. Güler Gamze Eren. {t.footer.copyright}</p>
          <p>{t.footer.credential}</p>
        </div>
      </div>
    </footer>
  );
}
