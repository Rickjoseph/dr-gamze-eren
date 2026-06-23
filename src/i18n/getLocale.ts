import { cookies } from "next/headers";
import { dict, type Dict, type Locale } from "./dict";

export const LOCALE_COOKIE = "locale";
export const DEFAULT_LOCALE: Locale = "en";
const SUPPORTED_LOCALES: Locale[] = ["en", "tr", "ru", "de"];

// Server helper. Use in server components / layouts / route handlers.
// Falls back to English when no cookie is set, or when the cookie value
// isn't one of the supported locales.
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value as Locale | undefined;
  if (value && SUPPORTED_LOCALES.includes(value)) return value;
  return "en";
}

export async function getDict(): Promise<{ locale: Locale; t: Dict }> {
  const locale = await getLocale();
  return { locale, t: dict[locale] };
}
