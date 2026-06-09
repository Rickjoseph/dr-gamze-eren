import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { PublicationsAccordion } from "@/components/PublicationsAccordion";
import {
  publicationsLabels,
  JOURNAL_ARTICLES,
  INTERNATIONAL_PRESENTATIONS,
} from "@/content/publications";
import type { ReactNode } from "react";
import { getDict } from "@/i18n/getLocale";

// Small line icons that give each credential card a quiet visual anchor.
const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-[18px] w-[18px]",
};

function EducationIcon() {
  return (
    <svg {...svgProps}>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v4.5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5V12" />
    </svg>
  );
}
function ExperienceIcon() {
  return (
    <svg {...svgProps}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}
function MembershipIcon() {
  return (
    <svg {...svgProps}>
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 8.5 4-1 7-4 7-8.5V6l-7-3Z" />
      <path d="m9.3 12 1.8 1.8L15 10" />
    </svg>
  );
}
function LanguagesIcon() {
  return (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9Z" />
    </svg>
  );
}
function CardHeader({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-[var(--color-rosegold)]">
      {icon}
      <p className="eyebrow">{label}</p>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDict();
  return {
    title: `${t.nav.about} Dr. Gamze Eren`,
    description: t.about.lede,
  };
}

export default async function AboutPage() {
  const { locale, t } = await getDict();
  const a = t.about;

  return (
    <>
      <section className="relative px-4 sm:px-8">
        <div className="mx-auto max-w-6xl pt-8 pb-12">
          <p className="eyebrow">{a.eyebrow}</p>
          <h1 className="headline mt-4 text-[clamp(2.4rem,6vw,4.6rem)]">
            {a.headlineA}{" "}
            <span className="italic-accent">{a.headlineAccent}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-cocoa)]">
            {a.lede}
          </p>
        </div>
      </section>

      <section className="relative px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-5">
            <GlassCard className="md:col-span-3 overflow-hidden p-0">
              <div className="relative aspect-[4/5] w-full md:aspect-auto md:h-full">
                <Image
                  src="/team/dr-gamze-portrait.jpg"
                  alt={`${a.portrait.role} ${a.portrait.name}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 92vw, 720px"
                  className="object-cover object-[center_25%]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <p className="text-xs uppercase tracking-[0.25em] opacity-90">{a.portrait.role}</p>
                  <p className="font-display text-4xl">{a.portrait.name}</p>
                  <p className="mt-1 text-sm opacity-90">{a.portrait.title}</p>
                </div>
              </div>
            </GlassCard>

            <div className="md:col-span-2 space-y-4">
              <GlassCard className="p-7">
                <CardHeader icon={<EducationIcon />} label={a.training.eyebrow} />
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--color-cocoa)]">
                  {a.training.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard className="p-7">
                <CardHeader icon={<ExperienceIcon />} label={a.career.eyebrow} />
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--color-cocoa)]">
                  {a.career.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard className="p-7" tint="rose">
                <CardHeader icon={<MembershipIcon />} label={a.memberships.eyebrow} />
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--color-cocoa)]">
                  {a.memberships.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard className="p-7">
                <CardHeader icon={<LanguagesIcon />} label={a.languages.eyebrow} />
                <p className="mt-3 text-sm text-[var(--color-cocoa)]">{a.languages.body}</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Pull-quote — her voice, to make the page feel personal */}
      <section className="relative mt-20 px-4 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span aria-hidden="true" className="font-display text-7xl leading-none text-[var(--color-rosegold)]/40">
            {"“"}
          </span>
          <blockquote className="-mt-2 font-display text-2xl italic leading-relaxed text-[var(--color-ink)] sm:text-3xl">
            {a.quote.text}
          </blockquote>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[var(--color-taupe)]">
            {a.quote.attribution}
          </p>
        </div>
      </section>

      <section className="relative mt-24 px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">{a.gallery.eyebrow}</p>
          <h2 className="headline mt-3 max-w-2xl text-3xl sm:text-4xl">
            {a.gallery.headlineA}{" "}
            <span className="italic-accent">{a.gallery.headlineAccent}</span>
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <GlassCard className="md:col-span-2 overflow-hidden p-0">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/team/dr-gamze-treatment.jpg"
                  alt={a.gallery.theatreTitle}
                  fill
                  sizes="(max-width: 768px) 92vw, 720px"
                  className="object-cover"
                />
              </div>
            </GlassCard>
            <GlassCard className="overflow-hidden p-0" tint="rose">
              <div className="relative aspect-[16/10] w-full md:aspect-auto md:h-full">
                <Image
                  src="/team/dr-gamze-surgery.jpg"
                  alt={a.gallery.theatreTitle}
                  fill
                  sizes="(max-width: 768px) 92vw, 360px"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/55 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-[0.6rem] uppercase tracking-[0.25em] opacity-85">{a.gallery.theatreEyebrow}</p>
                  <p className="font-display text-lg leading-tight">{a.gallery.theatreTitle}</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="relative mt-16 px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {a.values.map((v, i) => (
              <GlassCard key={i} className="p-7">
                <p className="font-display text-3xl text-[var(--color-rosegold)]">
                  0{i + 1}
                </p>
                <p className="mt-3 text-lg font-medium">{v.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-cocoa)]">{v.d}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mt-24 px-4 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <GlassCard className="p-10 sm:p-14">
            <p className="eyebrow">{a.approach.eyebrow}</p>
            <h2 className="headline mt-4 text-3xl sm:text-4xl">
              {a.approach.headlineA}{" "}
              <span className="italic-accent">{a.approach.headlineAccent}</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--color-cocoa)]">
              {a.approach.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="relative mt-16 px-4 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <PublicationsAccordion
            labels={publicationsLabels[locale]}
            journal={JOURNAL_ARTICLES}
            international={INTERNATIONAL_PRESENTATIONS}
          />
        </div>
      </section>

      <section className="relative mt-24 px-4 sm:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="headline text-3xl sm:text-4xl">{a.cta.headline}</h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-cocoa)]">{a.cta.body}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-solid">
              {a.cta.primary}
            </Link>
            <Link href="/services" className="btn-glass">
              {a.cta.secondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
