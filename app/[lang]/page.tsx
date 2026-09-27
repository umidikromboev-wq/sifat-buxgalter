import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Clauses, Compare, Services } from "@/components/Offer";
import { Benefits } from "@/components/Benefits";
import { Fit } from "@/components/Pricing";
import { Risk, Triggers } from "@/components/Problem";
import { Clients, Faq } from "@/components/Trust";
import { isLocale } from "@/lib/content/types";
import { getContent, SITE } from "@/lib/site";

// Порядок блоков — по канону NMT communication §8:
// one-liner → контекст/триггер → проблема текущего решения → Jobs → ценность в критериях → сравнение → страхи (этапы убраны по решению Умида 25.09) (цены на сайте не пишем — решение Умида 25.09) → CTA.
export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getContent(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: SITE.name,
    url: `${SITE.url}/${lang}`,
    description: t.meta.description,
    telephone: SITE.phones.map((p) => p.label),
    address: {
      "@type": "PostalAddress",
      streetAddress: t.footer.address,
      addressLocality: "Tashkent",
      addressCountry: "UZ",
    },
    areaServed: "Tashkent",
    sameAs: [SITE.instagram, SITE.telegram],
  };

  return (
    <>
      <a className="skip" href="#main">
        {lang === "uz" ? "Asosiy qismga oʻtish" : "К основному содержанию"}
      </a>
      <Header lang={lang} t={t.nav} />
      <main id="main">
        <Hero t={t.hero} />
        <Triggers t={t.triggers} />
        <Risk t={t.risk} />
        <Services t={t.services} lang={lang} />
        <Clauses t={t.clauses} />
        <Compare t={t.compare} />
        <Benefits t={t.benefits} />
        <Fit t={t.fit} />
        <Clients t={t.clients} />
        <Faq t={t.faq} />
        <Contact t={t.form} lang={lang} />
      </main>
      <Footer t={t.footer} lang={lang} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
