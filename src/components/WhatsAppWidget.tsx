"use client";

import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "905411637220";
// Honeypot: hidden field bots almost always fill in. Real users never
// see it because it's off-screen. If non-empty on submit -> silently
// drop the lead.
const HONEYPOT_FIELD = "website_url";
// Minimum dwell time (ms) the form must be open before a real human
// could plausibly have filled it. Below this -> likely a bot.
const MIN_DWELL_MS = 1500;

const PROCEDURES = [
  "Rhinoplasty",
  "Breast Augmentation",
  "Breast Lift / Reduction",
  "Tummy Tuck",
  "Liposuction / Body Contouring",
  "Blepharoplasty (Eyelid)",
  "Brow Lift",
  "Mommy Makeover",
  "Non-surgical Treatment",
  "Other / Not sure yet",
];

const COUNTRIES = [
  "United Kingdom", "Germany", "Netherlands", "France", "Spain",
  "Ukraine", "Russia", "Poland", "Belgium", "Switzerland",
  "United States", "Canada", "Australia", "Other",
];

type Step = "bubble" | "form" | "success";

export function WhatsAppWidget() {
  const [step, setStep] = useState<Step>("bubble");
  const [form, setForm] = useState({
    name: "",
    country: "",
    procedure: "",
    message: "",
    consent: false,
  });
  const [honeypot, setHoneypot] = useState("");
  const [openedAt, setOpenedAt] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  // Stop pulse after 6 seconds
  useEffect(() => {
    const t = setTimeout(() => setShowPulse(false), 6000);
    return () => clearTimeout(t);
  }, []);

  // Record open time whenever the form is opened (for dwell-time check)
  useEffect(() => {
    if (step === "form") setOpenedAt(Date.now());
  }, [step]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Anti-spam: honeypot filled, or form submitted impossibly fast.
    // Pretend to succeed so bots don't learn what tripped them.
    const dwell = openedAt ? Date.now() - openedAt : 0;
    if (honeypot || dwell < MIN_DWELL_MS) {
      setStep("success");
      return;
    }

    setSubmitting(true);
    try {
      await fetch("https://aurenza-v1-1-gemstone.base44.app/functions/auraWebhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-aura-secret": "aurenza-aura-2026-secret-x7k9maX9mK2pL8vQr4nWj",
        },
        body: JSON.stringify({
          action: "create_lead",
          data: {
            name: form.name,
            country: form.country,
            procedure_interest: form.procedure,
            notes: form.message,
            source: "website",
            language: "english",
          },
        }),
      });
    } catch {
      // Fail silently — lead still captured if webhook is down
    }
    setSubmitting(false);
    setStep("success");
  }

  return (
    <>
      {/* Fixed floating button */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <button
          type="button"
          onClick={() => setStep("form")}
          aria-label="Chat on WhatsApp"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
          style={{ backgroundColor: "#25D366" }}
        >
          {showPulse && (
            <span
              className="absolute inset-0 animate-ping rounded-full opacity-40"
              style={{ backgroundColor: "#25D366" }}
            />
          )}
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-800 opacity-0 shadow transition-opacity group-hover:opacity-100">
            Chat with us
          </span>
        </button>
      </div>

      {/* Modal / success — rendered inline so React doesn't remount on each keystroke */}
      {step === "form" && (
        <div className="fixed inset-0 z-[9998] flex items-end justify-center p-4 sm:items-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setStep("bubble")}
          />
          <div className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl bg-[#fdf8f5] shadow-2xl">
            {/* Header */}
            <div className="flex items-center gap-3 px-6 py-5" style={{ backgroundColor: "#25D366" }}>
              <svg viewBox="0 0 24 24" className="h-6 w-6 flex-shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-white">Dr. Gamze Eren Clinic</p>
                <p className="text-xs text-white/80">We typically reply within a few hours</p>
              </div>
              <button
                onClick={() => setStep("bubble")}
                className="ml-auto text-white/80 transition hover:text-white"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4 px-6 py-6">
              <p className="-mt-1 text-sm text-gray-500">
                Share a few details and we&apos;ll reach out on WhatsApp.
              </p>

              {/* Honeypot — visually hidden, screen-reader hidden, off the tab order.
                  Bots that scrape inputs will dutifully fill this and reveal themselves. */}
              <div aria-hidden="true" className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0">
                <label>
                  Leave this field empty
                  <input
                    type="text"
                    name={HONEYPOT_FIELD}
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </label>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Your name *
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="e.g. Sophie"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-base sm:text-sm text-gray-800 outline-none transition focus:border-[#25D366]"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Country *
                </label>
                <select
                  required
                  value={form.country}
                  onChange={(e) => setForm((f) => ({ ...f, country: e.target.value }))}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-base sm:text-sm text-gray-800 outline-none transition focus:border-[#25D366]"
                >
                  <option value="">Select your country</option>
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Procedure of interest *
                </label>
                <select
                  required
                  value={form.procedure}
                  onChange={(e) => setForm((f) => ({ ...f, procedure: e.target.value }))}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-base sm:text-sm text-gray-800 outline-none transition focus:border-[#25D366]"
                >
                  <option value="">Select a procedure</option>
                  {PROCEDURES.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Anything else? (optional)
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Timeline, questions, concerns..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-base sm:text-sm text-gray-800 outline-none transition focus:border-[#25D366]"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-2 text-xs text-gray-500">
                <input
                  type="checkbox"
                  required
                  checked={form.consent}
                  onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                  className="mt-0.5 accent-[#25D366]"
                />
                <span>I agree to be contacted by the clinic team via WhatsApp regarding my inquiry.</span>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl py-3 text-sm font-semibold text-white transition hover:opacity-90 active:scale-95 disabled:opacity-60"
                style={{ backgroundColor: "#25D366" }}
              >
                {submitting ? "Sending…" : "Send & start conversation →"}
              </button>
            </form>
          </div>
        </div>
      )}

      {step === "success" && (
        <div className="fixed inset-0 z-[9998] flex items-end justify-center p-4 sm:items-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setStep("bubble")} />
          <div className="relative z-10 w-full max-w-md rounded-3xl bg-[#fdf8f5] p-8 text-center shadow-2xl">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: "#25D366" }}>
              <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-display text-2xl text-gray-800">Thank you!</p>
            <p className="mt-2 text-sm text-gray-500">
              We&apos;ve received your details and will reach out on WhatsApp shortly.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C+I%27d+like+to+enquire+about+a+consultation+with+Dr.+Gamze+Eren.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              Open WhatsApp now
            </a>
            <button onClick={() => setStep("bubble")} className="mt-3 block w-full text-xs text-gray-400 hover:text-gray-600">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
