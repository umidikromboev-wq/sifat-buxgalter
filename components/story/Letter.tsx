import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import type { Locale } from "@/lib/content/types";
import type { Block, Chapter, Story } from "@/lib/content/story/types";
import { SITE } from "@/lib/site";
import { Rich } from "./Rich";
import s from "./Story.module.css";

export function StoryTop({ t, lang }: { t: Story["top"]; lang: Locale }) {
  const other = lang === "uz" ? "ru" : "uz";
  return (
    <header className={s.top}>
      <div className={s.topIn}>
        <span className={s.brand}>
          <LogoMark className={s.brandMark} />
          <span>Sifat Buxgalter</span>
        </span>
        <nav className={s.topNav} aria-label={lang === "uz" ? "Aloqa" : "Контакты"}>
          <a className={`${s.topPhone} num`} href={SITE.phones[0].href}>
            {SITE.phones[0].label}
          </a>
          <Link className={s.lang} href={`/${other}/story`} hrefLang={other} lang={other}>
            {t.switchTo}
          </Link>
          <a className={`btn btn-ink ${s.topCta}`} href="#ariza">
            {t.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Opening({ t }: { t: Story }) {
  return (
    <section className={s.hero} aria-labelledby="story-h">
      <div className={s.col}>
        <p className={s.callout}>{t.callout}</p>
        <h1 id="story-h" className={s.h1}>
          {t.h1}
        </h1>
        <p className={s.sub}>
          <Rich text={t.sub} />
        </p>
        <div className={s.byline}>
          <span className={s.mono} aria-hidden="true">
            {t.byline.name.charAt(0)}
          </span>
          <span>
            <b>{t.byline.name}</b>
            <span className={s.bylineRole}>{t.byline.role}</span>
          </span>
          <span className={s.read}>{t.readTime}</span>
        </div>
      </div>
    </section>
  );
}

export function ChapterView({ c, greeting }: { c: Chapter; greeting?: string }) {
  return (
    <section className={s.chapter} aria-labelledby={`${c.id}-h`}>
      <div className={s.col}>
        {greeting && <p className={s.greeting}>{greeting}</p>}
        <ChapterHead num={c.num} id={`${c.id}-h`} title={c.title} />
        <div className={s.body}>
          {c.blocks.map((b, i) => (
            <BlockView key={i} b={b} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ChapterHead({ num, id, title, onDark }: { num: string; id: string; title: string; onDark?: boolean }) {
  return (
    <div className={`${s.head} reveal`}>
      <span className={`${s.num} ${onDark ? s.numDark : ""}`} aria-hidden="true">
        {num}
      </span>
      <h2 id={id} className={s.h2}>
        {title}
      </h2>
    </div>
  );
}

function BlockView({ b }: { b: Block }) {
  if ("quote" in b) {
    return (
      <blockquote className={s.quote}>
        <p>«{b.quote}»</p>
      </blockquote>
    );
  }
  if ("list" in b) {
    return (
      <ul className={s.list}>
        {b.list.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
    );
  }
  return (
    <p>
      <Rich text={b.p} />
    </p>
  );
}

export function InlineCta({ t }: { t: Story["cta"] }) {
  return (
    <div className={s.col}>
      <div className={`${s.inlineCta} reveal`}>
        <a className="btn btn-ink" href="#ariza">
          {t.label}
        </a>
        <span className={s.ctaNote}>{t.note}</span>
      </div>
    </div>
  );
}

export function StickyCta({ t }: { t: Story["cta"] }) {
  return (
    <>
      <div className={s.stickySpace} aria-hidden="true" />
      <div className={s.sticky}>
        <a className={`btn btn-gold ${s.stickyBtn}`} href="#ariza">
          {t.label}
        </a>
      </div>
    </>
  );
}
