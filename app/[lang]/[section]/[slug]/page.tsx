import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { PageTop } from "@/components/PageTop";
import { ArticleView } from "@/components/pages/ArticleView";
import { ServiceView } from "@/components/pages/ServiceView";
import { isLocale, type Locale } from "@/lib/content/types";
import { allParams, alternates, findBySlug, getPages, kindBySeg } from "@/lib/pages";
import { pageMeta } from "@/lib/pages/meta";
import { articleLd, ldJson, serviceLd } from "@/lib/pages/schema";
import { getContent } from "@/lib/site";

export const dynamicParams = false;

// section задаёт соседняя page.tsx, а не layout, поэтому сюда приходит только lang — отдаём section и slug вместе.
export function generateStaticParams({ params }: { params: { lang: string } }) {
  return allParams()
    .filter((p) => p.lang === params.lang)
    .map(({ section, slug }) => ({ section, slug }));
}

const resolve = (lang: string, section: string, slug: string) => {
  if (!isLocale(lang)) return null;
  const kind = kindBySeg(lang, section);
  if (!kind) return null;
  const found = findBySlug(lang, kind, slug);
  return found ? { lang, found } : null;
};

export async function generateMetadata({ params }: PageProps<"/[lang]/[section]/[slug]">): Promise<Metadata> {
  const { lang, section, slug } = await params;
  const r = resolve(lang, section, slug);
  if (!r) return {};
  const { found } = r;
  return pageMeta(
    r.lang,
    found.page.title,
    found.page.description,
    alternates(found.kind, found.id),
    found.kind === "articles" ? "article" : "website",
  );
}

const formatDate = (iso: string, lang: Locale) =>
  new Intl.DateTimeFormat(lang === "uz" ? "uz-Latn-UZ" : "ru-RU", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));

export default async function DetailPage({ params }: PageProps<"/[lang]/[section]/[slug]">) {
  const { lang: rawLang, section, slug } = await params;
  const r = resolve(rawLang, section, slug);
  if (!r) notFound();
  const { lang, found } = r;
  const t = getContent(lang);
  const { copy } = getPages(lang);
  const alt = alternates(found.kind, found.id);
  const hub = alternates(found.kind);
  const other: Locale = lang === "uz" ? "ru" : "uz";
  const crumbs = [
    { name: copy.ui.home, href: `/${lang}` },
    { name: copy[found.kind].kicker, href: hub[lang] },
    { name: found.page.name, href: alt[lang] },
  ];
  const ld =
    found.kind === "services"
      ? serviceLd(lang, found.page, alt[lang], t.footer, crumbs)
      : articleLd(lang, found.page, alt[lang], t.footer, crumbs);

  return (
    <>
      <a className="skip" href="#main">
        {lang === "uz" ? "Asosiy qismga oʻtish" : "К основному содержанию"}
      </a>
      <main id="main">
        <PageTop
          lang={lang}
          nav={t.nav}
          alt={alt[other]}
          crumbs={crumbs}
          kicker={copy[found.kind].kicker}
          h1={found.page.h1}
          lead={found.page.lead}
          img={found.kind === "services" ? "hero" : "desk"}
          {...(found.kind === "services"
            ? { panel: { title: copy.ui.ctaTitle, text: copy.ui.ctaText, cta: copy.ui.ctaBtn } }
            : {
                meta: (
                  <>
                    {copy.ui.updated} <time dateTime={found.page.published}>{formatDate(found.page.published, lang)}</time> · {found.page.minutes}{" "}
                    {copy.ui.minutes}
                  </>
                ),
              })}
        />
        <div className="sheet stack">
          {found.kind === "services" ? (
            <ServiceView lang={lang} id={found.id} page={found.page} />
          ) : (
            <ArticleView lang={lang} id={found.id} page={found.page} />
          )}
        </div>
        <div className="sheet sheet-dark">
          <Contact t={t.form} lang={lang} />
        </div>
      </main>
      <Footer t={t.footer} lang={lang} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(ld) }} />
    </>
  );
}
