import Link from "next/link";
import type { Content, Locale } from "@/lib/content/types";
import { SITE } from "@/lib/site";
import { Logo } from "./Logo";

type Props = { lang: Locale; t: Content["nav"] };

export function Header({ lang, t }: Props) {
  const other: Locale = lang === "uz" ? "ru" : "uz";
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link href={`/${lang}`} className="hdr-logo" aria-label="Sifat Buxgalter">
          <Logo />
        </Link>
        <nav aria-label={lang === "uz" ? "Asosiy menyu" : "Главное меню"} className="hdr-nav">
          <a href="#xizmatlar">{t.services}</a>
          <a href="#jamoa">{t.team}</a>
          <a href="#savollar">{t.faq}</a>
        </nav>
        <div className="hdr-act">
          <a className="hdr-phone num" href={SITE.phones[0].href}>
            {SITE.phones[0].label}
          </a>
          <Link className="hdr-lang" href={`/${other}`} hrefLang={other} aria-label={`${t.langLabel}: ${other.toUpperCase()}`}>
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
