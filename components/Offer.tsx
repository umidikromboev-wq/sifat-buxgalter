import type { Content } from "@/lib/content/types";
import s from "./Offer.module.css";

export function Services({ t }: { t: Content["services"] }) {
  return (
    <section id="xizmatlar" className="section" aria-labelledby="sv-h">
      <div className="wrap">
        <p className="kicker">{t.kicker}</p>
        <h2 id="sv-h" className="h2">
          {t.h2}
        </h2>
        <p className="lead">{t.sub}</p>
        <div className={s.ledger}>
          {t.groups.map((g) => (
            <div key={g.title} className={`${s.group} reveal`}>
              <h3 className={s.groupT}>{g.title}</h3>
              <ul className={s.groupL}>
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Обязательства — как пункты договора: нумерация § здесь настоящая, это текст соглашения.
export function Clauses({ t }: { t: Content["clauses"] }) {
  return (
    <section className={`section ${s.clausesSec}`} aria-labelledby="cl-h">
      <div className="wrap">
        <div className={s.clHead}>
          <div>
            <p className="kicker">{t.kicker}</p>
            <h2 id="cl-h" className="h2">
              {t.h2}
            </h2>
          </div>
          <p className={s.clSub}>{t.sub}</p>
        </div>
        <ol className={s.clauses}>
          {t.items.map((c, i) => (
            <li key={c.title} className={`${s.clause} reveal`}>
              <span className={`${s.par} num`}>§&thinsp;{i + 1}</span>
              <div>
                <h3 className={s.clT}>{c.title}</h3>
                <p className={s.clX}>{c.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Compare({ t }: { t: Content["compare"] }) {
  return (
    <section className="section" aria-labelledby="cmp-h">
      <div className="wrap">
        <p className="kicker">{t.kicker}</p>
        <h2 id="cmp-h" className="h2">
          {t.h2}
        </h2>
        <div className={s.tableWrap} tabIndex={0} role="region" aria-labelledby="cmp-h">
          <table className={s.table}>
            <thead>
              <tr>
                <td />
                {t.cols.map((c, i) => (
                  <th key={c} scope="col" className={i === 2 ? s.us : undefined}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.rows.map(([label, a, b, c]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{a}</td>
                  <td>{b}</td>
                  <td className={s.us}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function Steps({ t }: { t: Content["steps"] }) {
  return (
    <section className={`section ${s.stepsSec}`} aria-labelledby="st-h">
      <div className="wrap">
        <p className="kicker">{t.kicker}</p>
        <h2 id="st-h" className="h2">
          {t.h2}
        </h2>
        <ol className={s.steps}>
          {t.items.map((st, i) => (
            <li key={st.title} className={`${s.step} reveal`}>
              <span className={`${s.stepN} num`}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={s.stepT}>{st.title}</h3>
              <p className={s.stepX}>{st.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
