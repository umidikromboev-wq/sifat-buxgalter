import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Clauses, Compare, Services } from "@/components/Offer";
import { Benefits } from "@/components/Benefits";
import { Fit } from "@/components/Pricing";
import { Cases } from "@/components/Cases";
import { Risk } from "@/components/Problem";
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
      <main id="main">
        <Hero lang={lang} t={t.hero} nav={t.nav} />
        <div className="sheet">
          <Cases lang={lang} t={t.cases} />
        </div>
        <div className="sheet sheet-dark">
          <Risk t={t.risk} />
        </div>
        <div className="sheet stack">
          <Services t={t.services} lang={lang} />
          <Clauses t={t.clauses} cta={t.nav.cta} />
          <Compare t={t.compare} />
          <Benefits t={t.benefits} lang={lang} />
          <Fit t={t.fit} />
          <Clients t={t.clients} />
          <Faq t={t.faq} />
        </div>
        <div className="sheet sheet-dark">
          <Contact t={t.form} lang={lang} />
        </div>
      </main>
      <Footer t={t.footer} lang={lang} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
