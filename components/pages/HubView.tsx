import Link from "next/link";
import type { Locale } from "@/lib/content/types";
import { articlePath, getPages, servicePath, type Kind } from "@/lib/pages";
import { Crumbs, type Crumb } from "./Crumbs";
import s from "./Pages.module.css";

// Хаб раздела: не сетка карточек, а оглавление-реестр — номер, название, одна строка о сути.
export function HubView({ lang, kind, crumbs }: { lang: Locale; kind: Kind; crumbs: Crumb[] }) {
  const { copy, services, articles } = getPages(lang);
  const head = copy[kind];
  const rows =
    kind === "services"
      ? Object.entries(services).map(([id, p]) => ({ id, name: p.h1, text: p.description, href: servicePath(lang, id) }))
      : Object.entries(articles).map(([id, p]) => ({ id, name: p.h1, text: p.description, href: articlePath(lang, id) }));
  return (
    <>
      <section className={s.head}>
        <div className="wrap">
          <Crumbs items={crumbs} label={copy.ui.home} />
          <p className="kicker">{head.kicker}</p>
          <h1 className={s.h1}>{head.h1}</h1>
          <p className={s.lead}>{head.lead}</p>
        </div>
      </section>
      <section className={s.hubSec}>
        <div className="wrap">
          <ol className={s.index}>
            {rows.map((r, i) => (
              <li key={r.id}>
                <Link href={r.href} className={s.row}>
                  <span className={`${s.rowN} num`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={s.rowBody}>
                    <span className={s.rowT}>{r.name}</span>
                    <span className={s.rowX}>{r.text}</span>
                  </span>
                  <span className={s.rowGo} aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
