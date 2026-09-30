import type { Content } from "@/lib/content/types";
import { Odometer } from "./ui/Odometer";
import { Glyph } from "./ui/Glyph";
import { SectionHead } from "./ui/Kit";
import s from "./Problem.module.css";

// Расчёт штрафа из интервью с Иброхимом — главный аргумент против «почему дорого».
export function Risk({ t }: { t: Content["risk"] }) {
  return (
    <section aria-labelledby="risk-h">
      <SectionHead id="risk-h" kicker={t.kicker} title={t.h2} lead={t.lead} />
      <div className="wrap grid12">
        <div className={`glass ${s.total} reveal`}>
          <Odometer className={`${s.totalN} num`} value={t.total} />
          <p className={s.totalL}>{t.totalLabel}</p>
        </div>
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
