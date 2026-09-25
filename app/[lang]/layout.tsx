import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HtmlLang, Reveal } from "@/components/Reveal";
import { isLocale, LOCALES } from "@/lib/content/types";
import { getContent, SITE } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getContent(lang);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { uz: "/uz", ru: "/ru", "x-default": "/uz" },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${SITE.url}/${lang}`,
      siteName: SITE.name,
      locale: lang === "uz" ? "uz_UZ" : "ru_RU",
      type: "website",
    },
  };
}

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <>
      <HtmlLang lang={lang} />
      <Reveal />
      <noscript>
        <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
      </noscript>
      {children}
    </>
  );
}
