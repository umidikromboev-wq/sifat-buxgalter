import type { Content } from "@/lib/content/types";
import { Header } from "./Header";
import type { Locale } from "@/lib/content/types";
import { Glyph } from "./ui/Glyph";
import { Pill } from "./ui/Kit";
import { Letters, letterCount } from "./ui/Letters";
import s from "./Top.module.css";

type Props = { lang: Locale; t: Content["hero"]; nav: Content["nav"] };

// Кадр показывает мир клиента: деловой центр, где сидят его офисы. Текст лежит на тёмном низе кадра.
export function Hero({ lang, t, nav }: Props) {
  return (
    <section className={`${s.top} ${s.home}`} aria-labelledby="hero-h">
      <img
        className={s.img}
        src="/glass/hero.webp"
        alt={lang === "uz" ? "Toshkentdagi biznes-markaz, quyosh botishi" : "Деловой центр в Ташкенте на закате"}
        width={1344}
        height={752}
        fetchPriority="high"
      />
      <Header lang={lang} t={nav} />
      <div className={`wrap grid12 ${s.body}`}>
        <div className={s.fact}>
          <span className={s.factIcon}>
            <Glyph name="shield" />
          </span>
          <p className={s.factTitle}>
            {t.factTitle[0]} <br />
            {t.factTitle[1]}
          </p>
          <p className={s.factText}>{t.factText}</p>
        </div>
        <div className={s.main}>
          <h1 id="hero-h" className={s.h1} aria-label={`${t.h1Muted} ${t.h1}`}>
            <Letters text={t.h1Muted} className={s.h1m} /> <Letters text={t.h1} from={letterCount(t.h1Muted)} />
          </h1>
        </div>
        <div className={`glass ${s.panel}`}>
          <p className={s.panelTitle}>{t.panelTitle}</p>
          <p className={s.panelText}>{t.panelText}</p>
          <Pill label={t.cta} href="#ariza" />
        </div>
      </div>
    </section>
  );
}
