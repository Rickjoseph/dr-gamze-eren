import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { getDict } from "@/i18n/getLocale";
import { getTreatment, procedureSlugs } from "@/content/treatments";

const serviceOrder = ["facial", "body", "breast", "non-surgical"] as const;
const serviceHero: Record<string, string> = {
  facial: "/img/service-facial.jpg",
  body: "/img/service-body.jpg",
  breast: "/img/service-breast.jpg",
  "non-surgical": "/img/service-nonsurgical.jpg",
};

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDict();
  return {
    title: t.services.eyebrow,
    description: t.services.lede,
  };
}

export default async function ServicesPage() {
  const { t } = await getDict();
  const s = t.services;

  return (
    <>
      <section className="relative px-4 sm:px-8">
        <div className="mx-auto max-w-6xl pt-8 pb-12">
          <p className="eyebrow">{s.eyebrow}</p>
          <h1 className="headline mt-4 text-[clamp(2.4rem,6vw,4.6rem)]">
            {s.headlineA}{" "}
            <span className="italic-accent">{s.headlineAccent1}</span>
            <br />
            {s.headlineB}{" "}
            <span className="italic-accent">{s.headlineAccent2}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-cocoa)]">
            {s.lede}
          </p>
        </div>
      </section>

      {serviceOrder.map((slug, i) => {
        const sc = t.serviceContent[slug];
        return (
          <section
            key={slug}
            id={slug}
            className="relative mt-12 px-4 scroll-mt-32 sm:px-8"
          >
            <div className="mx-auto max-w-6xl">
              <GlassCard
                className="overflow-hidden p-0"
                tint={i % 2 === 1 ? "rose" : "clear"}
              >
                <div className="grid gap-0 md:grid-cols-5">
                  <div className="relative min-h-[260px] md:col-span-2 md:min-h-full">
                    <Image
                      src={serviceHero[slug]}
                      alt={sc.title}
                      fill
                      sizes="(max-width: 768px) 92vw, 480px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/60 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                      <p className="text-xs uppercase tracking-widest opacity-90">
                        {t.groups[slug]}
                      </p>
                      <p className="mt-2 font-display text-5xl opacity-95">
                        0{i + 1}
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-3 p-10 sm:p-12">
                    <h2 className="headline text-3xl sm:text-4xl">{sc.title}</h2>
                    <p className="mt-3 text-base italic-accent">{sc.short}</p>
                    <p className="mt-5 text-base leading-relaxed text-[var(--color-cocoa)]">
                      {sc.description}
                    </p>

                    <p className="eyebrow mt-8">{s.proceduresOffered}</p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {sc.procedures.map((p, idx) => {
                        const procSlug = procedureSlugs[slug]?.[idx] ?? null;
                        const treatment = procSlug ? getTreatment(procSlug) : undefined;
                        if (treatment) {
                          return (
                            <li key={p}>
                              <Link
                                href={`/services/${treatment.slug}`}
                                className="group flex items-center gap-3 rounded-2xl border border-white/60 bg-white/45 px-4 py-3 text-sm text-[var(--color-ink)] transition hover:border-[var(--color-rosegold)]/50 hover:bg-white/70"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-rosegold)]" />
                                <span className="flex-1">{p}</span>
                                <span
                                  aria-hidden="true"
                                  className="text-[var(--color-rosegold)] opacity-40 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                                >
                                  →
                                </span>
                              </Link>
                            </li>
                          );
                        }
                        return (
                          <li
                            key={p}
                            className="flex items-center gap-3 rounded-2xl border border-white/40 bg-white/20 px-4 py-3 text-sm text-[var(--color-taupe)]"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-taupe)]/40" />
                            {p}
                          </li>
                        );
                      })}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link href="/contact" className="btn-solid">
                        {s.discuss}
                      </Link>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </section>
        );
      })}

      <section className="relative mt-24 px-4 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <GlassCard className="p-10 sm:p-14" tint="dark">
            <p className="eyebrow !text-[var(--color-blush)]">{s.kratos.eyebrow}</p>
            <h2 className="headline mt-4 text-3xl sm:text-4xl text-[var(--color-ivory)]">
              {s.kratos.headline}
            </h2>
            <p className="mt-5 max-w-2xl text-[var(--color-cream)]/85">
              {s.kratos.body}
            </p>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
