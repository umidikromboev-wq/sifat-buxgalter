import type { Locale } from "@/lib/content/types";

type Pair = readonly [string, string];

// Посадочная страница под один поисковый запрос: «аутсорсинг бухгалтерии», «разблокировка счёта» и т. п.
export type ServicePage = {
  slug: string;
  title: string; // <title>, до ~60 знаков
  description: string; // meta description, до ~160 знаков
  name: string; // короткое название для меню, хлебных крошек и карточек
  h1: string;
  lead: string;
  when: { h2: string; items: string[] };
  includes: { h2: string; items: string[] };
  steps: { h2: string; items: Pair[] };
  promise: { h2: string; items: Pair[] };
  faq: Pair[];
  related: string[]; // id статей
};

export type ArticleBlock = { h2: string; p: string[]; list?: string[]; ordered?: boolean };

export type ArticlePage = {
  slug: string;
  title: string;
  description: string;
  name: string;
  h1: string;
  lead: string;
  published: string; // ISO-дата
  minutes: number;
  body: ArticleBlock[];
  takeaway: string; // вывод-врезка в конце
  service: string; // id услуги, на которую ведёт статья
};

export type SectionCopy = {
  services: { seg: string; title: string; description: string; kicker: string; h1: string; lead: string };
  articles: { seg: string; title: string; description: string; kicker: string; h1: string; lead: string };
  ui: {
    home: string;
    when: string;
    faq: string;
    readMore: string;
    relatedArticles: string;
    relatedServices: string;
    minutes: string;
    ctaTitle: string;
    ctaText: string;
    ctaBtn: string;
    allServices: string;
    allArticles: string;
    updated: string;
  };
};

export type PagesBundle = {
  copy: SectionCopy;
  services: Record<string, ServicePage>;
  articles: Record<string, ArticlePage>;
};

export type PagesByLocale = Record<Locale, PagesBundle>;
