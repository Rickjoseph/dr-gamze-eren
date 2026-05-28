import type { Metadata } from "next";
import { ResultsGallery } from "@/components/ResultsGallery";
import { getDict } from "@/i18n/getLocale";

export const metadata: Metadata = {
  title: "Patient Results",
  description: "Before and after results from Dr. Gamze Eren's patients — rhinoplasty, breast, body contouring and facial aesthetics in Istanbul.",
  robots: { index: false, follow: false }, // No Google image indexing
};

export default async function ResultsPage() {
  const { t } = await getDict();
  return <ResultsGallery t={t} />;
}
