import type { Metadata } from "next";
import { GlassCard } from "@/components/GlassCard";
import { ContactForm } from "@/components/ContactForm";
import { getDict } from "@/i18n/getLocale";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDict();
  return {
    title: `${t.contact.eyebrow} & ${t.nav.book}`,
    description: t.contact.lede,
  };
}

export default async function ContactPage() {
  const { t } = await getDict();
  const c = t.contact;

  return (
    <>
      <section className="relative px-4 sm:px-8">
        <div className="mx-auto max-w-6xl pt-8 pb-12">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="headline mt-4 text-[clamp(2.4rem,6vw,4.6rem)]">
            {c.headlineA}{" "}
            <span className="italic-accent">{c.headlineAccent}</span>{" "}
            {c.headlineB}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-cocoa)]">
            {c.lede}
          </p>
        </div>
      </section>

      <section className="relative px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-5">
            <GlassCard className="p-8 sm:p-10 lg:col-span-3">
              <ContactForm t={t} />
            </GlassCard>

            <div className="lg:col-span-2 space-y-5">
              <GlassCard className="p-7" tint="rose">
                <p className="eyebrow">{c.sidebar.clinic}</p>
                <address className="not-italic mt-3 text-sm leading-relaxed text-[var(--color-cocoa)]">
                  {t.footer.addressLines.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < t.footer.addressLines.length - 1 && <br />}
                    </span>
                  ))}
                </address>
              </GlassCard>

              <GlassCard className="p-7">
                <p className="eyebrow">{c.sidebar.direct}</p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--color-cocoa)]">
                  <li>
                    <span className="block text-xs uppercase tracking-widest text-[var(--color-taupe)]">
                      {c.sidebar.phone}
                    </span>
                    <a href="tel:+905411637220" className="text-base text-[var(--color-ink)]">
                      +90 541 163 72 20
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs uppercase tracking-widest text-[var(--color-taupe)]">
                      {c.sidebar.email}
                    </span>
                    <a href="mailto:info@drgamzeeren.com" className="text-base text-[var(--color-ink)]">
                      info@drgamzeeren.com
                    </a>
                  </li>
                </ul>
              </GlassCard>

              <GlassCard className="p-7">
                <p className="eyebrow">{c.sidebar.hours}</p>
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
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-16 px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-3xl">
            <iframe
              title="Clinic location"
              src="https://www.google.com/maps?q=Caddebostan+Mah.+Ethem+Efendi+Cad.+No:3+Kadıköy+İstanbul&output=embed"
              className="h-[420px] w-full border-0 block"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
