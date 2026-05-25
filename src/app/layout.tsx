import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { GlassFilter } from "@/components/GlassFilter";
import { getDict } from "@/i18n/getLocale";

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

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDict();
  return {
    metadataBase: new URL("https://drgamzeeren.com"),
    title: {
      default: t.meta.siteTitle,
      template: "%s · Dr. Gamze Eren",
    },
    description: t.meta.siteDescription,
    openGraph: {
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { locale, t } = await getDict();
  return (
    <html lang={locale} className={`${inter.variable} ${cormorant.variable} antialiased`}>
      <body className="relative min-h-screen">
        <Script
          id="suppress-extension-errors"
          strategy="beforeInteractive"
        >{`(function(){function x(e){var s=(e&&e.reason&&(e.reason.stack||e.reason.message))||(e&&e.message)||'';var f=(e&&e.filename)||'';return /chrome-extension:\\/\\//.test(s)||/chrome-extension:\\/\\//.test(f)||/moz-extension:\\/\\//.test(s)||/moz-extension:\\/\\//.test(f)||/safari-extension:\\/\\//.test(s)||/safari-extension:\\/\\//.test(f);}window.addEventListener('error',function(e){if(x(e)){e.stopImmediatePropagation();e.preventDefault();}},true);window.addEventListener('unhandledrejection',function(e){if(x(e)){e.stopImmediatePropagation();e.preventDefault();}},true);})();`}</Script>
        <GlassFilter />
        <Nav locale={locale} t={t} />
        <main className="pt-24 sm:pt-32">{children}</main>
        <Footer t={t} />
      </body>
    </html>
  );
}
