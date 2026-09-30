import type { CSSProperties } from "react";
import type { Content } from "@/lib/content/types";
import { Glyph } from "./ui/Glyph";
import { Pill, SectionHead } from "./ui/Kit";
import s from "./Process.module.css";

// Цена без цифр: четыре ответа на «почему так» и одна пилюля на звонок.
export function Price({ t }: { t: Content["price"] }) {
  return (
    <section aria-labelledby="price-h">
      <SectionHead id="price-h" kicker={t.kicker} title={t.h2} lead={t.sub} />
      <div className="wrap grid12">
        <ul className={s.price} data-stagger>
          {t.items.map((it, i) => (
            <li key={it.title} className={`card ${s.priceCard}`}>
              <span className={s.priceNo}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={s.cardTitle}>{it.title}</h3>
              <p className={s.cardText}>{it.text}</p>
            </li>
          ))}
        </ul>
        <div className={`${s.priceCta} reveal`}>
          <Pill label={t.cta} href="#ariza" ink />
        </div>
      </div>
    </section>
  );
}

// Пять шагов на одной линии: точка на линии, крупный бежевый номер, заголовок, пояснение.
export function Steps({ t }: { t: Content["steps"] }) {
  return (
    <section aria-labelledby="steps-h">
      <SectionHead id="steps-h" title={t.h2} lead={t.lead} />
      <div className="wrap">
        <ol className={s.steps} data-stagger>
          {t.items.map((it, i) => (
            <li key={it.title} className={s.step}>
              <span className={s.stepNo} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={s.stepTitle}>{it.title}</h3>
              <p className={s.stepText}>{it.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// Образец ежемесячного отчёта: лист документа, строки «что → статус», подпись главбуха.
export function Report({ t }: { t: Content["report"] }) {
  return (
    <section aria-labelledby="report-h">
      <SectionHead id="report-h" kicker={t.kicker} title={t.h2} lead={t.lead} />
      <div className="wrap grid12">
        <article className={`card ${s.report} reveal`} aria-label={`${t.title}, ${t.badge}`}>
          <header className={s.reportHead}>
            <div>
              <p className={s.reportTitle}>{t.title}</p>
              <p className={s.reportMonth}>{t.month}</p>
            </div>
            <span className={s.badge}>{t.badge}</span>
          </header>
          <dl className={s.rows}>
            {t.rows.map(([k, v], i) => (
              <div key={k} className={s.row} style={{ "--i": i } as CSSProperties}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <footer className={s.reportFoot}>
            <span className="chip">
              <Glyph name="check" />
            </span>
            {t.footer}
          </footer>
        </article>
      </div>
    </section>
  );
}
