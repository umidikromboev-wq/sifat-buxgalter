import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HubView } from "@/components/pages/HubView";
import { isLocale, type Locale } from "@/lib/content/types";
import { alternates, getPages, kindBySeg, sectionParams, type Kind } from "@/lib/pages";
import { pageMeta } from "@/lib/pages/meta";
import { breadcrumbLd, ldJson } from "@/lib/pages/schema";
import { getContent } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams({ params }: { params: { lang: string } }) {
  return sectionParams()
    .filter((p) => p.lang === params.lang)
    .map(({ section }) => ({ section }));
}

const resolve = (lang: string, section: string): { lang: Locale; kind: Kind } | null => {
  if (!isLocale(lang)) return null;
  const kind = kindBySeg(lang, section);
  return kind ? { lang, kind } : null;
};

export async function generateMetadata({ params }: PageProps<"/[lang]/[section]">): Promise<Metadata> {
  const { lang, section } = await params;
  const r = resolve(lang, section);
  if (!r) return {};
  const head = getPages(r.lang).copy[r.kind];
  return pageMeta(r.lang, head.title, head.description, alternates(r.kind));
}

export default async function SectionPage({ params }: PageProps<"/[lang]/[section]">) {
  const { lang: rawLang, section } = await params;
  const r = resolve(rawLang, section);
  if (!r) notFound();
  const { lang, kind } = r;
  const t = getContent(lang);
  const { copy } = getPages(lang);
  const alt = alternates(kind);
  const crumbs = [
    { name: copy.ui.home, href: `/${lang}` },
    { name: copy[kind].kicker, href: alt[lang] },
  ];
  const other: Locale = lang === "uz" ? "ru" : "uz";

  return (
    <>
      <a className="skip" href="#main">
        {lang === "uz" ? "Asosiy qismga oʻtish" : "К основному содержанию"}
      </a>
      <Header lang={lang} t={t.nav} alt={alt[other]} />
      <main id="main">
        <HubView lang={lang} kind={kind} crumbs={crumbs} />
        <Contact t={t.form} lang={lang} />
      </main>
      <Footer t={t.footer} lang={lang} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJson({ "@context": "https://schema.org", ...breadcrumbLd(crumbs) }) }}
      />
    </>
  );
}
