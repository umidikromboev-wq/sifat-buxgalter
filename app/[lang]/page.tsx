import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Clauses, Compare, Services } from "@/components/Offer";
import { Benefits } from "@/components/Benefits";
import { Fit } from "@/components/Pricing";
import { Cases } from "@/components/Cases";
import { Risk } from "@/components/Problem";
import { Price, Report, Steps } from "@/components/Process";
import { Expert, Reviews } from "@/components/People";
import { Clients, Faq } from "@/components/Trust";
import { isLocale } from "@/lib/content/types";
import { getContent, SITE } from "@/lib/site";

// Порядок блоков сверен с прототипом sifat-buxgalter.vercel.app (30.09): триггеры → риск → обязательства → услуги →
// цена (без цифр: цены на сайте не пишем, решение Умида 25.09) → сравнение → льготы → кого берём → эксперт и цифры → клиенты → видео-отзывы →
// пять шагов (вернули по просьбе Умида 30.09) → отчёт директору → вопросы → CTA.
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
          <Clauses t={t.clauses} cta={t.nav.cta} />
          <Services t={t.services} lang={lang} />
          <Price t={t.price} />
          <Compare t={t.compare} />
          <Benefits t={t.benefits} lang={lang} />
          <Fit t={t.fit} />
          <Expert t={t.expert} />
          <Clients t={t.clients} />
          <Reviews t={t.reviews} />
          <Steps t={t.steps} />
          <Report t={t.report} />
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
