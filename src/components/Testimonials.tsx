"use client";
import Image from "next/image";
import { useState, useRef } from "react";

interface Review {
  name: string;
  country: string;
  flag: string;
  procedure: string;
  photo?: string;
  initials: string;
  short: { en: string; tr: string; de: string; ru: string };
  full: { en: string; tr?: string; de?: string; ru?: string };
}

const reviews: Review[] = [
  {
    name: "Renata Bobeica",
    country: "Moldova",
    flag: "MD",
    procedure: "Breast augmentation",
    initials: "RB",
    short: {
      en: "Dr. Eren is truly outstanding, warm, knowledgeable, and meticulous. I travelled to Turkey hoping for a great result, but I left with so much more, confidence, peace of mind, and an experience I will always be grateful for.",
      tr: "Dr. Eren gerçekten olağanüstü, sıcak, bilgili ve titiz. Türkiye'ye harika bir sonuç umuduyla geldim ama çok daha fazlasıyla ayrıldım, özgüven, huzur ve minnetle hatırlayacağım bir deneyim.",
      de: "Dr. Eren ist wirklich außergewöhnlich, herzlich, kompetent und sorgfältig. Ich kam in die Türkei in der Hoffnung auf ein großartiges Ergebnis, aber ich ging mit so viel mehr, Selbstvertrauen, Seelenfrieden und einer Erfahrung, für die ich immer dankbar sein werde.",
      ru: "Доктор Эрен по-настоящему выдающийся специалист, тёплый, знающий и внимательный. Я приехала в Турцию в надежде на хороший результат, но уехала с гораздо большим, с уверенностью в себе, душевным покоем и опытом, за который я буду вечно благодарна.",
    },
    full: {
      en: "I rarely write reviews, but my experience with Dr. Güler Gamze Eren and her assistant Berrak has been so exceptional that I felt compelled to share it.\n\nChoosing breast augmentation is a big decision, especially when traveling abroad for surgery, but from my very first contact with the clinic, I felt completely reassured. Every question was answered with patience, honesty, and professionalism.\n\nDr. Eren is truly outstanding, warm, knowledgeable, meticulous, and incredibly talented. She listened carefully to my wishes, explained everything clearly, and made me feel supported every step of the way.\n\nA special thank you to Berrak, who was an absolute angel throughout this journey. Her kindness, patience, and constant support made such a difference.\n\nI am only one week post-op, but I am already so happy with my results. I travelled to Turkey hoping for a great result, but I left with so much more, confidence, peace of mind, and an experience I will always be grateful for.",
    },
  },
  {
    name: "Irina Hayes",
    country: "Russia",
    flag: "RU",
    procedure: "Surgery",
    photo: "/img/reviews/irina-hayes.webp",
    initials: "IH",
    short: {
      en: "You're not just a great doctor, you're a person with a big heart. Like a fairy, you make our wishes come true. ❤️",
      tr: "Sadece harika bir doktor değilsiniz, büyük bir kalbe sahip bir insansınız. Bir peri gibi dileklerimizi gerçeğe dönüştürüyorsunuz. ❤️",
      de: "Sie sind nicht nur eine großartige Ärztin, Sie sind ein Mensch mit einem großen Herzen. Wie eine Fee erfüllen Sie unsere Wünsche. ❤️",
      ru: "Вы не просто великолепный врач, вы человек с большим сердцем. Как фея, вы исполняете наши мечты. ❤️",
    },
    full: {
      en: "Thank you for your professionalism and confident hand during my surgery. Your work gave me a second chance at a healthier life.\n\nYou're not just a great doctor, you're a person with a big heart. Thank you for your talent, knowledge, and the care you show each patient.\n\nAnd like a fairy, you make our wishes come true. ❤️❤️❤️",
      ru: "Спасибо за профессионализм и уверенную руку во время моей операции. Ваша работа дала мне второй шанс на более здоровую жизнь.\n\nВы не просто великолепный врач, вы человек с большим сердцем. Спасибо за ваш талант, знания и заботу о каждом пациенте.\n\nИ как фея, вы исполняете наши желания. ❤️❤️❤️",
    },
  },
  {
    name: "Daniel",
    country: "Germany",
    flag: "DE",
    procedure: "Abdominoplasty & Gynecomastia",
    photo: "/img/reviews/daniel.webp",
    initials: "DA",
    short: {
      en: "After losing 55 kg, I underwent circular abdominoplasty with liposuction and gynecomastia removal, and everything went perfectly. Excellent and attentive doctor. I couldn't be happier with the results.",
      tr: "55 kg verdikten sonra liposuction ile birlikte dairesel karın germe ve jinekomasti ameliyatı oldum, ve her şey mükemmel gitti. Mükemmel ve ilgili bir doktor. Sonuçlardan daha mutlu olamazdım.",
      de: "Nach 55 kg Gewichtsverlust unterzog ich mich einer zirkulären Abdominoplastik mit Liposuktion und Gynäkomastie-Entfernung, und alles verlief perfekt. Ausgezeichnete und aufmerksame Ärztin. Ich könnte nicht glücklicher mit den Ergebnissen sein.",
      ru: "После потери 55 кг я прошёл циркулярную абдоминопластику с липосакцией и удалением гинекомастии, всё прошло идеально. Отличный и внимательный врач. Я не мог бы быть счастливее с результатами.",
    },
    full: {
      en: "Excellent and attentive doctor!\n\nI underwent an extensive surgery, circular abdominoplasty with liposuction and gynecomastia removal, after losing 55 kg, and everything went perfectly.\n\nDr. Gamze Eren took great care of me throughout the entire process, from the initial consultation to post-operative follow-up. She was thorough, patient, and genuinely invested in getting the best possible result for me.\n\nThe results exceeded my expectations. I couldn't be happier with my transformation.",
      de: "Ausgezeichnete und aufmerksame Ärztin!\n\nNach einem Gewichtsverlust von 55 kg unterzog ich mich einer umfangreichen Operation, zirkuläre Abdominoplastik mit Liposuktion und Gynäkomastie-Entfernung, und alles verlief perfekt.\n\nDr. Gamze Eren kümmerte sich von der ersten Konsultation bis zur postoperativen Nachsorge hervorragend um mich. Sie war gründlich, geduldig und wirklich darum bemüht, das bestmögliche Ergebnis für mich zu erzielen.\n\nDie Ergebnisse übertrafen meine Erwartungen. Ich könnte nicht glücklicher mit meiner Verwandlung sein.",
    },
  },
  {
    name: "Lily O'Brian",
    country: "Ireland",
    flag: "IE",
    procedure: "Liposuction & BBL",
    photo: "/img/reviews/lily.webp",
    initials: "LO",
    short: {
      en: "Dr. Gamze Eren is an absolute legend. According to my massage therapist, who has worked with patients from many surgeons, Dr. Gamze is one of the very few doctors whose patients she has never seen experience post-op complications.",
      tr: "Dr. Gamze Eren gerçek bir efsane. Masaj terapistim, birçok cerrahın hastasıyla çalışan, Dr. Gamze'nin hastalarında ameliyat sonrası komplikasyon görmediğini söyledi. Bu, cerrahi tekniğinin ve ameliyat sonrası bakımının kalitesi hakkında çok şey anlatıyor.",
      de: "Dr. Gamze Eren ist eine absolute Legende. Meine Massagetherapeutin, die mit Patienten vieler Chirurgen gearbeitet hat, sagte, Dr. Gamze sei eine der wenigen Ärztinnen, deren Patienten sie nie postoperative Komplikationen erlebt hat.",
      ru: "Доктор Гамзе Эрен, настоящая легенда. Мой массажист, работавший с пациентами многих хирургов, сказал, что доктор Гамзе, один из очень немногих врачей, чьи пациенты никогда не испытывают послеоперационных осложнений.",
    },
    full: {
      en: "Dr. Gamze Eren is an absolute legend. She is a highly skilled aesthetic surgeon who, together with her professional team, provides a reliable, supportive, and truly patient-centered service.\n\nWhile most surgeons quickly agreed with the areas I wanted liposuction, and some even pushed me toward a full BBL to increase the costs, Dr. Gamze did the opposite. She carefully explained the risks, set realistic expectations, and pushed back where she felt it was unsafe.\n\nShe used six entry points in total, three on each upper leg, and each one has left only a tiny scar that is practically unnoticeable. The placement is very symmetrical, reflecting her aesthetic eye and meticulous attention to detail.\n\nOne of the standout aspects is that she requires patients to stay in the hospital for two nights post-surgery, something no other surgeon I consulted offered. This made a huge difference in my recovery.\n\nAccording to my massage therapist, who has worked with patients from many different surgeons, Dr. Gamze is one of the very few doctors whose patients she has never seen experience post-op complications. That speaks volumes.",
    },
  },
  {
    name: "Veronika",
    country: "Ukraine",
    flag: "UA",
    procedure: "Rhinoplasty",
    photo: "/img/reviews/veronika.webp",
    initials: "VR",
    short: {
      en: "I am beyond grateful to Dr. Gamze Eren for performing the most beautiful rhinoplasty I could have ever dreamed of. From our first consultation, she was kind, patient, and truly listened to everything I wanted.",
      tr: "Dr. Gamze Eren'e hayalimde bile göremeyeceğim kadar güzel bir rinoplasti gerçekleştirdiği için sonsuza kadar minnetarım. İlk konsültasyonumuzdan itibaren nazik, sabırlı ve isteklerimi gerçekten dinleyen biri oldu.",
      de: "Ich bin Dr. Gamze Eren unendlich dankbar für die wunderschönste Rhinoplastik, die ich mir je hätte erträumen können. Von unserer ersten Beratung an war sie freundlich, geduldig und hörte wirklich auf alles, was ich wollte.",
      ru: "Я безмерно благодарна доктору Гамзе Эрен за самую красивую ринопластику, о которой я могла только мечтать. С первой консультации она была добра, терпелива и по-настоящему слушала всё, что я хотела.",
    },
    full: {
      en: "I am beyond grateful to Dr. Gamze Eren for performing the most beautiful rhinoplasty I could have ever dreamed of. From our first consultation, she was kind, patient, and truly listened to everything I wanted. Her professionalism, skill, and artistry are unmatched.\n\nThe results are absolutely stunning, natural, balanced, and exactly what I had hoped for. The entire experience, from pre-op to recovery, was smooth and well-supported by her team.\n\nIf you are considering rhinoplasty, look no further. Dr. Gamze Eren is simply the best.",
      ru: "Я безмерно благодарна доктору Гамзе Эрен за самую красивую ринопластику, о которой я могла только мечтать. С первой консультации она была добра, терпелива и по-настоящему слушала. Её профессионализм, мастерство и художественный вкус не имеют себе равных.\n\nРезультаты абсолютно потрясающие, естественные, гармоничные и именно такие, на которые я надеялась.\n\nЕсли вы думаете о ринопластике, не ищите больше. Доктор Гамзе Эрен, просто лучшая.",
    },
  },
];

