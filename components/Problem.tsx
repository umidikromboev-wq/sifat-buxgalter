import type { Content } from "@/lib/content/types";
import s from "./Problem.module.css";

export function Triggers({ t }: { t: Content["triggers"] }) {
  return (
    <section className={`section ${s.triggers}`} aria-labelledby="tr-h">
      <div className={`wrap ${s.split}`}>
        <div className={s.side}>
          <p className="kicker">{t.kicker}</p>
          <h2 id="tr-h" className="h2">
            {t.h2}
          </h2>
        </div>
        <div>
          <ul className={s.list}>
            {t.items.map((it) => (
              <li key={it} className={`${s.item} reveal`}>
                {it}
              </li>
            ))}
          </ul>
          <p className={`${s.after} reveal`}>{t.lead}</p>
        </div>
      </div>
    </section>
  );
}

// Расчёт штрафа из интервью с Иброхимом — главный аргумент против «почему дорого».
export function Risk({ t }: { t: Content["risk"] }) {
  return (
    <section className={`section ${s.risk}`} aria-labelledby="risk-h">
      <div className="wrap">
        <p className={`kicker ${s.kickerDark}`}>{t.kicker}</p>
        <h2 id="risk-h" className={`h2 ${s.riskH}`}>
          {t.h2}
        </h2>
        <p className={s.riskLead}>{t.lead}</p>
        <ol className={s.chain}>
          {t.steps.map((st, i) => (
            <li key={st} className={`${s.link} reveal`}>
              <span className={`${s.linkN} num`}>{i + 1}</span>
              <span>{st}</span>
            </li>
          ))}
        </ol>
        <div className={`${s.total} reveal`}>
          <p className={`${s.totalN} num`}>{t.total}</p>
          <p className={s.totalL}>{t.totalLabel}</p>
        </div>
        <p className={`${s.answer} reveal`}>{t.answer}</p>
      </div>
    </section>
  );
}
