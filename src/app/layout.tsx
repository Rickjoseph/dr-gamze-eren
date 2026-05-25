import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { GlassFilter } from "@/components/GlassFilter";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drgamzeeren.com"),
  title: {
    default: "Dr. Gamze Eren — Aesthetic & Reconstructive Surgery, Istanbul",
    template: "%s · Dr. Gamze Eren",
  },
  description:
    "Board-certified plastic surgery in Istanbul. Surgical precision meets artistic vision — natural, confident results in a private Caddebostan clinic.",
  openGraph: {
    title: "Dr. Gamze Eren — Aesthetic Surgery, Istanbul",
    description:
      "Confidence is beautiful. Surgical precision, artistic vision, results that look unmistakably yours.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} antialiased`}>
      <body className="relative min-h-screen">
        {/* Swallow errors thrown by browser extensions (wallets, etc.) so
            they don't trigger Next.js's dev error overlay. Real app
            errors still surface — we only filter events whose stack /
            filename points to a chrome-extension://, moz-extension:// or
            safari-extension:// URL. Uses next/script with beforeInteractive
            so the listeners attach before extension code typically runs. */}
        <Script
          id="suppress-extension-errors"
          strategy="beforeInteractive"
        >{`(function(){function x(e){var s=(e&&e.reason&&(e.reason.stack||e.reason.message))||(e&&e.message)||'';var f=(e&&e.filename)||'';return /chrome-extension:\\/\\//.test(s)||/chrome-extension:\\/\\//.test(f)||/moz-extension:\\/\\//.test(s)||/moz-extension:\\/\\//.test(f)||/safari-extension:\\/\\//.test(s)||/safari-extension:\\/\\//.test(f);}window.addEventListener('error',function(e){if(x(e)){e.stopImmediatePropagation();e.preventDefault();}},true);window.addEventListener('unhandledrejection',function(e){if(x(e)){e.stopImmediatePropagation();e.preventDefault();}},true);})();`}</Script>
        <GlassFilter />
        <Nav />
        <main className="pt-24 sm:pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
