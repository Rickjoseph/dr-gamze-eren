import { cookies } from "next/headers";
import { dict, type Dict, type Locale } from "./dict";

export const LOCALE_COOKIE = "locale";
export const DEFAULT_LOCALE: Locale = "en";

// Server helper. Use in server components / layouts / route handlers.
// Falls back to English when no cookie is set.
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return value === "tr" ? "tr" : "en";
}

export async function getDict(): Promise<{ locale: Locale; t: Dict }> {
  const locale = await getLocale();
  return { locale, t: dict[locale] };
}
