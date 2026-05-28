import type { Metadata } from "next";
import { ResultsGallery } from "@/components/ResultsGallery";
import { getDict } from "@/i18n/getLocale";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDict();
  return {
    title: t.results.meta.title,
    description: t.results.meta.description,
    robots: { index: false, follow: false }, // No Google image indexing
  };
}

export default async function ResultsPage() {
  const { t } = await getDict();
  return <ResultsGallery t={t} />;
}
