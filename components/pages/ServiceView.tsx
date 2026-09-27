import Link from "next/link";
import type { Locale } from "@/lib/content/types";
import { articlePath, getPages, servicePath } from "@/lib/pages";
import type { ServicePage } from "@/lib/pages/types";
import { Crumbs, type Crumb } from "./Crumbs";
import s from "./Pages.module.css";

type Props = { lang: Locale; id: string; page: ServicePage; crumbs: Crumb[] };

// Порядок как на главной (NMT communication): задача → когда болит → что входит → как → обязательства → страхи (FAQ) → CTA.
export function ServiceView({ lang, id, page, crumbs }: Props) {
  const { copy, services, articles } = getPages(lang);
  const others = Object.entries(services).filter(([k]) => k !== id);
  return (
    <>
      <section className={s.head}>
        <div className="wrap">
          <Crumbs items={crumbs} label={copy.ui.home} />
          <p className="kicker">{copy.services.kicker}</p>
          <h1 className={s.h1}>{page.h1}</h1>
          <p className={s.lead}>{page.lead}</p>
          <a className="btn btn-ink" href="#ariza">
            {copy.ui.ctaTitle}
          </a>
        </div>
      </section>

      <section className={s.block} aria-labelledby="sv-when">
        <div className={`wrap ${s.split}`}>
          <h2 id="sv-when" className={s.h2}>
            {page.when.h2}
          </h2>
          <ul className={s.ticks}>
            {page.when.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${s.block} ${s.tint}`} aria-labelledby="sv-inc">
        <div className={`wrap ${s.split}`}>
          <h2 id="sv-inc" className={s.h2}>
            {page.includes.h2}
          </h2>
          <ul className={s.ledger}>
            {page.includes.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={s.block} aria-labelledby="sv-steps">
        <div className="wrap">
          <h2 id="sv-steps" className={s.h2}>
            {page.steps.h2}
          </h2>
          <ol className={s.steps}>
            {page.steps.items.map(([t, x], i) => (
              <li key={t}>
                <span className={`${s.stepN} num`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={s.h3}>{t}</h3>
                <p>{x}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${s.block} ${s.tint}`} aria-labelledby="sv-prom">
        <div className="wrap">
          <h2 id="sv-prom" className={s.h2}>
            {page.promise.h2}
          </h2>
          <ol className={s.clauses}>
            {page.promise.items.map(([t, x], i) => (
              <li key={t}>
                <span className={`${s.par} num`}>§&thinsp;{i + 1}</span>
                <div>
                  <h3 className={s.h3}>{t}</h3>
                  <p>{x}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={s.block} aria-labelledby="sv-faq">
        <div className={`wrap ${s.split}`}>
          <h2 id="sv-faq" className={s.h2}>
            {copy.ui.faq}
          </h2>
          <div className={s.faq}>
            {page.faq.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={`${s.block} ${s.tint}`} aria-labelledby="sv-more">
        <div className={`wrap ${s.more}`}>
          <div>
            <h2 id="sv-more" className={s.h3}>
              {copy.ui.relatedArticles}
            </h2>
            <ul className={s.links}>
              {page.related.map((a) => (
                <li key={a}>
                  <Link href={articlePath(lang, a)}>{articles[a].name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={s.h3}>{copy.ui.relatedServices}</h2>
            <ul className={s.links}>
              {others.map(([k, o]) => (
                <li key={k}>
                  <Link href={servicePath(lang, k)}>{o.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
