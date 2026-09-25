import Image from "next/image";
import type { Content } from "@/lib/content/types";
import { CLIENTS } from "@/lib/site";
import s from "./Trust.module.css";

const LOGO_BOX = 160;

export function Team({ t }: { t: Content["team"] }) {
  return (
    <section id="jamoa" className="section" aria-labelledby="tm-h">
      <div className="wrap">
        <p className="kicker">{t.kicker}</p>
        <h2 id="tm-h" className="h2">
          {t.h2}
        </h2>
        <div className={s.team}>
          {t.people.map((p) => (
            <article key={p.name} className={`${s.person} reveal`}>
              {/* Фото Иброхима и Бекзода ещё не прислали — вместо пустой рамки карточка-«удостоверение» с инициалом */}
              <span className={s.initial} aria-hidden="true">
                {p.name[0]}
              </span>
              <div>
                <p className={s.role}>{p.role}</p>
                <h3 className={s.name}>{p.name}</h3>
                <ul className={s.facts}>
                  {p.facts.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Clients({ t }: { t: Content["clients"] }) {
  return (
    <section className={`section ${s.clientsSec}`} aria-labelledby="cli-h">
      <div className="wrap">
        <div className={s.cliHead}>
          <div>
            <p className="kicker">{t.kicker}</p>
            <h2 id="cli-h" className="h2">
              {t.h2}
            </h2>
          </div>
          <p className={s.cliSub}>{t.sub}</p>
        </div>
        <ul className={s.logos}>
          {CLIENTS.map((c) => (
            <li key={c.file} className={s.logo}>
              <Image
                src={`/clients/${c.file}.webp`}
                alt={c.name}
                width={LOGO_BOX}
                height={LOGO_BOX}
                sizes="(min-width: 1024px) 160px, 30vw"
                loading="eager"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Faq({ t }: { t: Content["faq"] }) {
  return (
    <section id="savollar" className="section" aria-labelledby="faq-h">
      <div className={`wrap ${s.faqGrid}`}>
        <div>
          <p className="kicker">{t.kicker}</p>
          <h2 id="faq-h" className="h2">
            {t.h2}
          </h2>
        </div>
        <div className={s.faq}>
          {t.items.map(([q, a]) => (
            <details key={q} className={s.qa}>
              <summary className={s.q}>{q}</summary>
              <p className={s.a}>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
