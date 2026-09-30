import Link from "next/link";
import type { Locale } from "@/lib/content/types";
import { articlePath, getPages, servicePath } from "@/lib/pages";
import type { ArticlePage } from "@/lib/pages/types";
import { Glyph, Marker } from "../ui/Glyph";
import { Pill } from "../ui/Kit";
import { LinkCard } from "./ServiceView";
import s from "./Pages.module.css";

type Props = { lang: Locale; id: string; page: ArticlePage };

// Текст статьи в белом листе по колонкам 3–9, справа липкая тёмная карточка с выводом и ссылкой на услугу.
export function ArticleView({ lang, id, page }: Props) {
  const { copy, services, articles } = getPages(lang);
  const service = services[page.service];
  const others = Object.entries(articles).filter(([k]) => k !== id);
  return (
    <>
      <div className="wrap grid12">
        <Marker />
        <article className={`card ${s.prose}`}>
          {page.body.map((b) => {
            const List = b.ordered ? "ol" : "ul";
            return (
              <section key={b.h2}>
                <h2>{b.h2}</h2>
                {b.p.map((x) => (
                  <p key={x.slice(0, 40)}>{x}</p>
                ))}
                {b.list && (
                  <List className={b.ordered ? s.olist : s.dots}>
                    {b.list.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </List>
                )}
              </section>
            );
          })}
        </article>
        <aside className={s.side}>
          <div className={`card card-dark ${s.take}`}>
            <p>{page.takeaway}</p>
            <Pill label={service.name} href={servicePath(lang, page.service)} />
          </div>
          <Link className={`card ${s.sideCta}`} href="#ariza">
            <span className="chip">
              <Glyph name="phone" />
            </span>
            <span>{copy.ui.ctaTitle}</span>
            <Glyph name="arrow" className="corner" />
          </Link>
        </aside>
      </div>
      <section className="wrap grid12" aria-label={copy.ui.relatedArticles}>
        <LinkCard wide title={copy.ui.relatedArticles} items={others.map(([k, a]) => [articlePath(lang, k), a.name])} />
      </section>
    </>
  );
}
