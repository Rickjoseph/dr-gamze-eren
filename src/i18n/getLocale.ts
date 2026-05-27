import { cookies } from "next/headers";
import { dict, type Dict, type Locale } from "./dict";

export const LOCALE_COOKIE = "locale";
export const DEFAULT_LOCALE: Locale = "en";

// Server helper. Use in server components / layouts / route handlers.
// Falls back to English when no cookie is set, or when the cookie value
// isn't one of the supported locales.
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  if (value === "tr" || value === "ru") return value;
  return "en";
}

export async function getDict(): Promise<{ locale: Locale; t: Dict }> {
  const locale = await getLocale();
  return { locale, t: dict[locale] };
}
