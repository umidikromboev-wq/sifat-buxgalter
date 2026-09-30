import { Geologica } from "next/font/google";
import { HtmlLang, Reveal } from "@/components/Reveal";
import { LogoMark } from "@/components/Logo";
import { SITE } from "@/lib/site";
import { CASES, CASES_HEAD, CTA_CARD, HERO, NAV, PHONE, TELEGRAM } from "./content";
import { Glyph } from "./icons";
import s from "./glass.module.css";

// Один гротеск на всю страницу: крупное тонко (300), мелкое плотнее (500–600). Кириллица есть.
const geologica = Geologica({ subsets: ["latin", "cyrillic"], weight: ["300", "400", "500", "600"], display: "swap" });

const STAGGER_MS = 80;

function CtaPill({ label, href }: { label: string; href: string }) {
  return (
    <a className={s.pill} href={href} target="_blank" rel="noopener noreferrer">
      <span>{label}</span>
      <span className={s.pillDot}><Glyph name="arrow" /></span>
    </a>
  );
}

function Header() {
  return (
    <header className={s.header}>
      <a className={s.logo} href="/" aria-label="Sifat Buxgalter, на главную">
        <LogoMark className={s.logoMark} />
        <span>Sifat Buxgalter</span>
      </a>
      <nav className={s.nav} aria-label="Основное меню">
        <a className={s.glassPill} href="/ru/uslugi"><Glyph name="menu" />Список услуг</a>
        {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
      </nav>
      <div className={s.contact}>
        <a className={s.phone} href={PHONE.href}><i aria-hidden="true" /><span>{PHONE.code}</span> {PHONE.num}</a>
        <a className={s.mail} href={TELEGRAM.href} target="_blank" rel="noopener noreferrer">Telegram {TELEGRAM.label}</a>
      </div>
      <a className={s.callback} href={TELEGRAM.href} target="_blank" rel="noopener noreferrer">перезвоните мне <Glyph name="arrow" /></a>
      <details className={s.mobileMenu}>
        <summary className={s.glassPill}><Glyph name="menu" />Меню</summary>
        <div className={s.mobileSheet}>
          <a href="/ru/uslugi">Список услуг</a>
          {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
          <a href={PHONE.href}>{PHONE.code} {PHONE.num}</a>
        </div>
      </details>
    </header>
  );
}

function Hero() {
  return (
    <section className={s.hero} aria-labelledby="hero-h">
      <img className={s.heroImg} src="/glass/hero.webp" alt="Деловой центр в Ташкенте на закате" width={1344} height={752} fetchPriority="high" />
      <Header />
      <div className={s.heroBody}>
        <div className={s.fact}>
          <span className={s.factIcon}><Glyph name="shield" /></span>
          <p className={s.factTitle}>{HERO.factTitle[0]} <br />{HERO.factTitle[1]}</p>
          <p className={s.factText}>{HERO.factText}</p>
        </div>
        <h1 id="hero-h" className={s.h1}><span>{HERO.h1Muted}</span> {HERO.h1}</h1>
        <div className={s.panel}>
          <p className={s.panelTitle}>{HERO.panelTitle}</p>
          <p className={s.panelText}>{HERO.panelText}</p>
          <CtaPill label={HERO.cta} href={TELEGRAM.href} />
        </div>
      </div>
    </section>
  );
}

function Cases() {
  return (
    <section className={s.sheet} aria-labelledby="cases-h">
      <div className={s.sectionHead}>
        <span className={s.marker} aria-hidden="true"><i /><i /><i /><i /></span>
        <div className={s.headMain}>
          <p className={s.kicker}>{CASES_HEAD.kicker}</p>
          <h2 id="cases-h" className={s.h2}>{CASES_HEAD.h2[0]}<br />{CASES_HEAD.h2[1]}</h2>
        </div>
        <p className={s.lead}>{CASES_HEAD.lead}</p>
      </div>
      <ul className={s.bento}>
        {CASES.map((c, i) => (
          <li key={c.img} className={`${s.card} ${s[c.size]} reveal`} style={{ transitionDelay: `${i * STAGGER_MS}ms` }}>
            <a href={c.href}>
              <h3 className={s.cardTitle}>{c.title}</h3>
              <Glyph name="arrow" className={s.cardArrow} />
              <span className={s.art} aria-hidden="true">
                <span className={s.rings} />
                <img src={`/glass/icon-${c.img}.webp`} alt="" width={640} height={640} loading="lazy" decoding="async" />
                <span className={s.chip}><Glyph name={c.icon} /></span>
              </span>
            </a>
          </li>
        ))}
        <li className={`${s.card} ${s.dark} reveal`} style={{ transitionDelay: `${CASES.length * STAGGER_MS}ms` }}>
          <img className={s.darkImg} src="/glass/desk.webp" alt="Рабочий стол бухгалтера вечером" width={880} height={663} loading="lazy" decoding="async" />
          <div className={s.darkBody}>
            <h3>{CTA_CARD.title}</h3>
            <p>{CTA_CARD.text}</p>
            <CtaPill label={CTA_CARD.cta} href={TELEGRAM.href} />
          </div>
        </li>
      </ul>
    </section>
  );
}

function Contacts() {
  return (
    <footer id="kontakty" className={s.foot}>
      <a className={s.logo} href="/"><LogoMark className={s.logoMark} /><span>Sifat Buxgalter</span></a>
      <div className={s.footCols}>
        {SITE.phones.map((p) => <a key={p.href} href={p.href}>{p.label}</a>)}
        <a href={TELEGRAM.href} target="_blank" rel="noopener noreferrer">Telegram {TELEGRAM.label}</a>
        <a href={SITE.map} target="_blank" rel="noopener noreferrer">Ташкент, ул. Янги Сергели, 7/2</a>
      </div>
    </footer>
  );
}

export function GlassHome() {
  return (
    <div className={`${s.page} ${geologica.className}`}>
      <HtmlLang lang="ru" />
      <Reveal />
      <main>
        <Hero />
        <Cases />
      </main>
      <Contacts />
    </div>
  );
}
