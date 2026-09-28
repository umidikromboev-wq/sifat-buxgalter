import { defineRouting } from "next-intl/routing";

export const locales = ["ru", "uz"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  // Russian first: the brief's own vocabulary (экспресс-аудит, отчёт для
  // директора) is Russian, and it is the working language of most owners we
  // talk to. Visitors whose browser asks for Uzbek still land on /uz.
  defaultLocale: "ru",
  // Always prefix so the URL is the source of truth; the cookie only decides
  // where a visitor without a prefix lands.
  localePrefix: "always",
  localeCookie: {
    name: "NEXT_LOCALE",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  },
});
