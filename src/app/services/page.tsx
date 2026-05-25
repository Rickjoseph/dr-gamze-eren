import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { services } from "@/content/services";

const serviceHero: Record<string, string> = {
  facial: "/img/beauty-profile.jpg",
  body: "/img/beauty-natural.jpg",
  breast: "/img/beauty-soft.jpg",
  "non-surgical": "/img/skincare-hands.jpg",
};

export const metadata: Metadata = {
  title: "Services & Procedures",
  description:
    "A considered menu of aesthetic procedures — facial, body, breast, and non-surgical — delivered with surgical precision and artistic restraint.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative px-4 sm:px-8">
        <div className="mx-auto max-w-6xl pt-8 pb-12">
          <p className="eyebrow">Procedures</p>
          <h1 className="headline mt-4 text-[clamp(2.4rem,6vw,4.6rem)]">
            A practice of{" "}
            <span className="italic-accent">restraint.</span>
            <br />
            A menu of{" "}
            <span className="italic-accent">possibilities.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-cocoa)]">
            Each procedure below is planned in millimetres and discussed in
            plain language. We will never propose more than the result requires.
          </p>
        </div>
      </section>

      {services.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          className="relative mt-12 px-4 scroll-mt-32 sm:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <GlassCard
              className="overflow-hidden p-0"
              tint={i % 2 === 1 ? "rose" : "clear"}
              refract={i === 0}
            >
              <div className="grid gap-0 md:grid-cols-5">
                <div className="relative min-h-[260px] md:col-span-2 md:min-h-full">
                  <Image
                    src={serviceHero[s.slug]}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 92vw, 480px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/60 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                    <p className="text-xs uppercase tracking-widest opacity-90">
                      {s.group}
                    </p>
                    <p className="mt-2 font-display text-5xl opacity-95">
                      0{i + 1}
                    </p>
                  </div>
                </div>

                <div className="md:col-span-3 p-10 sm:p-12">
                  <h2 className="headline text-3xl sm:text-4xl">{s.title}</h2>
                  <p className="mt-3 text-base italic-accent">{s.short}</p>
                  <p className="mt-5 text-base leading-relaxed text-[var(--color-cocoa)]">
                    {s.description}
                  </p>

                  <p className="eyebrow mt-8">Procedures offered</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {s.procedures.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/35 px-4 py-3 text-sm text-[var(--color-cocoa)]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-rosegold)]" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-solid">
                      Discuss with Dr. Eren
                    </Link>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>
      ))}

      <section className="relative mt-24 px-4 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <GlassCard className="p-10 sm:p-14" tint="dark">
            <p className="eyebrow !text-[var(--color-blush)]">
              How we plan together
            </p>
            <h2 className="headline mt-4 text-3xl sm:text-4xl text-[var(--color-ivory)]">
              3D before the OR. Always.
            </h2>
            <p className="mt-5 max-w-2xl text-[var(--color-cream)]/85">
              Especially for rhinoplasty and facial work, we plan in three
              dimensions using Kratos Surgery — a digital system that maps your
              anatomy and lets you preview likely outcomes before any decision
              is made. It does not promise an exact result; it gives you a
              language to talk about one.
            </p>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
