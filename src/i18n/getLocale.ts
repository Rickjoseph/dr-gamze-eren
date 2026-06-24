import { cookies, headers } from "next/headers";
import { dict, type Dict, type Locale } from "./dict";

export const LOCALE_COOKIE = "locale";
export const DEFAULT_LOCALE: Locale = "en";
const SUPPORTED_LOCALES: Locale[] = ["en", "tr", "ru", "de"];

// Country code → locale mapping
// Falls back to "en" for anything not listed
const COUNTRY_TO_LOCALE: Record<string, Locale> = {
  TR: "tr",
  DE: "de",
  AT: "de",
  CH: "de",
  RU: "ru",
  UA: "ru",
  BY: "ru",
  KZ: "ru",
  GB: "en",
  US: "en",
  AU: "en",
  CA: "en",
  NL: "en",
};

// Detect locale from IP using Vercel geo headers (no external API needed)
// Vercel injects x-vercel-ip-country on all requests automatically
async function detectLocaleFromIP(): Promise<Locale> {
  try {
    const headerStore = await headers();
    const country = headerStore.get("x-vercel-ip-country") ?? "";
    if (country && COUNTRY_TO_LOCALE[country]) {
      return COUNTRY_TO_LOCALE[country];
    }
    // For any country not in the map, fall back to English
    return "en";
  } catch {
    return "en";
  }
}

// Server helper. Use in server components / layouts / route handlers.
// On first visit (no cookie): auto-detects locale from IP country.
// On return visits: honours the cookie (user preference wins).
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value as Locale | undefined;

  // If a valid cookie is already set, use it (user choice wins)
  if (value && SUPPORTED_LOCALES.includes(value)) return value;

  // No cookie → auto-detect from IP
  return detectLocaleFromIP();
}

export async function getDict(): Promise<{ locale: Locale; t: Dict }> {
  const locale = await getLocale();
  return { locale, t: dict[locale] };
}

