import Link from "next/link";
import s from "./Pages.module.css";

export type Crumb = { name: string; href: string };

// Видимые хлебные крошки; та же цепочка уходит в JSON-LD BreadcrumbList (lib/pages/schema.ts).
export function Crumbs({ items, label }: { items: Crumb[]; label: string }) {
  return (
    <nav aria-label={label} className={s.crumbs}>
      <ol>
        {items.map((c, i) => (
          <li key={c.href}>
            {i < items.length - 1 ? <Link href={c.href}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
