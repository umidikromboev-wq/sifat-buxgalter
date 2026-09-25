import type { Content } from "@/lib/content/types";
import s from "./Pricing.module.css";

const FEATURED_INDEX = 1;
const hasAmount = (price: string) => /\d/.test(price);

export function Pricing({ t }: { t: Content["pricing"] }) {
  return (
    <section id="narxlar" className="section" aria-labelledby="pr-h">
      <div className="wrap">
        <p className="kicker">{t.kicker}</p>
        <h2 id="pr-h" className="h2">
          {t.h2}
        </h2>
        <p className="lead">{t.sub}</p>

        <div className={s.plans}>
          {t.plans.map((p, i) => {
            const isFeatured = i === FEATURED_INDEX;
            return (
              <article key={p.name} className={`${s.plan} ${isFeatured ? s.featured : ""} reveal`}>
                {isFeatured && <span className={s.badge}>{t.featured}</span>}
                <h3 className={s.name}>{p.name}</h3>
                <p className={s.for}>{p.for}</p>
                <p className={`${s.price} num`}>
                  {p.price}
                  {hasAmount(p.price) && <span className={s.per}> / {t.perMonth}</span>}
                </p>
                <ul className={s.items}>
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <a className={`btn ${isFeatured ? "btn-ink" : "btn-line"} ${s.cta}`} href="#ariza">
                  {t.cta}
                </a>
              </article>
            );
          })}
        </div>

        <div className={s.lower}>
          <div>
            <h3 className={s.onceT}>{t.onceTitle}</h3>
            <ul className={s.once}>
              {t.once.map((o) => (
                <li key={o.name} className={s.onceRow}>
                  <div>
                    <span className={s.onceN}>{o.name}</span>
                    <span className={s.onceX}>{o.text}</span>
                  </div>
                  <span className={s.dots} aria-hidden="true" />
                  <span className={`${s.onceP} num`}>{o.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className={`${s.receipt} reveal`} aria-labelledby="why-h">
            <h3 id="why-h" className={s.receiptT}>
              {t.why.h3}
            </h3>
            <dl className={s.receiptL}>
              {t.why.lines.map(([k, v]) => (
                <div key={k} className={s.receiptRow}>
                  <dt>{k}</dt>
                  <dd className="num">{v}</dd>
                </div>
              ))}
            </dl>
            <p className={s.receiptR}>{t.why.result}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function Fit({ t }: { t: Content["fit"] }) {
  return (
    <section className={`section ${s.fitSec}`} aria-labelledby="fit-h">
      <div className="wrap">
        <p className="kicker">{t.kicker}</p>
        <h2 id="fit-h" className="h2">
          {t.h2}
        </h2>
        <div className={s.fit}>
          <div>
            <h3 className={s.fitT}>{t.yesTitle}</h3>
            <ul className={s.fitL}>
              {t.yes.map((y) => (
                <li key={y} className={s.yes}>
                  {y}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={s.fitT}>{t.noTitle}</h3>
            <ul className={s.fitL}>
              {t.no.map((n) => (
                <li key={n} className={s.no}>
                  {n}
                </li>
              ))}
            </ul>
            <p className={s.fitNote}>{t.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
