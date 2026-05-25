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
