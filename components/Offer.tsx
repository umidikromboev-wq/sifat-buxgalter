import Link from "next/link";
import type { Content, Locale } from "@/lib/content/types";
import { getPages, sectionPath, servicePath } from "@/lib/pages";
import { Glyph, type GlyphName } from "./ui/Glyph";
import { Pill, SectionHead } from "./ui/Kit";
import s from "./Offer.module.css";

// Группы услуг на главной по порядку ведут на свои посадочные страницы (lib/pages).
const GROUPS: { id: string; icon: GlyphName }[] = [
  { id: "autsorsing", icon: "doc" },
  { id: "soliq", icon: "percent" },
  { id: "tekshiruv", icon: "shield" },
  { id: "kadr", icon: "users" },
  { id: "ved", icon: "globe" },
];

export function Services({ t, lang }: { t: Content["services"]; lang: Locale }) {
  const { copy } = getPages(lang);
  return (
    <section id="xizmatlar" aria-labelledby="sv-h">
      <SectionHead id="sv-h" kicker={t.kicker} title={t.h2} lead={t.sub} />
      <div className="wrap">
        <ul className={s.services}>
          {t.groups.map((g, i) => {
            const meta = GROUPS[i];
            return (
              <li key={g.title} className={`card reveal`} style={{ transitionDelay: `${i * 80}ms` }}>
                <Link className={s.svc} href={servicePath(lang, meta.id)}>
                  <span className="chip">
                    <Glyph name={meta.icon} />
                  </span>
                  <h3 className={s.svcT}>{g.title}</h3>
                  <Glyph name="arrow" className="corner" />
                  <ul className={s.svcL}>
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </Link>
              </li>
            );
          })}
          <li className={`card card-dark ${s.svcAll} reveal`}>
            <p>{copy.services.lead}</p>
            <Pill label={copy.ui.allServices} href={sectionPath(lang, "services")} />
          </li>
        </ul>
      </div>
    </section>
  );
}

// Обязательства — пункты договора, поэтому нумерация § настоящая.
export function Clauses({ t, cta }: { t: Content["clauses"]; cta: string }) {
  return (
    <section aria-labelledby="cl-h">
      <SectionHead id="cl-h" kicker={t.kicker} title={t.h2} />
      <div className="wrap">
        <ol className={s.clauses}>
          {t.items.map((c, i) => (
            <li key={c.title} className={`card ${s.clause} reveal`} style={{ transitionDelay: `${(i % 4) * 80}ms` }}>
              <span className={`chip num ${s.par}`}>§{i + 1}</span>
              <h3 className={s.clT}>{c.title}</h3>
              <p className={s.clX}>{c.text}</p>
            </li>
          ))}
          <li className={`card card-dark ${s.clause} ${s.clCta} reveal`}>
            <p className={s.clT}>{t.sub}</p>
            <Pill label={cta} href="#ariza" />
          </li>
        </ol>
      </div>
    </section>
  );
}

// Покупатель уже платит бухгалтеру — сравниваем «сейчас против нас» по его же критериям.
export function Compare({ t }: { t: Content["compare"] }) {
  const [nowLabel, usLabel] = t.cols;
  return (
    <section aria-labelledby="cmp-h">
      <SectionHead id="cmp-h" kicker={t.kicker} title={t.h2} lead={t.sub} />
      <div className="wrap">
        <div className={`card ${s.cmp}`} role="table" aria-labelledby="cmp-h">
          <div className={`${s.row} ${s.headRow}`} role="row">
            <span role="columnheader" />
            <span role="columnheader">{nowLabel}</span>
            <span role="columnheader" className={s.usH}>
              {usLabel}
            </span>
          </div>
          {t.rows.map((r) => (
            <div key={r.k} className={`${s.row} reveal`} role="row">
              <span role="rowheader" className={s.k}>
                {r.k}
              </span>
              <span role="cell" className={s.now} data-label={nowLabel}>
                <span className={s.no}>
                  <Glyph name="cross" />
                </span>
                {r.now}
              </span>
              <span role="cell" className={s.us} data-label={usLabel}>
                <span className="chip">
                  <Glyph name="check" />
                </span>
                {r.us}
              </span>
            </div>
          ))}
        </div>
        <a className={`more ${s.note}`} href="#ariza">
          {t.note} <Glyph name="arrow" />
        </a>
      </div>
    </section>
  );
}
