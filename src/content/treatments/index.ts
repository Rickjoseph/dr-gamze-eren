import type { Locale } from "@/i18n/dict";
import type { Treatment, TreatmentContent, ServiceCategory } from "./types";
import { gynecomastia } from "./gynecomastia";
import { polandSyndrome } from "./poland-syndrome";
import { mommyMakeover } from "./mommy-makeover";
import { rhinoplasty } from "./rhinoplasty";
import { blepharoplasty } from "./blepharoplasty";
import { browLift } from "./brow-lift";
import { lipLift } from "./lip-lift";
import { facialFatTransfer } from "./facial-fat-transfer";

export type { Treatment, TreatmentContent, ServiceCategory } from "./types";

// Registry of all dedicated treatment pages. Add a new file + import here
// and it automatically gets a /services/<slug> page and a link under its
// category on the Services page.
export const treatments: Treatment[] = [
  // Facial
  rhinoplasty,
  blepharoplasty,
  browLift,
  lipLift,
  facialFatTransfer,
  // Breast
  gynecomastia,
  polandSyndrome,
  // Body
  mommyMakeover,
];

export function getTreatment(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

// Resolve localized content, falling back to English when a locale is missing.
export function getTreatmentContent(t: Treatment, locale: Locale): TreatmentContent {
  return t.content[locale] ?? t.content.en;
}

export function getTreatmentsByCategory(category: ServiceCategory): Treatment[] {
  return treatments.filter((t) => t.category === category);
}

// Maps each procedure (by its position in t.serviceContent[category].procedures)
// to a treatment-page slug, or null when no page exists yet. The Services page
// renders procedures with a page as links and the rest as plain (muted) items.
// IMPORTANT: keep each array's order in sync with the procedures arrays in
// src/i18n/dict.ts. As more pages are built, replace nulls with their slugs.
export const procedureSlugs: Record<ServiceCategory, (string | null)[]> = {
  facial: ["rhinoplasty", "blepharoplasty", "brow-lift", "lip-lift", "facial-fat-transfer"],
  body: ["mommy-makeover", null, null, null, null],
  breast: [null, null, null, null, "gynecomastia", "poland-syndrome"],
  "non-surgical": [null, null, null, null, null],
};

// Page-chrome labels (back link, CTA, FAQ heading, disclaimer) and the
// Services-page "in-depth guides" label, per locale.
export const treatmentUI: Record<
  Locale,
  {
    back: string;
    guidesLabel: string;
    faqTitle: string;
    disclaimer: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    secondaryButton: string;
  }
> = {
  en: {
    back: "← Back to Procedures",
    guidesLabel: "In-depth guides",
    faqTitle: "Common questions",
    disclaimer:
      "This page is general information, not medical advice. Suitability and results vary from person to person and are discussed at consultation.",
    ctaTitle: "Considering this procedure?",
    ctaBody: "Book a private consultation with Dr. Gamze Eren — online or in clinic.",
    ctaButton: "Book consultation",
    secondaryButton: "All procedures",
  },
  tr: {
    back: "← İşlemlere dön",
    guidesLabel: "Ayrıntılı rehberler",
    faqTitle: "Sık sorulan sorular",
    disclaimer:
      "Bu sayfa genel bilgi amaçlıdır, tıbbi tavsiye değildir. Uygunluk ve sonuçlar kişiden kişiye değişir ve konsültasyonda görüşülür.",
    ctaTitle: "Bu işlemi mi düşünüyorsunuz?",
    ctaBody: "Dr. Gamze Eren ile özel bir konsültasyon ayırtın — çevrimiçi veya klinikte.",
    ctaButton: "Konsültasyon ayırt",
    secondaryButton: "Tüm işlemler",
  },
  ru: {
    back: "← Назад к процедурам",
    guidesLabel: "Подробные руководства",
    faqTitle: "Частые вопросы",
    disclaimer:
      "Эта страница носит общий информационный характер и не является медицинской рекомендацией. Показания и результаты индивидуальны и обсуждаются на консультации.",
    ctaTitle: "Рассматриваете эту процедуру?",
    ctaBody: "Запишитесь на частную консультацию к доктору Гамзе Эрен — онлайн или в клинике.",
    ctaButton: "Записаться на консультацию",
    secondaryButton: "Все процедуры",
  },
};
