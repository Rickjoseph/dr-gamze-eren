import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { BlogCarousel } from "@/components/BlogCarousel";
import { posts } from "@/content/blog";
import { getDict } from "@/i18n/getLocale";

const serviceOrder = ["facial", "body", "breast", "non-surgical"] as const;
const serviceImages: Record<string, string> = {
  facial: "/img/service-facial.jpg",
  body: "/img/service-body.jpg",
  breast: "/img/service-breast.jpg",
  "non-surgical": "/img/service-nonsurgical.jpg",
};

export default async function Home() {
  const { t } = await getDict();
  const h = t.home;

  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative px-4 sm:px-8">
        <div className="mx-auto max-w-6xl pt-8 pb-24 sm:pt-16 sm:pb-32">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="reveal reveal-1">
              <p className="eyebrow">{h.eyebrow}</p>
              <h1 className="headline mt-6 text-[clamp(2.6rem,7vw,5.6rem)]">
                {h.headlineA}{" "}
                <span className="italic-accent">{h.headlineAccent1}</span>
                <br />
                {h.headlineB}{" "}
                <span className="italic-accent">{h.headlineAccent2}</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-cocoa)]">
                {h.lede}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-solid">
                  {h.ctaPrimary}
                </Link>
                <Link href="/services" className="btn-glass">
                  {h.ctaSecondary}
                </Link>
              </div>
            </div>

            <div className="reveal reveal-2 relative">
              <GlassCard className="relative overflow-hidden p-3" tint="rose">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src="/team/dr-gamze-cafe.jpg"
                    alt={`${h.portraitTitle} ${h.portraitName.join(" ")}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 92vw, 540px"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/40 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] opacity-80">{h.portraitTitle}</p>
                    <p className="font-display text-2xl leading-tight">
                      {h.portraitName[0]} <span className="italic">{h.portraitName[1]}</span>
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          <div className="reveal reveal-3 mt-20 grid gap-4 sm:grid-cols-3">
            <GlassCard className="p-6">
              <p className="font-display text-4xl">{h.stats.yearsValue}</p>
              <p className="mt-1 text-sm text-[var(--color-cocoa)]">{h.stats.yearsLabel}</p>
            </GlassCard>
            <GlassCard className="p-6" tint="rose">
              <p className="font-display text-4xl">{h.stats.planningValue}</p>
              <p className="mt-1 text-sm text-[var(--color-cocoa)]">{h.stats.planningLabel}</p>
            </GlassCard>
            <GlassCard className="p-6">
              <p className="font-display text-4xl">{h.stats.patientsValue}</p>
              <p className="mt-1 text-sm text-[var(--color-cocoa)]">{h.stats.patientsLabel}</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ============== PHILOSOPHY ============== */}
      <section className="relative px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <GlassCard className="p-10 sm:p-16" refract>
            <div className="grid items-center gap-12 md:grid-cols-5">
              <div className="md:col-span-3">
                <p className="eyebrow">{h.philosophy.eyebrow}</p>
                <p className="headline mt-5 text-3xl sm:text-4xl">
                  {h.philosophy.quoteA}{" "}
                  <span className="italic-accent">{h.philosophy.quoteAccent1}</span>
                  {h.philosophy.quoteB}{" "}
                  <span className="italic-accent">{h.philosophy.quoteAccent2}</span>
                  {h.philosophy.quoteC}
                </p>
                <p className="mt-6 text-sm tracking-widest uppercase text-[var(--color-taupe)]">
                  {h.philosophy.attribution}
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-base leading-relaxed text-[var(--color-cocoa)]">
                  {h.philosophy.side}
                </p>
                <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-[var(--color-ink)] underline decoration-[var(--color-rosegold)] decoration-2 underline-offset-4 hover:decoration-[var(--color-ink)]">
                  {h.philosophy.meet}
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ============== SERVICES ============== */}
      <section className="relative mt-32 px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">{h.services.eyebrow}</p>
              <h2 className="headline mt-3 text-4xl sm:text-5xl">
                {h.services.headlineA}{" "}
                <span className="italic-accent">{h.services.headlineAccent}</span>
              </h2>
            </div>
            <Link href="/services" className="hidden text-sm font-medium text-[var(--color-cocoa)] hover:text-[var(--color-ink)] sm:inline-flex">
              {h.services.viewAll}
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {serviceOrder.map((slug, i) => {
              const s = t.serviceContent[slug];
              return (
                <Link key={slug} href={`/services#${slug}`} className="group block">
                  <GlassCard
                    className="h-full overflow-hidden p-0 transition will-change-transform hover:-translate-y-1"
                    tint={i % 2 === 1 ? "rose" : "clear"}
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={serviceImages[slug]}
                        alt={s.title}
                        fill
                        sizes="(max-width: 768px) 92vw, 480px"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/55 via-transparent to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                        <p className="text-xs uppercase tracking-widest text-white/90">
                          {t.groups[slug]}
                        </p>
                        <span className="font-display text-3xl text-white">0{i + 1}</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl">{s.title}</h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--color-cocoa)]">
                        {s.short}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-1.5">
                        {s.procedures.slice(0, 4).map((p) => (
                          <li
                            key={p}
                            className="rounded-full border border-white/60 bg-white/30 px-3 py-1 text-xs text-[var(--color-cocoa)]"
                          >
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== MEDICAL TOURISM ============== */}
      <section className="relative mt-32 px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <GlassCard className="overflow-hidden p-0" tint="dark">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="p-10 sm:p-14">
                <p className="eyebrow !text-[var(--color-blush)]">{h.tourism.eyebrow}</p>
                <h2 className="headline mt-5 text-4xl text-[var(--color-ivory)] sm:text-5xl">
                  {h.tourism.headlineA}{" "}
                  <span className="italic-accent !text-[var(--color-rose)]">{h.tourism.headlineAccent}</span>
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-cream)]/85">
                  {h.tourism.body}
                </p>
                <Link href="/contact" className="btn-glass mt-8">
                  {h.tourism.cta}
                </Link>
              </div>
              <div className="relative min-h-[280px] sm:min-h-[420px]">
                <Image
                  src="/img/istanbul-bosphorus.jpg"
                  alt="Galata Tower and the Bosphorus at sunset"
                  fill
                  sizes="(max-width: 768px) 92vw, 540px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1410]/85 via-[#5b4636]/55 to-[#1a1410]/70" />
                <div className="relative grid h-full grid-cols-2 gap-3 p-8 sm:p-10">
                  {h.tourism.tiles.map((item) => (
                    <div
                      key={item.k}
                      className="glass glass-dark flex flex-col justify-end rounded-2xl p-4"
                    >
                      <p className="text-xs uppercase tracking-widest text-[var(--color-blush)]/80">
                        {item.k}
                      </p>
                      <p className="mt-1 font-display text-xl text-[var(--color-ivory)]">
                        {item.v}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ============== JOURNEY ============== */}
      <section className="relative mt-32 px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">{h.journey.eyebrow}</p>
          <h2 className="headline mt-3 max-w-3xl text-4xl sm:text-5xl">
            {h.journey.headlineA}{" "}
            <span className="italic-accent">{h.journey.headlineAccent}</span>
          </h2>

          <ol className="mt-12 grid gap-4 md:grid-cols-4">
            {h.journey.steps.map((step) => (
              <li key={step.n}>
                <GlassCard className="h-full p-6">
                  <p className="font-display text-5xl text-[var(--color-rosegold)]">{step.n}</p>
                  <p className="mt-3 text-lg font-medium">{step.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-cocoa)]">{step.d}</p>
                </GlassCard>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============== JOURNAL CAROUSEL ============== */}
      <section className="relative mt-32">
        <BlogCarousel
          posts={posts.slice(0, 6)}
          eyebrow={h.journal.eyebrow}
          headlineA={h.journal.headlineA}
          headlineAccent={h.journal.headlineAccent}
          readMore={h.journal.readMore}
          cta={h.journal.viewAll}
        />
      </section>

      {/* ============== TESTIMONIAL ============== */}
      <section className="relative mt-32 px-4 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <GlassCard className="p-10 text-center sm:p-16">
            <p className="font-display text-7xl leading-none text-[var(--color-rosegold)]">
              &ldquo;
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-2xl leading-relaxed sm:text-3xl">
              {h.testimonial.quoteA}{" "}
              <span className="italic-accent">{h.testimonial.quoteAccent}</span>
            </p>
            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[var(--color-taupe)]">
              {h.testimonial.attribution}
            </p>
          </GlassCard>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="relative mt-32 px-4 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <GlassCard className="p-10 text-center sm:p-16" tint="rose">
            <h2 className="headline text-4xl sm:text-5xl">
              {h.finalCta.headlineA}{" "}
              <span className="italic-accent">{h.finalCta.headlineAccent}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[var(--color-cocoa)]">
              {h.finalCta.body}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-solid">
                {h.finalCta.primary}
              </Link>
              <a href="tel:+905411637220" className="btn-glass">
                +90 541 163 72 20
              </a>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
