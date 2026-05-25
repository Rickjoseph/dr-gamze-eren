import Image from "next/image";
import Link from "next/link";

export function Footer() {
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
              Aesthetic &amp; reconstructive surgery in Istanbul. Surgical
              precision, artistic vision, results that look unmistakably yours.
            </p>
          </div>

          <div>
            <p className="eyebrow">Clinic</p>
            <address className="not-italic mt-3 text-sm leading-relaxed text-[var(--color-cocoa)]">
              Caddebostan Mah., Ethem Efendi Cad.
              <br />
              No:3 Uğur Apt. D:9
              <br />
              34728 Kadıköy / İstanbul
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
            <p className="eyebrow">Hours</p>
            <ul className="mt-3 space-y-1 text-sm text-[var(--color-cocoa)]">
              <li className="flex justify-between gap-4">
                <span>Mon – Fri</span>
                <span>10:00 – 18:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span>10:00 – 14:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              <Link href="/contact" className="btn-glass !py-2 !px-4 text-sm">
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-taupe)] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Dr. Güler Gamze Eren. All rights reserved.</p>
          <p>
            Board-certified plastic surgeon · TPRECD Member
          </p>
        </div>
      </div>
    </footer>
  );
}
