import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { GlassFilter } from "@/components/GlassFilter";
import { getDict } from "@/i18n/getLocale";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { whatsappContent } from "@/content/whatsapp";
import { CookieConsent } from "@/components/CookieConsent";
import { ExtensionErrorFilter } from "@/components/ExtensionErrorFilter";


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

// Prevent iOS auto-zoom when dynamic content appears
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

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
    <html lang={locale} data-scroll-behavior="smooth" className={`${inter.variable} ${cormorant.variable} antialiased`}>
      <body className="relative min-h-screen">
        <ExtensionErrorFilter />
        <GlassFilter />
        <Nav locale={locale} t={t} />
        <main className="pt-24 sm:pt-32">{children}</main>
        <Footer t={t} />
        <WhatsAppWidget t={whatsappContent[locale]} locale={locale} />
        <CookieConsent t={t} />
      </body>
    </html>
  );
}
