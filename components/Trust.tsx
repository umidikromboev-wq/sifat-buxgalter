import Image from "next/image";
import type { Content } from "@/lib/content/types";
import { CLIENTS } from "@/lib/site";
import { Glyph } from "./ui/Glyph";
import { SectionHead } from "./ui/Kit";
import s from "./Trust.module.css";

const LOGO_BOX = 160;

// Логотипы в белых ячейках одной сетки, монохром: цвет берут только при наведении.
export function Clients({ t }: { t: Content["clients"] }) {
  return (
    <section aria-labelledby="cli-h">
      <SectionHead id="cli-h" kicker={t.kicker} title={t.h2} lead={t.sub} />
      <div className="wrap">
        <ul className={s.logos} data-stagger>
          {CLIENTS.map((c) => (
            <li key={c.file} className={`card ${s.logo}`}>
              <Image src={`/clients/${c.file}.webp`} alt={c.name} width={LOGO_BOX} height={LOGO_BOX} sizes="(min-width: 1024px) 120px, 25vw" />
            </li>
          ))}
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
