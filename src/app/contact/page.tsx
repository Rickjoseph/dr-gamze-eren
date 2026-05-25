import type { Metadata } from "next";
import { GlassCard } from "@/components/GlassCard";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Consultation",
  description:
    "Request a private consultation with Dr. Gamze Eren in Istanbul. International patients welcome — concierge support available.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative px-4 sm:px-8">
        <div className="mx-auto max-w-6xl pt-8 pb-12">
          <p className="eyebrow">Contact</p>
          <h1 className="headline mt-4 text-[clamp(2.4rem,6vw,4.6rem)]">
            Begin a{" "}
            <span className="italic-accent">private</span> conversation.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-cocoa)]">
            Share a few details and Dr. Eren&apos;s team will reach out within
            one working day. Every message is read by a person, not a chatbot.
          </p>
        </div>
      </section>

      <section className="relative px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-5">
            <GlassCard className="p-8 sm:p-10 lg:col-span-3" refract>
              <ContactForm />
            </GlassCard>

            <div className="lg:col-span-2 space-y-5">
              <GlassCard className="p-7" tint="rose">
                <p className="eyebrow">Clinic</p>
                <address className="not-italic mt-3 text-sm leading-relaxed text-[var(--color-cocoa)]">
                  Caddebostan Mah., Ethem Efendi Cad.
                  <br />
                  No:3 Uğur Apt. D:9
                  <br />
                  34728 Kadıköy / İstanbul, Türkiye
                </address>
              </GlassCard>

              <GlassCard className="p-7">
                <p className="eyebrow">Direct</p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--color-cocoa)]">
                  <li>
                    <span className="block text-xs uppercase tracking-widest text-[var(--color-taupe)]">
                      Phone &amp; WhatsApp
                    </span>
                    <a href="tel:+905411637220" className="text-base text-[var(--color-ink)]">
                      +90 541 163 72 20
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs uppercase tracking-widest text-[var(--color-taupe)]">
                      Email
                    </span>
                    <a href="mailto:info@drgamzeeren.com" className="text-base text-[var(--color-ink)]">
                      info@drgamzeeren.com
                    </a>
                  </li>
                </ul>
              </GlassCard>

              <GlassCard className="p-7">
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
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-16 px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <GlassCard className="overflow-hidden p-0">
            <iframe
              title="Clinic location"
              src="https://www.google.com/maps?q=Caddebostan+Mah.+Ethem+Efendi+Cad.+No:3+Kadıköy+İstanbul&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </GlassCard>
        </div>
      </section>
    </>
  );
}
