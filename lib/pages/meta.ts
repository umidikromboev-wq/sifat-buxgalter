import type { Metadata } from "next";
import type { Locale } from "@/lib/content/types";
import { SITE } from "@/lib/site";

// canonical + hreflang на пару uz/ru одной и той же страницы; x-default — узбекская версия.
export const pageMeta = (
  lang: Locale,
  title: string,
  description: string,
  alt: Record<Locale, string>,
  type: "website" | "article" = "website",
): Metadata => ({
  title: `${title} | ${SITE.name}`,
  description,
  alternates: {
    canonical: alt[lang],
    languages: { uz: alt.uz, ru: alt.ru, "x-default": alt.uz },
  },
  openGraph: {
    title,
    description,
    url: `${SITE.url}${alt[lang]}`,
    siteName: SITE.name,
    locale: lang === "uz" ? "uz_UZ" : "ru_RU",
    type,
  },
});