type Locale = "en" | "tr" | "de" | "ru";

const LOCALE_LABELS: Record<Locale, string> = { en: "EN", tr: "TR", de: "DE", ru: "RU" };

const FLAG_EMOJIS: Record<string, string> = {
  MD: "🇲🇩", RU: "🇷🇺", DE: "🇩🇪", IE: "🇮🇪", UA: "🇺🇦",
};

function Stars() {
  return (
    <span className="flex gap-0.5" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-3 w-3 fill-[var(--color-rosegold)]" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </span>
  );
}

function Avatar({ review }: { review: Review }) {
  if (review.photo) {
    return (
      <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-white/60 shadow-md">
        <Image src={review.photo} alt={review.name} fill sizes="44px" className="object-cover" />
      </div>
    );
  }
  return (
    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-rosegold)]/15 ring-2 ring-white/60 shadow-sm">
      <span className="text-xs font-semibold text-[var(--color-rosegold)]">{review.initials}</span>
    </div>
  );
}

function ReviewCard({ review, locale }: { review: Review; locale: Locale }) {
  const [expanded, setExpanded] = useState(false);

  const shortText = review.short[locale] ?? review.short.en;
  const fullText = (review.full[locale] ?? review.full.en) as string;

  return (
    <div className="flex h-full flex-col rounded-3xl border border-white/60 bg-white/30 p-6 shadow-[0_8px_32px_-8px_rgba(26,20,16,0.10)] backdrop-blur-sm">
      {/* Avatar + name */}
      <div className="flex items-center gap-3">
        <Avatar review={review} />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[var(--color-ink)]">{review.name}</p>
          <p className="mt-0.5 text-xs text-[var(--color-taupe)]">
            {FLAG_EMOJIS[review.flag]} {review.country}
          </p>
        </div>
      </div>

      {/* Stars + procedure tag */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Stars />
        <span className="rounded-full bg-[var(--color-rosegold)]/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--color-rosegold)]">
          {review.procedure}
        </span>
      </div>

      {/* Quote */}
      <div className="mt-4 flex-1">
        {expanded ? (
          <p className="text-sm leading-relaxed text-[var(--color-cocoa)]">
            {fullText.split("\n\n").map((para, i, arr) => (
              <span key={i}>
                {para}
                {i < arr.length - 1 && <><br /><br /></>}
              </span>
            ))}
          </p>
        ) : (
          <p className="text-sm leading-relaxed text-[var(--color-cocoa)]">
            &ldquo;{shortText}&rdquo;
          </p>
        )}
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 self-start text-xs font-medium text-[var(--color-rosegold)] hover:text-[var(--color-rose)] transition-colors"
      >
        {expanded ? "Show less ↑" : "Read full review →"}
      </button>
    </div>
  );
}

export function Testimonials({ locale = "en" }: { locale?: Locale }) {
  const [active, setActive] = useState(0);
  const [displayLocale, setDisplayLocale] = useState<Locale>(locale);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setActive((a) => (a === 0 ? reviews.length - 1 : a - 1));
  const next = () => setActive((a) => (a === reviews.length - 1 ? 0 : a + 1));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  // Show 3 cards on desktop (active-1, active, active+1), 1 on mobile
  const getVisible = () => {
    const len = reviews.length;
    return [
      reviews[(active - 1 + len) % len],
      reviews[active],
      reviews[(active + 1) % len],
    ];
  };
  const visible = getVisible();

  return (
    <section className="relative mt-32 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header row */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Patient stories</p>
            <h2 className="headline mt-3 text-4xl sm:text-5xl">
              In their own{" "}
              <span className="italic-accent">words</span>
            </h2>
          </div>

          {/* Locale switcher */}
          <div className="flex items-center gap-1.5">
            {(Object.keys(LOCALE_LABELS) as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => setDisplayLocale(l)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                  displayLocale === l
                    ? "bg-[var(--color-rosegold)] text-white shadow-sm"
                    : "bg-white/40 text-[var(--color-taupe)] hover:bg-white/70"
                }`}
              >
                {LOCALE_LABELS[l]}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel, 3 cards desktop, 1 mobile */}
        <div
          className="relative"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Desktop: 3 cards, middle highlighted */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-5">
            {visible.map((r, i) => (
              <div
                key={r.name + i}
                className={`transition-all duration-300 ${
                  i === 1
                    ? "scale-100 opacity-100"
                    : "scale-[0.96] opacity-60"
                }`}
              >
                <ReviewCard review={r} locale={displayLocale} />
              </div>
            ))}
          </div>

          {/* Mobile + tablet: single card */}
          <div className="lg:hidden">
            <ReviewCard review={reviews[active]} locale={displayLocale} />
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="absolute -left-4 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 shadow-md border border-white/60 hover:bg-white transition-all hidden lg:flex"
          >
            <svg className="h-4 w-4 text-[var(--color-cocoa)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="absolute -right-4 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 shadow-md border border-white/60 hover:bg-white transition-all hidden lg:flex"
          >
            <svg className="h-4 w-4 text-[var(--color-cocoa)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-[var(--color-rosegold)]"
                    : "w-1.5 bg-[var(--color-rosegold)]/25"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
          <a
            href="https://maps.app.goo.gl/GGsK3hPHbvDJbyHd8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-[var(--color-taupe)] hover:text-[var(--color-rosegold)] transition-colors"
          >
            4.9 · 60 reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
