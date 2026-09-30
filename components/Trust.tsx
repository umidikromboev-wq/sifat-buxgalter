import type { Content } from "@/lib/content/types";
import { CLIENTS } from "@/lib/site";
import { Glyph } from "./ui/Glyph";
import { SectionHead } from "./ui/Kit";
import s from "./Trust.module.css";

// Тёмные плашки: у этих логотипов свой тёмный фон, белый знак на сером читается как на референсе.
const DARK = new Set<string>(["avangard", "oq-tepa-dental"]);

// Лента логотипов: монохромные знаки на светлых плашках, медленно едут влево, края растворяются.
export function Clients({ t }: { t: Content["clients"] }) {
  const row = (hidden: boolean) =>
    CLIENTS.map((c) => (
      <li key={`${c.file}-${hidden}`} className={`${s.logo}${DARK.has(c.file) ? ` ${s.logoDark}` : ""}`} aria-hidden={hidden || undefined}>
        <img src={`/clients/mono/${c.file}.webp`} alt={c.name} width={c.w} height={c.h} loading="lazy" decoding="async" />
      </li>
    ));
  return (
    <section aria-labelledby="cli-h">
      <div className="wrap grid12">
        <h2 id="cli-h" className={`${s.label} reveal`}>
          {t.label}
        </h2>
      </div>
      <div className={`${s.marquee} reveal`}>
        <ul className={s.track}>
          {row(false)}
          {row(true)}
        </ul>
      </div>
    </section>
  );
}

export function Faq({ t }: { t: Content["faq"] }) {
  return (
    <section id="savollar" aria-labelledby="faq-h">
      <SectionHead id="faq-h" kicker={t.kicker} title={t.h2} />
      <div className="wrap grid12">
        <div className={s.faq} data-stagger>
          {t.items.map(([q, a]) => (
            <details key={q} className={`card ${s.qa}`}>
              <summary className={s.q}>
                <span>{q}</span>
                <span className="chip">
                  <Glyph name="plus" />
                </span>
              </summary>
              <p className={s.a}>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
