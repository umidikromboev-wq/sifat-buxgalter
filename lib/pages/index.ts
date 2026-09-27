import type { Locale } from "@/lib/content/types";
import { LOCALES } from "@/lib/content/types";
import type { ArticlePage, PagesBundle, PagesByLocale, ServicePage } from "./types";
import { ru } from "./ru";
import { uz } from "./uz";

const PAGES: PagesByLocale = { uz, ru };

export type Kind = "services" | "articles";

export const getPages = (lang: Locale): PagesBundle => PAGES[lang];

export const sectionPath = (lang: Locale, kind: Kind): string => `/${lang}/${PAGES[lang].copy[kind].seg}`;

export const servicePath = (lang: Locale, id: string): string =>
  `${sectionPath(lang, "services")}/${PAGES[lang].services[id].slug}`;

export const articlePath = (lang: Locale, id: string): string =>
  `${sectionPath(lang, "articles")}/${PAGES[lang].articles[id].slug}`;

export const kindBySeg = (lang: Locale, seg: string): Kind | null => {
  const { copy } = PAGES[lang];
  if (seg === copy.services.seg) return "services";
  if (seg === copy.articles.seg) return "articles";
  return null;
};

type Found = { kind: "services"; id: string; page: ServicePage } | { kind: "articles"; id: string; page: ArticlePage };

export const findBySlug = (lang: Locale, kind: Kind, slug: string): Found | null => {
  const bundle = PAGES[lang];
  if (kind === "services") {
    const hit = Object.entries(bundle.services).find(([, p]) => p.slug === slug);
    return hit ? { kind, id: hit[0], page: hit[1] } : null;
  }
  const hit = Object.entries(bundle.articles).find(([, p]) => p.slug === slug);
  return hit ? { kind, id: hit[0], page: hit[1] } : null;
};

// Все пути для generateStaticParams и sitemap.
export const allParams = () =>
  LOCALES.flatMap((lang) => {
    const b = PAGES[lang];
    return [
      ...Object.values(b.services).map((p) => ({ lang, section: b.copy.services.seg, slug: p.slug })),
      ...Object.values(b.articles).map((p) => ({ lang, section: b.copy.articles.seg, slug: p.slug })),
    ];
  });

export const sectionParams = () =>
  LOCALES.flatMap((lang) => [
    { lang, section: PAGES[lang].copy.services.seg },
    { lang, section: PAGES[lang].copy.articles.seg },
  ]);

// Языковые альтернативы: одна и та же страница на другом языке находится по id.
export const alternates = (kind: Kind, id?: string): Record<Locale, string> =>
  Object.fromEntries(
    LOCALES.map((l) => [l, id ? (kind === "services" ? servicePath(l, id) : articlePath(l, id)) : sectionPath(l, kind)]),
  ) as Record<Locale, string>;
