import type { Content } from "@/lib/content/types";
import { SITE } from "@/lib/site";
import s from "./Hero.module.css";

// Первый экран показывает State B — месяц, в котором всё сдано и требований ноль, а не «процесс работы».
export function Hero({ t }: { t: Content["hero"] }) {
  return (
    <section className={s.hero} aria-labelledby="hero-h">
      <div className={`wrap ${s.grid}`}>
        <div className={s.copy}>
          <p className="kicker">{t.kicker}</p>
          <h1 id="hero-h" className={s.h1}>
            {t.h1}
          </h1>
          <p className={s.sub}>{t.sub}</p>
          <div className={s.ctas}>
            <a className="btn btn-ink" href="#ariza">
              {t.cta}
            </a>
            <a className="btn btn-line" href={SITE.telegram} target="_blank" rel="noopener noreferrer">
              {t.ctaAlt}
            </a>
          </div>
          <p className={s.note}>{t.note}</p>
        </div>
        <Sheet t={t.sheet} />
      </div>
      <div className="wrap">
        <dl className={s.facts}>
          {t.facts.map(([k, v]) => (
            <div key={v} className={s.fact}>
              <dt className={`${s.factK} num`}>{k}</dt>
              <dd className={s.factV}>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Sheet({ t }: { t: Content["hero"]["sheet"] }) {
  return (
    <figure className={s.sheet} aria-label={`${t.tag}: ${t.title}`}>
      <div className={s.sheetTop}>
        <span className={s.sheetTitle}>{t.title}</span>
        <span className={s.tag}>{t.tag}</span>
      </div>
      <ul className={s.rows}>
        {t.rows.map(([label, status], i) => (
          <li key={label} className={s.row} style={{ "--i": i } as React.CSSProperties}>
            <span>{label}</span>
            <span className={s.dots} aria-hidden="true" />
            <span className={s.status}>
              <Check />
              {status}
            </span>
          </li>
        ))}
      </ul>
      <dl className={s.sheetFoot}>
        {t.foot.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd className="num">{v}</dd>
          </div>
        ))}
      </dl>
      <Stamp text={t.stamp} />
    </figure>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 16 16" className={s.check} aria-hidden="true">
      <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Печать — знак «проверено»: фирменное золото работает там, где у бухгалтерии оно и живёт.
function Stamp({ text }: { text: string }) {
  return (
    <svg className={s.stamp} viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <path id="stamp-ring" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
      </defs>
      <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="100" cy="100" r="56" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text fontSize="15" fontWeight="700" letterSpacing="3.2" fill="currentColor">
        <textPath href="#stamp-ring">{text + text}</textPath>
      </text>
      <g transform="translate(76 76) scale(0.42)" fill="currentColor">
        <polygon points="25,2 82,2 77,54 13,54" />
        <polygon points="84,26 112,26 106,54 77,54" />
        <polygon points="8,65 38,65 32,95 2,95" />
        <polygon points="48,65 101,65 90,118 34,118" />
      </g>
    </svg>
  );
}
