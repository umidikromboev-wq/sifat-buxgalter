import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/content/types";
import { alternates, getPages, type Kind } from "@/lib/pages";
import { SITE } from "@/lib/site";

const abs = (path: string) => `${SITE.url}${path}`;

const langs = (alt: Record<string, string>) => ({ languages: { uz: abs(alt.uz), ru: abs(alt.ru) } });

export default function sitemap(): MetadataRoute.Sitemap {
  const home = LOCALES.map((lang) => ({
    url: abs(`/${lang}`),
    changeFrequency: "monthly" as const,
    priority: lang === "uz" ? 1 : 0.9,
    alternates: langs({ uz: "/uz", ru: "/ru" }),
  }));

  const kinds: Kind[] = ["services", "articles"];
  const hubs = kinds.flatMap((kind) =>
    LOCALES.map((lang) => ({ url: abs(alternates(kind)[lang]), changeFrequency: "monthly" as const, priority: 0.8, alternates: langs(alternates(kind)) })),
  );

  const { services, articles } = getPages("uz");
  const servicePages = Object.keys(services).flatMap((id) =>
    LOCALES.map((lang) => ({ url: abs(alternates("services", id)[lang]), changeFrequency: "monthly" as const, priority: 0.8, alternates: langs(alternates("services", id)) })),
  );
  const articlePages = Object.entries(articles).flatMap(([id, a]) =>
    LOCALES.map((lang) => ({
      url: abs(alternates("articles", id)[lang]),
      lastModified: a.published,
      changeFrequency: "yearly" as const,
      priority: 0.6,
      alternates: langs(alternates("articles", id)),
    })),
  );

  return [...home, ...hubs, ...servicePages, ...articlePages];
}
