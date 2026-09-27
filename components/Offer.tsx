import Link from "next/link";
import type { Content, Locale } from "@/lib/content/types";
import { getPages, sectionPath, servicePath } from "@/lib/pages";
import s from "./Offer.module.css";

// Группы услуг на главной по порядку ведут на свои посадочные страницы (lib/pages).
const GROUP_PAGES = ["autsorsing", "soliq", "tekshiruv", "kadr", "ved"] as const;

export function Services({ t, lang }: { t: Content["services"]; lang: Locale }) {
  const { copy } = getPages(lang);
  return (
    <section id="xizmatlar" className="section" aria-labelledby="sv-h">
      <div className="wrap">
        <p className="kicker">{t.kicker}</p>
        <h2 id="sv-h" className="h2">
          {t.h2}
        </h2>
        <p className="lead">{t.sub}</p>
        <div className={s.ledger}>
          {t.groups.map((g, i) => (
            <div key={g.title} className={`${s.group} reveal`}>
              <h3 className={s.groupT}>
                {GROUP_PAGES[i] ? (
                  <Link className={s.groupLink} href={servicePath(lang, GROUP_PAGES[i])}>
                    {g.title} <span aria-hidden="true">→</span>
                  </Link>
                ) : (
                  g.title
                )}
              </h3>
              <ul className={s.groupL}>
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link className={s.allLink} href={sectionPath(lang, "services")}>
          {copy.ui.allServices} →
        </Link>
      </div>
    </section>
  );
}

// Обязательства — как пункты договора: нумерация § здесь настоящая, это текст соглашения.
export function Clauses({ t }: { t: Content["clauses"] }) {
  return (
    <section className={`section ${s.clausesSec}`} aria-labelledby="cl-h">
      <div className="wrap">
        <div className={s.clHead}>
          <div>
            <p className="kicker">{t.kicker}</p>
            <h2 id="cl-h" className="h2">
              {t.h2}
            </h2>
          </div>
          <p className={s.clSub}>{t.sub}</p>
        </div>
        <ol className={s.clauses}>
          {t.items.map((c, i) => (
            <li key={c.title} className={`${s.clause} reveal`}>
              <span className={`${s.par} num`}>§&thinsp;{i + 1}</span>
              <div>
                <h3 className={s.clT}>{c.title}</h3>
                <p className={s.clX}>{c.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CmpIcon({ ok }: { ok: boolean }) {
  return (
    <svg className={ok ? s.icoOk : s.icoNo} viewBox="0 0 16 16" aria-hidden="true">
      {ok ? (
        <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      )}
    </svg>
  );
}

// Покупатель уже платит бухгалтеру — сравниваем не «три способа», а «сейчас против нас» по его же критериям.
export function Compare({ t }: { t: Content["compare"] }) {
  const [nowLabel, usLabel] = t.cols;
  return (
    <section className="section" aria-labelledby="cmp-h">
      <div className="wrap">
        <p className="kicker">{t.kicker}</p>
        <h2 id="cmp-h" className={`h2 ${s.cmpH}`}>
          {t.h2}
        </h2>
        <p className="lead">{t.sub}</p>
        <div className={s.cmp} role="table" aria-labelledby="cmp-h">
          <div className={s.cmpHead} role="row">
            <span role="columnheader" />
            <span role="columnheader" className={s.cmpNowH}>
              {nowLabel}
            </span>
            <span role="columnheader" className={s.cmpUsH}>
              {usLabel}
            </span>
          </div>
          {t.rows.map((r) => (
            <div key={r.k} className={`${s.cmpRow} reveal`} role="row">
              <span role="rowheader" className={s.cmpK}>
                {r.k}
              </span>
              <span role="cell" className={s.cmpNow} data-label={nowLabel}>
                <CmpIcon ok={false} />
                {r.now}
              </span>
              <span role="cell" className={s.cmpUs} data-label={usLabel}>
                <CmpIcon ok />
                {r.us}
              </span>
            </div>
          ))}
        </div>
        <p className={s.cmpNote}>
          {t.note}{" "}
          <a href="#ariza" className={s.cmpLink}>
            →
          </a>
        </p>
      </div>
    </section>
  );
}
