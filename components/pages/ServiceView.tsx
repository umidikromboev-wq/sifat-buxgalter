import Link from "next/link";
import type { Locale } from "@/lib/content/types";
import { articlePath, getPages, servicePath } from "@/lib/pages";
import type { ServicePage } from "@/lib/pages/types";
import { Glyph } from "../ui/Glyph";
import { Pill, SectionHead } from "../ui/Kit";
import s from "./Pages.module.css";

type Props = { lang: Locale; id: string; page: ServicePage };

// Порядок как на главной (NMT communication): когда болит → что входит → как → обязательства → страхи (FAQ) → дальше.
export function ServiceView({ lang, id, page }: Props) {
  const { copy, services, articles } = getPages(lang);
  const others = Object.entries(services).filter(([k]) => k !== id);
  return (
    <>
      <section aria-labelledby="sv-when">
        <SectionHead id="sv-when" kicker={copy.ui.when} title={page.when.h2} />
        <div className="wrap">
          <ul className={s.ticks} data-stagger>
            {page.when.items.map((it, i) => (
              <li key={it} className="card">
                <span className="chip">
                  <Glyph name="check" />
                </span>
                <p>{it}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="sv-inc">
        <SectionHead id="sv-inc" title={page.includes.h2} />
        <div className="wrap grid12" data-stagger>
          <ul className={`card ${s.ledger}`}>
            {page.includes.items.map((it) => (
              <li key={it}>
                <Glyph name="plus" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="sv-steps">
        <SectionHead id="sv-steps" title={page.steps.h2} />
        <div className="wrap">
          <ol className={s.steps} data-stagger>
            {page.steps.items.map(([t, x], i) => (
              <li key={t} className="card">
                <span className="chip num">{i + 1}</span>
                <h3 className={s.cardT}>{t}</h3>
                <p className={s.cardX}>{x}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="sv-prom">
        <SectionHead id="sv-prom" title={page.promise.h2} />
        <div className="wrap">
          <ol data-stagger className={`${s.steps} ${s.promise}`} style={{ "--cols": page.promise.items.length + 1 } as React.CSSProperties}>
            {page.promise.items.map(([t, x], i) => (
              <li key={t} className="card">
                <span className={`num ${s.par}`}>§ {i + 1}</span>
                <h3 className={s.cardT}>{t}</h3>
                <p className={s.cardX}>{x}</p>
              </li>
            ))}
            <li className={`card card-dark ${s.ctaCard}`}>
              <p>{copy.ui.ctaText}</p>
              <Pill label={copy.ui.ctaBtn} href="#ariza" />
            </li>
          </ol>
        </div>
      </section>

      <section aria-labelledby="sv-faq">
        <SectionHead id="sv-faq" title={copy.ui.faq} />
        <div className="wrap grid12">
          <div className={s.faq} data-stagger>
            {page.faq.map(([q, a]) => (
              <details key={q} className="card">
                <summary>
                  <span>{q}</span>
                  <span className="chip">
                    <Glyph name="plus" />
                  </span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap grid12" aria-label={copy.ui.relatedArticles} data-stagger>
        <LinkCard title={copy.ui.relatedArticles} items={page.related.map((a) => [articlePath(lang, a), articles[a].name])} />
        <LinkCard title={copy.ui.relatedServices} items={others.map(([k, o]) => [servicePath(lang, k), o.name])} />
      </section>
    </>
  );
}

export function LinkCard({ title, items, wide }: { title: string; items: [string, string][]; wide?: boolean }) {
  return (
    <div className={`card ${s.linkCard}${wide ? ` ${s.linkWide}` : ""}`}>
      <h2 className={s.linkT}>{title}</h2>
      <ul>
        {items.map(([href, name]) => (
          <li key={href}>
            <Link href={href}>
              <span>{name}</span>
              <Glyph name="arrow" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
