import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/content/types";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((lang) => ({
    url: `${SITE.url}/${lang}`,
    changeFrequency: "monthly",
    priority: lang === "uz" ? 1 : 0.9,
    alternates: { languages: { uz: `${SITE.url}/uz`, ru: `${SITE.url}/ru` } },
  }));
}
