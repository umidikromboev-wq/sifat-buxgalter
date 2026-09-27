import Link from "next/link";
import type { Content, Locale } from "@/lib/content/types";
import { getPages, sectionPath } from "@/lib/pages";
import { SITE } from "@/lib/site";
import { Logo } from "./Logo";

// alt — адрес этой же страницы на другом языке; без него переключатель ведёт на главную.
type Props = { lang: Locale; t: Content["nav"]; alt?: string };

export function Header({ lang, t, alt }: Props) {
  const other: Locale = lang === "uz" ? "ru" : "uz";
  const { copy } = getPages(lang);
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link href={`/${lang}`} className="hdr-logo" aria-label="Sifat Buxgalter">
          <Logo />
        </Link>
        <nav aria-label={lang === "uz" ? "Asosiy menyu" : "Главное меню"} className="hdr-nav">
          <Link href={sectionPath(lang, "services")}>{t.services}</Link>
          <Link href={sectionPath(lang, "articles")}>{copy.articles.kicker}</Link>
          <Link href={`/${lang}#savollar`}>{t.faq}</Link>
        </nav>
        <div className="hdr-act">
          <a className="hdr-phone num" href={SITE.phones[0].href}>
            {SITE.phones[0].label}
          </a>
          <Link className="hdr-lang" href={alt ?? `/${other}`} hrefLang={other} aria-label={`${t.langLabel}: ${other.toUpperCase()}`}>
            {other === "ru" ? "RU" : "UZ"}
          </Link>
          <a className="btn btn-ink hdr-cta" href="#ariza">
            {t.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
