import { serviceSlugs, servicesBase, type Locale, type ServiceId } from "./services";

export const locales: Locale[] = ["uz", "ru"];
export const defaultLocale: Locale = "uz";

export function isLocale(x: string): x is Locale {
  return x === "uz" || x === "ru";
}

export type PageKind = "services" | "pricing" | "team" | "faq" | "contact" | "privacy" | "thanks";

export const sections: Record<Locale, Record<PageKind, string>> = {
  uz: {
    services: servicesBase.uz,
    pricing: "narxlar",
    team: "jamoa",
    faq: "savollar",
    contact: "aloqa",
    privacy: "maxfiylik",
    thanks: "rahmat",
  },
  ru: {
    services: servicesBase.ru,
    pricing: "ceny",
    team: "komanda",
    faq: "voprosy",
    contact: "kontakty",
    privacy: "politika",
    thanks: "spasibo",
  },
};

export function kindFromSection(locale: Locale, section: string): PageKind | null {
  const entry = (Object.entries(sections[locale]) as [PageKind, string][]).find(([, s]) => s === section);
  return entry ? entry[0] : null;
}

export function serviceIdFromSlug(locale: Locale, slug: string): ServiceId | null {
  const entry = (Object.entries(serviceSlugs[locale]) as [ServiceId, string][]).find(([, s]) => s === slug);
  return entry ? entry[0] : null;
}

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://sifat-buxgalter-site.vercel.app").replace(/\/$/, "");

export function homePath(locale: Locale) {
  return `/${locale}`;
}
export function sectionPath(locale: Locale, kind: PageKind) {
  return `/${locale}/${sections[locale][kind]}`;
}
export function servicePath(locale: Locale, id: ServiceId) {
  return `/${locale}/${sections[locale].services}/${serviceSlugs[locale][id]}`;
}

/** hreflang alternates for a page, given a path builder */
export function alternatesFor(build: (l: Locale) => string) {
  return {
    canonical: undefined as string | undefined,
    languages: {
      uz: siteUrl + build("uz"),
      ru: siteUrl + build("ru"),
      "x-default": siteUrl + build("uz"),
    },
  };
}
