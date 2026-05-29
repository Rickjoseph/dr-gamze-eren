import type { Metadata } from "next";
import { getDict } from "@/i18n/getLocale";
import { ProcedureCalculator } from "@/components/ProcedureCalculator";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Procedure Price Calculator | Dr. Gamze Eren",
    description:
      "Estimate the cost of your surgery package. Combine multiple procedures and see your personalised price range instantly.",
  };
}

export default async function CalculatorPage() {
  const { t } = await getDict();
  const c = t.calculator;

  return (
    <section className="relative px-4 sm:px-8 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="headline mt-4 text-[clamp(2.2rem,5vw,4rem)]">
            {c.headlineA}{" "}
            <span className="italic-accent">{c.headlineAccent}</span>
          </h1>
          <p className="mt-6 mx-auto max-w-xl text-base sm:text-lg leading-relaxed text-[var(--color-cocoa)]">
            {c.lede}
          </p>
        </div>

        <ProcedureCalculator
          labels={{
            title: c.title,
            subtitle: c.subtitle,
            addProcedure: c.addProcedure,
            selectPlaceholder: c.selectPlaceholder,
            yourPackage: c.yourPackage,
            procedure: c.procedure,
            discount: c.discount,
            total: c.total,
            ctaLabel: c.ctaLabel,
            ctaHref: "/contact",
            disclaimer: c.disclaimer,
            remove: c.remove,
            fullPrice: c.fullPrice,
            off: c.off,
            emptyHint: c.emptyHint,
          }}
        />
      </div>
    </section>
  );
}
