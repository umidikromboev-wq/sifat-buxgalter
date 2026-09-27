import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ChapterView, InlineCta, Opening, StickyCta, StoryTop } from "@/components/story/Letter";
import { Beliefs, Guarantee, Next, NotFor, Signature, Stack, Trap } from "@/components/story/Offer";
import { getStory } from "@/lib/content/story";
import { isLocale } from "@/lib/content/types";
import { getContent } from "@/lib/site";

// Версия-письмо (v2) для сравнения с /[lang]. Пока Умид не выбрал — не индексируем.
export async function generateMetadata({ params }: PageProps<"/[lang]/story">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getStory(lang);
  return {
    title: meta.title,
    description: meta.description,
    robots: { index: false, follow: false },
    alternates: { canonical: `/${lang}/story` },
    openGraph: { title: meta.title, description: meta.description },
  };
}

// Порядок — по Брансону/Субу: заход-крючок → история → стена → тихая ошибка → прозрение →
// три ложных убеждения → стек → гарантия → кому не подходим → шаг → подпись и P.S.
export default async function StoryPage({ params }: PageProps<"/[lang]/story">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getStory(lang);
  const base = getContent(lang);

  return (
    <>
      <a className="skip" href="#main">
        {lang === "uz" ? "Asosiy qismga oʻtish" : "К основному содержанию"}
      </a>
      <StoryTop t={t.top} lang={lang} />
      <main id="main">
        <Opening t={t} />
        <ChapterView c={t.opening} greeting={t.greeting} />
        <ChapterView c={t.inside} />
        <Trap t={t.trap} />
        <ChapterView c={t.epiphany} />
        <InlineCta t={t.cta} />
        <Beliefs t={t.beliefs} />
        <Stack t={t.stack} />
        <Guarantee t={t.guarantee} />
        <NotFor t={t.notFor} />
        <Next t={t.next} />
        <Contact t={base.form} lang={lang} />
        <Signature sign={t.sign} ps={t.ps} />
      </main>
      <Footer t={base.footer} lang={lang} />
      <StickyCta t={t.cta} />
    </>
  );
}
