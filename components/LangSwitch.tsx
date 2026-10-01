import Link from "next/link";
import { LOCALES, type Locale } from "@/lib/content/types";
import s from "./LangSwitch.module.css";

export type LangItem = { code: Locale; href: string; isCurrent: boolean };
type Props = { items: LangItem[]; label: string; tone?: "dark" | "light"; className?: string };

// Сегмент «UZ | RU»: текущий язык подсвечен и не кликается, второй ведёт на эту же страницу на другом языке.
export function LangSwitch({ items, label, tone = "dark", className = "" }: Props) {
  return (
    <div className={`${s.root} ${tone === "light" ? s.light : s.dark} ${className}`} role="group" aria-label={label}>
      {items.map((it) =>
        it.isCurrent ? (
          <span key={it.code} className={s.on} aria-current="true">
            {it.code.toUpperCase()}
          </span>
        ) : (
          <Link key={it.code} href={it.href} hrefLang={it.code} lang={it.code}>
            {it.code.toUpperCase()}
          </Link>
        ),
      )}
    </div>
  );
}

export function langItems(lang: Locale, alt?: string): LangItem[] {
  return LOCALES.map((code) => ({ code, isCurrent: code === lang, href: code === lang ? "" : (alt ?? `/${code}`) }));
}
