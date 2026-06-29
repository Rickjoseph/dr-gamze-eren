"use client";
import Image from "next/image";
import { useState } from "react";

interface Review {
  name: string;
  country: string;
  flag: string;
  procedure: string;
  photo?: string;
  initials: string;
  short: string;
  full: string;
}

const reviews: Review[] = [
  {
    name: "Renata Bobeica",
    country: "Moldova",
    flag: "🇲🇩",
    procedure: "Breast augmentation",
    initials: "RB",
    short:
      "Dr. Eren is truly outstanding—warm, knowledgeable, meticulous, and incredibly talented. I travelled to Turkey hoping for a great result, but I left with so much more—confidence, peace of mind, and an experience I will always be grateful for.",
    full: "I rarely write reviews, but my experience with Dr. Güler Gamze Eren and her assistant Berrak has been so exceptional that I felt compelled to share it.\n\nChoosing breast augmentation is a big decision, especially when traveling abroad for surgery, but from my very first contact with the clinic, I felt completely reassured. Every question was answered with patience, honesty, and professionalism, giving me total confidence in my choice.\n\nDr. Eren is truly outstanding—warm, knowledgeable, meticulous, and incredibly talented. She listened carefully to my wishes, explained everything clearly, and made me feel supported every step of the way.\n\nA special thank you to Berrak, who was an absolute angel throughout this journey. Her kindness, patience, and constant support made such a difference.\n\nI am only one week post-op, but I am already so happy with my results. The care I received before, during, and after surgery exceeded all my expectations.\n\nI travelled to Turkey hoping for a great result, but I left with so much more—confidence, peace of mind, and an experience I will always be grateful for.",
  },
  {
    name: "Irina Hayes",
    country: "Russia",
    flag: "🇷🇺",
    procedure: "Surgery",
    photo: "/img/reviews/irina-hayes.webp",
    initials: "IH",
    short:
      "You're not just a great doctor, you're a person with a big heart. Like a fairy, you make our wishes come true. ❤️",
    full: "Thank you for your professionalism and confident hand during my surgery. Your work gave me a second chance at a healthier life.\n\nYou're not just a great doctor, you're a person with a big heart. Thank you for your talent, knowledge, and the care you show each patient. Thank you for everything you do as a doctor.\n\nAnd like a fairy, you make our wishes come true. ❤️❤️❤️",
  },
  {
    name: "Lily O'Brian",
    country: "Ireland",
    flag: "🇮🇪",
    procedure: "Liposuction & BBL",
    initials: "LO",
    short:
      "Dr. Gamze Eren is an absolute legend. According to my massage therapist—who has worked with many patients from different surgeons—Dr. Gamze is one of the very few doctors whose patients she has never seen experience post-op complications.",
    full: "Dr. Gamze Eren is an absolute legend. She is a highly skilled aesthetic surgeon who, together with her professional team, provides a reliable, supportive, and truly patient-centered service.\n\nI underwent thigh liposuction and fat transfer to the buttocks with her, and I couldn't be happier with both the results and the entire journey.\n\nWhile most surgeons quickly agreed with the areas I wanted liposuction—and some even pushed me toward a full BBL to increase the costs—Dr. Gamze did the opposite. She carefully explained the risks, set realistic expectations, and pushed back where she felt it was unsafe or unnecessary.\n\nShe used six entry points in total, three on each upper leg, and each one has left only a tiny scar that is practically unnoticeable. The placement is also very symmetrical, which reflects her aesthetic eye and meticulous attention to detail.\n\nOne of the standout aspects of Dr. Gamze's care is that she requires patients to stay in the hospital for two nights post-surgery—something no other surgeon I consulted offered. This made a huge difference in my recovery.\n\nAccording to my massage therapist, who has worked with many patients from different surgeons, Dr. Gamze is one of the very few doctors whose patients she has never seen experience post-op complications. That speaks volumes about the quality of her surgical technique and aftercare.",
  },
];

function Stars() {
  return (
    <span className="flex gap-0.5" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5 fill-[var(--color-rosegold)]" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </span>
  );
}

function Avatar({ review }: { review: Review }) {
  if (review.photo) {
    return (
      <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/60 shadow-md flex-shrink-0">
        <Image src={review.photo} alt={review.name} fill sizes="48px" className="object-cover" />
      </div>
    );
  }
  return (
    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-rosegold)]/20 ring-2 ring-white/60 shadow-md">
      <span className="text-sm font-semibold text-[var(--color-rosegold)]">{review.initials}</span>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col rounded-3xl border border-white/60 bg-white/30 p-7 shadow-[0_8px_32px_-8px_rgba(26,20,16,0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_-12px_rgba(26,20,16,0.18)]">
      {/* Top row */}
      <div className="flex items-center gap-4">
        <Avatar review={review} />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[var(--color-ink)]">{review.name}</p>
          <p className="mt-0.5 text-xs text-[var(--color-taupe)]">
            {review.flag} {review.country}
          </p>
        </div>
      </div>

      {/* Stars + procedure */}
      <div className="mt-4 flex items-center gap-3">
        <Stars />
        <span className="rounded-full bg-[var(--color-rosegold)]/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[var(--color-rosegold)]">
          {review.procedure}
        </span>
      </div>

      {/* Quote */}
      <div className="mt-4 flex-1">
        <p className="text-sm leading-relaxed text-[var(--color-cocoa)]">
          {expanded
            ? review.full.split("\n\n").map((para, i) => (
                <span key={i}>
                  {para}
                  {i < review.full.split("\n\n").length - 1 && <><br /><br /></>}
                </span>
              ))
            : `"${review.short}"`}
        </p>
      </div>

      {/* Expand toggle */}
      {review.full !== review.short && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-5 self-start text-xs font-medium text-[var(--color-rosegold)] hover:text-[var(--color-rose)] transition-colors"
        >
          {expanded ? "Show less ↑" : "Read full review →"}
        </button>
      )}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative mt-32 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Patient stories</p>
            <h2 className="headline mt-3 text-4xl sm:text-5xl">
              In their own{" "}
              <span className="italic-accent">words</span>
            </h2>
          </div>
          <a
            href="https://maps.app.goo.gl/GGsK3hPHbvDJbyHd8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-sm font-medium text-[var(--color-cocoa)] hover:text-[var(--color-rosegold)] transition-colors"
          >
            See all reviews on Google →
          </a>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
