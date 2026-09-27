import Link from "next/link";
import type { Locale } from "@/lib/content/types";
import { articlePath, getPages, servicePath } from "@/lib/pages";
import type { ArticlePage } from "@/lib/pages/types";
import { Crumbs, type Crumb } from "./Crumbs";
import s from "./Pages.module.css";

type Props = { lang: Locale; id: string; page: ArticlePage; crumbs: Crumb[] };

const formatDate = (iso: string, lang: Locale) =>
  new Intl.DateTimeFormat(lang === "uz" ? "uz-Latn-UZ" : "ru-RU", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));

export function ArticleView({ lang, id, page, crumbs }: Props) {
  const { copy, services, articles } = getPages(lang);
  const service = services[page.service];
  const others = Object.entries(articles).filter(([k]) => k !== id);
  return (
    <article>
      <header className={s.head}>
        <div className={`wrap ${s.narrow}`}>
          <Crumbs items={crumbs} label={copy.ui.home} />
          <p className="kicker">{copy.articles.kicker}</p>
          <h1 className={`${s.h1} ${s.h1Art}`}>{page.h1}</h1>
          <p className={s.meta}>
            {copy.ui.updated} <time dateTime={page.published}>{formatDate(page.published, lang)}</time> · {page.minutes} {copy.ui.minutes}
          </p>
          <p className={s.lead}>{page.lead}</p>
        </div>
      </header>

      <div className={`wrap ${s.narrow} ${s.prose}`}>
        {page.body.map((b) => {
          const List = b.ordered ? "ol" : "ul";
          return (
            <section key={b.h2}>
              <h2>{b.h2}</h2>
              {b.p.map((x) => (
                <p key={x.slice(0, 40)}>{x}</p>
              ))}
              {b.list && (
                <List className={b.ordered ? s.olist : s.ticks}>
                  {b.list.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </List>
              )}
            </section>
          );
        })}

        <aside className={s.takeaway}>
          <p>{page.takeaway}</p>
          <Link className={s.takeLink} href={servicePath(lang, page.service)}>
            {service.name} →
          </Link>
        </aside>
      </div>

      <section className={`${s.block} ${s.tint}`} aria-labelledby="ar-more">
        <div className={`wrap ${s.narrow}`}>
          <h2 id="ar-more" className={s.h3}>
            {copy.ui.relatedArticles}
          </h2>
          <ul className={s.links}>
            {others.map(([k, a]) => (
              <li key={k}>
                <Link href={articlePath(lang, k)}>{a.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
