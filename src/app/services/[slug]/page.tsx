import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { getDict } from "@/i18n/getLocale";
import {
  getTreatment,
  getTreatmentContent,
  treatments,
  treatmentUI,
} from "@/content/treatments";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return {};
  const { locale } = await getDict();
  const c = getTreatmentContent(treatment, locale);
  return { title: c.metaTitle, description: c.metaDescription };
}

function paragraphs(body: string) {
  return body.split(/\n\n+/).map((p, i) => (
    <p key={i} className="mt-4 leading-relaxed text-[var(--color-cocoa)]">
      {p}
    </p>
  ));
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  const { locale, t } = await getDict();
  const c = getTreatmentContent(treatment, locale);
  const ui = treatmentUI[locale];

  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative px-4 sm:px-8">
        <div className="mx-auto max-w-6xl pt-8 pb-12">
          <Link
            href="/services"
            className="text-sm text-[var(--color-taupe)] transition hover:text-[var(--color-cocoa)]"
          >
            {ui.back}
          </Link>
          <p className="eyebrow mt-8">{t.groups[treatment.category]}</p>
          <h1 className="headline mt-3 text-[clamp(2.2rem,5.5vw,4.2rem)]">{c.title}</h1>
          <p className="mt-4 text-lg italic-accent">{c.tagline}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-cocoa)]">
            {c.summary}
          </p>
        </div>
      </section>

      {/* ============== IMAGE ============== */}
      <section className="relative px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/60 shadow-[0_24px_60px_-20px_rgba(26,20,16,0.28)]">
            <Image
              src={treatment.image}
              alt={treatment.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 1100px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============== BODY ============== */}
      <section className="relative mt-16 px-4 sm:px-8">
        <div className="mx-auto max-w-3xl">
          {c.sections.map((sec, i) => (
            <div key={i} className={i > 0 ? "mt-12" : ""}>
              <h2 className="font-display text-2xl sm:text-3xl text-[var(--color-ink)]">
                {sec.heading}
              </h2>
              {paragraphs(sec.body)}
            </div>
          ))}

          {/* FAQs */}
          {c.faqs && c.faqs.length > 0 && (
            <div className="mt-16">
              <p className="eyebrow">{ui.faqTitle}</p>
              <div className="mt-5 space-y-4">
                {c.faqs.map((f, i) => (
                  <GlassCard key={i} className="p-6">
                    <p className="font-medium text-[var(--color-ink)]">{f.q}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-cocoa)]">
                      {f.a}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <p className="mt-10 text-xs leading-relaxed text-[var(--color-taupe)]">
            {ui.disclaimer}
          </p>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="relative mt-20 px-4 sm:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="headline text-3xl sm:text-4xl">{ui.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-cocoa)]">{ui.ctaBody}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-solid">
              {ui.ctaButton}
            </Link>
            <Link href="/services" className="btn-glass">
              {ui.secondaryButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
