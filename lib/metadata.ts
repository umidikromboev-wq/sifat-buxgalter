import type { Metadata } from "next";

/** Canonical and hreflang links for an inner page, e.g. `pageAlternates("ru", "/services")`. */
export function pageAlternates(locale: string, path: string): Metadata["alternates"] {
  return {
    canonical: `/${locale}${path}`,
    languages: { ru: `/ru${path}`, uz: `/uz${path}`, "x-default": `/ru${path}` },
  };
}
