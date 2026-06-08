import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { getDict } from "@/i18n/getLocale";
import { technologyContent } from "@/content/technology";

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getDict();
  const tech = technologyContent[locale];
  return {
    title: tech.metaTitle,
    description: tech.lede,
  };
}

export default async function TechnologyPage() {
  const { locale } = await getDict();
  const tech = technologyContent[locale];

  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative px-4 sm:px-8">
        <div className="mx-auto max-w-6xl pt-8 pb-12">
          <p className="eyebrow">{tech.eyebrow}</p>
          <h1 className="headline mt-4 text-[clamp(2.4rem,6vw,4.6rem)]">
            {tech.headlineA}{" "}
            <span className="italic-accent">{tech.headlineAccent}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-cocoa)]">
            {tech.lede}
          </p>
        </div>
      </section>

      {/* ============== WHAT IT IS + VISUAL ============== */}
      <section className="relative px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-stretch gap-6 md:grid-cols-2">
            <GlassCard className="p-8 sm:p-10">
              <p className="eyebrow">{tech.intro.eyebrow}</p>
              <h2 className="headline mt-3 text-3xl sm:text-4xl">{tech.intro.title}</h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-[var(--color-cocoa)]">
                {tech.intro.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </GlassCard>
            <GlassCard className="overflow-hidden p-0" tint="rose">
              <div className="relative aspect-[4/5] w-full md:aspect-auto md:h-full">
                <Image
                  src="/img/service-facial.jpg"
                  alt={tech.intro.title}
                  fill
                  sizes="(max-width: 768px) 92vw, 560px"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/30 via-transparent to-transparent" />
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ============== HOW IT WORKS ============== */}
      <section className="relative mt-24 px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">{tech.steps.eyebrow}</p>
          <h2 className="headline mt-3 text-3xl sm:text-4xl">{tech.steps.title}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {tech.steps.items.map((s, i) => (
              <GlassCard key={i} className="p-7">
                <p className="font-display text-2xl text-[var(--color-rosegold)]">{s.t}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-cocoa)]">{s.d}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ============== WHY IT MATTERS ============== */}
      <section className="relative mt-16 px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">{tech.benefits.eyebrow}</p>
          <h2 className="headline mt-3 text-3xl sm:text-4xl">{tech.benefits.title}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {tech.benefits.items.map((b, i) => (
              <GlassCard key={i} className="p-7" tint={i === 1 ? "rose" : "clear"}>
                <p className="text-lg font-medium">{b.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-cocoa)]">{b.d}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ============== HONEST NOTE ============== */}
      <section className="relative mt-16 px-4 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <GlassCard className="p-8 sm:p-10" tint="rose">
            <p className="eyebrow">{tech.note.eyebrow}</p>
            <h2 className="headline mt-3 text-2xl sm:text-3xl">{tech.note.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-cocoa)]">
              {tech.note.body}
            </p>
          </GlassCard>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="relative mt-24 px-4 sm:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="headline text-3xl sm:text-4xl">{tech.cta.headline}</h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-cocoa)]">{tech.cta.body}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-solid">
              {tech.cta.primary}
            </Link>
            <Link href="/services" className="btn-glass">
              {tech.cta.secondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
