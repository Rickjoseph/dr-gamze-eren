"use client";

import { useState } from "react";

const interests = [
  "Facial Aesthetics",
  "Body Contouring",
  "Breast Aesthetics",
  "Non-surgical",
  "Not sure yet",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <p className="font-display text-4xl">
          Thank you.{" "}
          <span className="italic-accent">We&apos;ll be in touch.</span>
        </p>
        <p className="mx-auto mt-4 max-w-sm text-sm text-[var(--color-cocoa)]">
          Dr. Eren&apos;s team responds personally within one working day. For
          anything urgent, please call{" "}
          <a href="tel:+905411637220" className="underline">
            +90 541 163 72 20
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <p className="eyebrow">Request a consultation</p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" required />
        <Field label="Last name" name="lastName" required />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone / WhatsApp" name="phone" type="tel" />
      </div>

      <div>
        <label className="eyebrow block">Area of interest</label>
        <div className="mt-3 flex flex-wrap gap-2">
          {interests.map((it) => (
            <label
              key={it}
              className="cursor-pointer rounded-full border border-white/60 bg-white/35 px-4 py-2 text-sm text-[var(--color-cocoa)] transition has-[:checked]:border-[var(--color-rosegold)] has-[:checked]:bg-[var(--color-rosegold)]/20 has-[:checked]:text-[var(--color-ink)]"
            >
              <input
                type="checkbox"
                name="interest"
                value={it}
                className="sr-only"
              />
              {it}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow block">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us a little about your goals — there are no wrong answers."
          className="mt-3 w-full rounded-2xl border border-white/60 bg-white/45 px-5 py-4 text-[var(--color-ink)] placeholder:text-[var(--color-taupe)]/70 outline-none transition focus:border-[var(--color-rosegold)] focus:bg-white/70"
        />
      </div>

      <label className="flex items-start gap-3 text-xs text-[var(--color-cocoa)]">
        <input type="checkbox" required className="mt-1 accent-[var(--color-rosegold)]" />
        <span>
          I consent to my information being used to contact me about a
          consultation. We never share your details with third parties.
        </span>
      </label>

      <button type="submit" className="btn-solid w-full justify-center sm:w-auto">
        Send request
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full rounded-2xl border border-white/60 bg-white/45 px-5 py-3 text-[var(--color-ink)] placeholder:text-[var(--color-taupe)]/70 outline-none transition focus:border-[var(--color-rosegold)] focus:bg-white/70"
      />
    </div>
  );
}
