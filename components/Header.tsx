import Link from "next/link";
import type { Content, Locale } from "@/lib/content/types";
import { sectionPath } from "@/lib/pages";
import { getPages } from "@/lib/pages";
import { SITE } from "@/lib/site";
import { LogoMark } from "./Logo";
import { Glyph } from "./ui/Glyph";
import s from "./Top.module.css";

// alt — адрес этой же страницы на другом языке; без него переключатель ведёт на главную.
type Props = { lang: Locale; t: Content["nav"]; alt?: string };

const PHONE = SITE.phones[0];
const PHONE_CODE = PHONE.label.slice(0, 7);
const PHONE_NUM = PHONE.label.slice(8);

export function Header({ lang, t, alt }: Props) {
  const other: Locale = lang === "uz" ? "ru" : "uz";
  const { copy } = getPages(lang);
  const links = [
    { href: sectionPath(lang, "articles"), label: copy.articles.kicker },
    { href: `/${lang}#savollar`, label: t.faq },
    { href: "#aloqa", label: t.contacts },
  ];
  const langLink = (
    <Link className={`${s.glassPill} ${s.lang}`} href={alt ?? `/${other}`} hrefLang={other} aria-label={`${t.langLabel}: ${other.toUpperCase()}`}>
      {other.toUpperCase()}
    </Link>
  );
  return (
    <div className={s.headerLine}>
      <header className={`wrap ${s.header}`}>
        <Link className={s.logo} href={`/${lang}`} aria-label="Sifat Buxgalter">
          <LogoMark className={s.logoMark} />
          <span>Sifat Buxgalter</span>
        </Link>
        <nav className={s.nav} aria-label={lang === "uz" ? "Asosiy menyu" : "Главное меню"}>
          <Link className={s.glassPill} href={sectionPath(lang, "services")}>
            <Glyph name="menu" />
            {t.servicesList}
          </Link>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <span className={s.langDesk}>{langLink}</span>
        </nav>
        <div className={s.contact}>
          <a className={s.phone} href={PHONE.href}>
            <i aria-hidden="true" />
            <span>{PHONE_CODE}</span> {PHONE_NUM}
          </a>
          <a className={s.sub} href={SITE.telegram} target="_blank" rel="noopener noreferrer">
            Telegram @Davronbekov_Bekzod
          </a>
        </div>
        <a className={s.callback} href="#ariza">
          {t.callback} <Glyph name="arrow" />
        </a>
        <div className={s.mobile}>
          {langLink}
          <details style={{ position: "relative" }}>
            <summary className={s.glassPill}>
              <Glyph name="menu" />
              {t.menu}
            </summary>
            <div className={s.mobileSheet}>
              <Link href={sectionPath(lang, "services")}>{t.servicesList}</Link>
              {links.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
              <a href={PHONE.href}>{PHONE.label}</a>
              <a href="#ariza">{t.cta}</a>
            </div>
          </details>
        </div>
      </header>
    </div>
  );
}
