import type { Content, Locale } from "@/lib/content/types";
import { articlePath, servicePath } from "@/lib/pages";
import { Glyph } from "./ui/Glyph";
import { Pill, SectionHead } from "./ui/Kit";
import s from "./Cases.module.css";

const STAGGER_MS = 80;

// Семь ситуаций, в которых собственник ищет бухгалтера; каждая ведёт на свою страницу.
export function Cases({ t, lang }: { t: Content["cases"]; lang: Locale }) {
  return (
    <section aria-labelledby="cases-h">
      <SectionHead id="cases-h" kicker={t.kicker} title={t.h2} lead={t.lead} />
      <div className="wrap">
        <ul className={s.bento}>
          {t.items.map((c, i) => (
            <li key={c.title} className={`card ${s.card} ${s[c.size]} reveal`} style={{ transitionDelay: `${i * STAGGER_MS}ms` }}>
              <a href={c.link.kind === "services" ? servicePath(lang, c.link.id) : articlePath(lang, c.link.id)}>
                <h3 className={s.title}>{c.title}</h3>
                <Glyph name="arrow" className="corner" />
                <span className={s.art} aria-hidden="true">
                  <span className={s.rings} />
                  <img src={`/glass/ill/${c.img}.svg`} alt="" width={600} height={400} loading="lazy" decoding="async" />
                  <span className={`chip ${s.chip}`}>
                    <Glyph name={c.icon} />
                  </span>
                </span>
              </a>
            </li>
          ))}
          <li className={`card card-dark ${s.card} ${s.dark} reveal`} style={{ transitionDelay: `${t.items.length * STAGGER_MS}ms` }}>
            <img className={s.darkImg} src="/glass/desk.webp" alt={lang === "uz" ? "Buxgalter ish stoli, kechki ofis" : "Рабочий стол бухгалтера, вечерний офис"} width={880} height={663} loading="lazy" decoding="async" />
            <div className={s.darkBody}>
              <h3>{t.cta.title}</h3>
              <p>{t.cta.text}</p>
              <Pill label={t.cta.cta} href="#ariza" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
