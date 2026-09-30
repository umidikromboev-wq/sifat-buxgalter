import type { Content } from "@/lib/content/types";
import { Glyph } from "./ui/Glyph";
import { SectionHead } from "./ui/Kit";
import s from "./Pricing.module.css";

// Кого берём и кого нет: светлая карточка «да» и тёмная «нет» — одна тёмная точка на секцию.
export function Fit({ t }: { t: Content["fit"] }) {
  return (
    <section aria-labelledby="fit-h">
      <SectionHead id="fit-h" kicker={t.kicker} title={t.h2} lead={t.note} />
      <div className="wrap grid12" data-stagger>
        <div className={`card ${s.yes}`}>
          <h3 className={s.t}>{t.yesTitle}</h3>
          <ul className={s.list}>
            {t.yes.map((y) => (
              <li key={y}>
                <span className="chip">
                  <Glyph name="check" />
                </span>
                {y}
              </li>
            ))}
          </ul>
        </div>
        <div className={`card card-dark ${s.no}`}>
          <h3 className={s.t}>{t.noTitle}</h3>
          <ul className={s.list}>
            {t.no.map((n) => (
              <li key={n}>
                <span className={s.x}>
                  <Glyph name="cross" />
                </span>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
