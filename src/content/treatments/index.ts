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
import { brazilianButtLift } from "./brazilian-butt-lift";
import { abdominoplasty } from "./abdominoplasty";
import { armThighLift } from "./arm-thigh-lift";
import { liposuction } from "./liposuction";
import { breastLift } from "./breast-lift";
import { breastAugmentation } from "./breast-augmentation";
import { breastReduction } from "./breast-reduction";
import { secondaryBreastSurgery } from "./secondary-breast-surgery";
import { botulinumToxin } from "./botulinum-toxin";
import { dermalFillers } from "./dermal-fillers";
import { mesotherapySkinBoosters } from "./mesotherapy-skin-boosters";
import { medicalPeels } from "./medical-peels";
import { bioStimulators } from "./bio-stimulators";

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
  breastLift,
  breastAugmentation,
  breastReduction,
  secondaryBreastSurgery,
  gynecomastia,
  polandSyndrome,
  // Body
  mommyMakeover,
  brazilianButtLift,
  abdominoplasty,
  armThighLift,
  liposuction,
  // Non-surgical
  botulinumToxin,
  dermalFillers,
  mesotherapySkinBoosters,
  medicalPeels,
  bioStimulators,
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
  body: ["mommy-makeover", "brazilian-butt-lift", "abdominoplasty", "arm-thigh-lift", "liposuction"],
  breast: ["breast-lift", "breast-augmentation", "breast-reduction", "secondary-breast-surgery", "gynecomastia", "poland-syndrome"],
  "non-surgical": ["botulinum-toxin", "dermal-fillers", "mesotherapy-skin-boosters", "medical-peels", "bio-stimulators"],
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
  de: {
    back: "← Zurück zu den Eingriffen",
    guidesLabel: "Ausführliche Leitfäden",
    faqTitle: "Häufige Fragen",
    disclaimer:
      "Diese Seite dient nur allgemeinen Informationszwecken und ist keine medizinische Beratung. Eignung und Ergebnisse variieren individuell und werden in der Beratung besprochen.",
    ctaTitle: "Erwägen Sie diesen Eingriff?",
    ctaBody: "Vereinbaren Sie eine persönliche Beratung bei Dr. Gamze Eren – online oder in der Klinik.",
    ctaButton: "Beratung vereinbaren",
    secondaryButton: "Alle Eingriffe",
  },
};

// Returns the previous and next treatments relative to `slug` in the flat
// treatments array order (category-grouped: facial → breast → body → non-surgical).
export function getAdjacentTreatments(slug: string): {
  prev: Treatment | null;
  next: Treatment | null;
} {
  const idx = treatments.findIndex((t) => t.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? treatments[idx - 1] : null,
    next: idx < treatments.length - 1 ? treatments[idx + 1] : null,
  };
}

// Prev/next navigation labels per locale.
export const treatmentNavLabels: Record<Locale, { prev: string; next: string }> = {
  en: { prev: "Previous", next: "Next" },
  de: { prev: "Vorheriger", next: "Nächster" },
  ru: { prev: "Назад", next: "Вперёд" },
  tr: { prev: "Önceki", next: "Sonraki" },
};

