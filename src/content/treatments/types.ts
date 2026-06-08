import type { Locale } from "@/i18n/dict";

// Treatment categories mirror the service groups in the dictionary
// (t.serviceContent / t.groups) so a treatment can be surfaced under the
// right section on the Services page.
export type ServiceCategory = "facial" | "body" | "breast" | "non-surgical";

export type TreatmentSection = {
  heading: string;
  // Paragraphs separated by a blank line (\n\n), rendered as <p> blocks.
  body: string;
};

export type TreatmentFaq = { q: string; a: string };

export type TreatmentContent = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  tagline: string;
  summary: string;
  sections: TreatmentSection[];
  faqs?: TreatmentFaq[];
};

export type Treatment = {
  slug: string;
  category: ServiceCategory;
  image: string; // hero image path under /public
  imageAlt: string;
  // English is required and used as the fallback when a locale is missing.
  content: Partial<Record<Locale, TreatmentContent>> & { en: TreatmentContent };
};
