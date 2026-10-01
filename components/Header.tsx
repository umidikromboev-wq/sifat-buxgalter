import Link from "next/link";
import type { Content, Locale } from "@/lib/content/types";
import { sectionPath, servicePath } from "@/lib/pages";
import { getPages } from "@/lib/pages";
import { SITE } from "@/lib/site";
import { LogoMark } from "./Logo";
import { Glyph } from "./ui/Glyph";
import { LangSwitch, langItems } from "./LangSwitch";
import { SiteMenu, type MenuData } from "./SiteMenu";
import { Sticky } from "./Sticky";
import m from "./Menu.module.css";
import s from "./Top.module.css";

// alt — адрес этой же страницы на другом языке; без него переключатель ведёт на главную.
type Props = { lang: Locale; t: Content["nav"]; alt?: string };

const PHONE = SITE.phones[0];
const PHONE_CODE = PHONE.label.slice(0, 7);
const PHONE_NUM = PHONE.label.slice(8);

export function Header({ lang, t, alt }: Props) {
  const { copy, services } = getPages(lang);
  const links = [
    { href: sectionPath(lang, "articles"), label: copy.articles.kicker },
    { href: `/${lang}#savollar`, label: t.faq },
    { href: "#ariza", label: t.contacts },
  ];
  const menu: MenuData = {
    label: t.menu,
    servicesTitle: t.services,
    services: Object.keys(services).map((id) => ({ href: servicePath(lang, id), label: services[id].name })),
    links: [{ href: sectionPath(lang, "services"), label: t.servicesList }, ...links],
    phone: { href: PHONE.href, label: PHONE.label },
    cta: { href: "#ariza", label: t.cta },
    langs: langItems(lang, alt),
    langLabel: t.langLabel,
  };
  const langLink = <LangSwitch items={menu.langs} label={t.langLabel} />;
  const logo = (
    <Link className={s.logo} href={`/${lang}`} aria-label="Sifat Buxgalter">
      <LogoMark className={s.logoMark} />
      <span>Sifat Buxgalter</span>
    </Link>
  );
  return (
    <div className={s.headerLine}>
      <header className={`wrap ${s.header}`}>
        {logo}
        <nav className={s.nav} aria-label={lang === "uz" ? "Asosiy menyu" : "Главное меню"}>
          <SiteMenu data={menu} align="left" />
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
          <span className={s.langMob}>{langLink}</span>
          <SiteMenu data={menu} />
        </div>
      </header>
      <Sticky>
        <div className={`wrap ${m.barIn}`}>
          {logo}
          <span className={m.onDesk}>
            <SiteMenu data={menu} align="left" />
          </span>
          <a className={`${s.phone} ${m.barPhone}`} href={PHONE.href}>
            <span>{PHONE_CODE}</span> {PHONE_NUM}
          </a>
          <a className={m.barCta} href="#ariza">
            {t.callback} <Glyph name="arrow" />
          </a>
          <span className={m.onMob}>
            <SiteMenu data={menu} />
          </span>
        </div>
      </Sticky>
    </div>
  );
}
