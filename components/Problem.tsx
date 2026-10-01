import type { Content } from "@/lib/content/types";
import { RiskCalc } from "./RiskCalc";
import { Glyph } from "./ui/Glyph";
import { SectionHead } from "./ui/Kit";
import s from "./Problem.module.css";

// Калькулятор доначислений по статьям НК: директор видит, из чего складывается сумма, а не одно число на веру.
export function Risk({ t }: { t: Content["risk"] }) {
  return (
    <section aria-labelledby="risk-h">
      <SectionHead id="risk-h" kicker={t.kicker} title={t.h2} lead={t.lead} />
      <div className={`wrap grid12 ${s.grid}`}>
        <RiskCalc t={t.calc} />
        <ol className={s.chain} data-stagger>
          {t.steps.map((st, i) => (
            <li key={st} className={`glass ${s.step}`}>
              <span className={`chip num ${s.n}`}>{i + 1}</span>
              <span>{st}</span>
            </li>
          ))}
        </ol>
        <p className={`${s.answer} reveal`}>
          <span className={s.answerIcon}>
            <Glyph name="shield" />
          </span>
          {t.answer}
        </p>
      </div>
    </section>
  );
}
