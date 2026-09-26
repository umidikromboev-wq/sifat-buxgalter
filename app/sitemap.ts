import type { MetadataRoute } from "next";
import { locales, sectionPath, servicePath, siteUrl, homePath, type PageKind } from "@/content/routes";
import { serviceOrder } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const out: MetadataRoute.Sitemap = [];
  const kinds: PageKind[] = ["services", "pricing", "team", "faq", "contact", "privacy"];
  for (const l of locales) {
    out.push({
      url: siteUrl + homePath(l),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { uz: siteUrl + homePath("uz"), ru: siteUrl + homePath("ru") } },
    });
    for (const k of kinds) {
      out.push({
        url: siteUrl + sectionPath(l, k),
        lastModified: now,
        changeFrequency: "monthly",
        priority: k === "services" || k === "pricing" ? 0.9 : k === "privacy" ? 0.2 : 0.6,
        alternates: { languages: { uz: siteUrl + sectionPath("uz", k), ru: siteUrl + sectionPath("ru", k) } },
      });
    }
    for (const id of serviceOrder) {
      out.push({
        url: siteUrl + servicePath(l, id),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages: { uz: siteUrl + servicePath("uz", id), ru: siteUrl + servicePath("ru", id) } },
      });
    }
  }
  return out;
}
