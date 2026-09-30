import Link from "next/link";
import type { Locale } from "@/lib/content/types";
import { articlePath, getPages, servicePath, type Kind } from "@/lib/pages";
import { Glyph } from "../ui/Glyph";
import { Pill } from "../ui/Kit";
import s from "./Pages.module.css";

// Хаб раздела: реестр белых карточек, номер в чипе, суть одной строкой, стрелка в углу.
export function HubView({ lang, kind }: { lang: Locale; kind: Kind }) {
  const { copy, services, articles } = getPages(lang);
  const rows =
    kind === "services"
      ? Object.entries(services).map(([id, p]) => ({ id, name: p.h1, text: p.description, href: servicePath(lang, id) }))
      : Object.entries(articles).map(([id, p]) => ({ id, name: p.h1, text: p.description, href: articlePath(lang, id) }));
  return (
    <section className="wrap" aria-label={kind}>
      <ol className={s.hub} data-stagger>
        {rows.map((r, i) => (
          <li key={r.id} className="card">
            <Link href={r.href} className={s.hubItem}>
              <span className={`chip num ${s.n}`}>{i + 1}</span>
              <Glyph name="arrow" className="corner" />
              <span className={s.hubT}>{r.name}</span>
              <span className={s.hubX}>{r.text}</span>
            </Link>
          </li>
        ))}
        {/* Тёмная карточка добирает последний ряд до конца сетки из трёх колонок */}
        <li className={`card card-dark ${s.hubCta}`} style={{ gridColumn: `span ${3 - (rows.length % 3)}` }}>
          <p>{copy.ui.ctaText}</p>
          <Pill label={copy.ui.ctaBtn} href="#ariza" />
        </li>
      </ol>
    </section>
  );
}
