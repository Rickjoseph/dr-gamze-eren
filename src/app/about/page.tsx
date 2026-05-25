import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "About Dr. Gamze Eren",
  description:
    "Meet Dr. Güler Gamze Eren — board-certified plastic surgeon practising in Istanbul. Surgical precision, artistic vision, considered care.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative px-4 sm:px-8">
        <div className="mx-auto max-w-6xl pt-8 pb-12">
          <p className="eyebrow">About</p>
          <h1 className="headline mt-4 text-[clamp(2.4rem,6vw,4.6rem)]">
            Precision is a craft.{" "}
            <span className="italic-accent">Beauty is the result.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-cocoa)]">
            Dr. Güler Gamze Eren is an Istanbul-based plastic surgeon known for
            natural results, fastidious technique, and an unhurried approach to
            consultation. Her practice combines surgical depth with the quiet
            confidence of an artist.
          </p>
        </div>
      </section>

      <section className="relative px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-5">
            <GlassCard className="md:col-span-3 overflow-hidden p-0">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/team/dr-gamze-portrait.jpg"
                  alt="Dr. Güler Gamze Eren at her clinic in Kadıköy, Istanbul"
                  fill
                  priority
                  sizes="(max-width: 768px) 92vw, 720px"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <p className="text-xs uppercase tracking-[0.25em] opacity-90">
                    Op. Dr.
                  </p>
                  <p className="font-display text-4xl">Güler Gamze Eren</p>
                  <p className="mt-1 text-sm opacity-90">
                    Plastic, Reconstructive &amp; Aesthetic Surgeon
                  </p>
                </div>
              </div>
            </GlassCard>

            <div className="md:col-span-2 space-y-4">
              <GlassCard className="p-7">
                <p className="eyebrow">Training</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--color-cocoa)]">
                  <li>Medical Doctor — Istanbul University, Cerrahpaşa</li>
                  <li>Plastic Surgery Residency — Ministry of Health Teaching Hospital</li>
                  <li>Aesthetic Surgery Fellowship — International rotations</li>
                </ul>
              </GlassCard>

              <GlassCard className="p-7" tint="rose">
                <p className="eyebrow">Memberships</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--color-cocoa)]">
                  <li>Turkish Society of Plastic, Reconstructive & Aesthetic Surgery (TPRECD)</li>
                  <li>Turkish Medical Association</li>
                  <li>International Society of Aesthetic Plastic Surgery (associate)</li>
                </ul>
              </GlassCard>

              <GlassCard className="p-7">
                <p className="eyebrow">Languages</p>
                <p className="mt-3 text-sm text-[var(--color-cocoa)]">
                  Turkish · English · Working German
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-24 px-4 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <GlassCard className="p-10 sm:p-14">
            <p className="eyebrow">Approach</p>
            <h2 className="headline mt-4 text-3xl sm:text-4xl">
              An aesthetic that looks{" "}
              <span className="italic-accent">unmistakably yours.</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--color-cocoa)]">
              <p>
                Dr. Eren&apos;s practice is built on three principles. The first
                is harmony — every change is judged against the rest of the face
                or body, never in isolation. The second is restraint — taking
                only what is needed to reach the result you want, nothing more.
                The third is transparency — 3D simulation, frank conversation,
                and a written plan so you know precisely what is being proposed.
              </p>
              <p>
                The clinic in Caddebostan is intentionally small. Patients are
                seen privately, by name, and consultations are unrushed.
                International visitors are looked after with a concierge service
                that covers everything from airport pickup to follow-up at home.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Inside the clinic gallery — uses the second portrait + an Unsplash spa image */}
      <section className="relative mt-24 px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Inside the clinic</p>
          <h2 className="headline mt-3 max-w-2xl text-3xl sm:text-4xl">
            A small, private practice in{" "}
            <span className="italic-accent">Caddebostan.</span>
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <GlassCard className="md:col-span-2 overflow-hidden p-0">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/team/dr-gamze-clinic.jpg"
                  alt="Dr. Gamze Eren beside the clinic signage at the practice entrance"
                  fill
                  sizes="(max-width: 768px) 92vw, 720px"
                  className="object-cover"
                />
              </div>
            </GlassCard>
            <GlassCard className="overflow-hidden p-0" tint="rose">
              <div className="relative aspect-[16/10] w-full md:aspect-auto md:h-full">
                <Image
                  src="/img/spa-minimal.jpg"
                  alt="Minimal, calming treatment-room aesthetic"
                  fill
                  sizes="(max-width: 768px) 92vw, 360px"
                  className="object-cover"
                />
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="relative mt-16 px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                t: "Patient-first consultations",
                d: "60-minute private sessions. We listen first, recommend second.",
              },
              {
                t: "Accredited hospital surgery",
                d: "Procedures performed in partner hospitals with senior anaesthesia and full ICU backup.",
              },
              {
                t: "Long-term follow-up",
                d: "Aftercare scheduled for 24h, 7d, 1mo, 3mo, 12mo — by video if you live abroad.",
              },
            ].map((v, i) => (
              <GlassCard key={i} className="p-7">
                <p className="font-display text-3xl text-[var(--color-rosegold)]">
                  0{i + 1}
                </p>
                <p className="mt-3 text-lg font-medium">{v.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-cocoa)]">
                  {v.d}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mt-24 px-4 sm:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="headline text-3xl sm:text-4xl">
            Considering a procedure?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-cocoa)]">
            A consultation is the right place to start — there&apos;s no
            obligation, and you&apos;ll leave with a clearer sense of what is
            possible.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-solid">
              Book consultation
            </Link>
            <Link href="/services" className="btn-glass">
              Browse procedures
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
