import type { Crumb } from "@/components/pages/Crumbs";
import type { Content, Locale } from "@/lib/content/types";
import { SITE } from "@/lib/site";
import type { ArticlePage, ServicePage } from "./types";

// JSON-LD для поисковиков. Только то, что видно на странице: FAQ из блока вопросов, автор — организация.
const abs = (path: string) => `${SITE.url}${path}`;

const provider = (lang: Locale, footer: Content["footer"]) => ({
  "@type": "AccountingService",
  name: SITE.name,
  url: abs(`/${lang}`),
  telephone: SITE.phones.map((p) => p.label),
  address: {
    "@type": "PostalAddress",
    streetAddress: footer.address,
    addressLocality: "Tashkent",
    addressCountry: "UZ",
  },
});

export const breadcrumbLd = (items: Crumb[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: abs(c.href) })),
});

export const serviceLd = (lang: Locale, page: ServicePage, path: string, footer: Content["footer"], crumbs: Crumb[]) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: page.h1,
      serviceType: page.name,
      description: page.description,
      url: abs(path),
      areaServed: { "@type": "City", name: "Tashkent" },
      inLanguage: lang,
      provider: provider(lang, footer),
    },
    {
      "@type": "FAQPage",
      mainEntity: page.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
    breadcrumbLd(crumbs),
  ],
});

export const articleLd = (lang: Locale, page: ArticlePage, path: string, footer: Content["footer"], crumbs: Crumb[]) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: page.h1,
      description: page.description,
      inLanguage: lang,
      datePublished: page.published,
      dateModified: page.published,
      mainEntityOfPage: abs(path),
      author: { "@type": "Organization", name: SITE.name, url: abs(`/${lang}`) },
      publisher: provider(lang, footer),
    },
    breadcrumbLd(crumbs),
  ],
});

// JSON в <script>: экранируем «<», чтобы строка из контента не закрыла тег.
export const ldJson = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");
