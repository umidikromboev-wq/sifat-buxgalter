import type { Content } from "@/lib/content/types";
import s from "./Pricing.module.css";


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
