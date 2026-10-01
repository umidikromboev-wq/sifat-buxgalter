"use client";

import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { usePathname } from "next/navigation";
import { Glyph } from "./ui/Glyph";
import { LangSwitch, type LangItem } from "./LangSwitch";
import top from "./Top.module.css";
import s from "./Menu.module.css";

type Item = { href: string; label: string };
export type MenuData = { label: string; servicesTitle: string; services: Item[]; links: Item[]; phone: Item; cta: Item; langs: LangItem[]; langLabel: string };
type Props = { data: MenuData; align?: "left" | "right" };

// Белая плашка раскрывается из угла кнопки по диагонали, пункты поднимаются следом.
// Одно меню на все экраны: на компьютере открывается влево-вниз от кнопки, на телефоне вправо.
export function SiteMenu({ data, align = "right" }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const id = useId();
  const pathname = usePathname();

  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [isOpen]);

  let k = 0;
  const link = (it: Item, cls?: string) => (
    <a key={it.href + it.label} className={cls} href={it.href} style={{ "--i": k++ } as CSSProperties} onClick={() => setIsOpen(false)}>
      {it.label}
    </a>
  );

  return (
    <div ref={root} className={s.root}>
      <button type="button" className={top.glassPill} aria-expanded={isOpen} aria-controls={id} onClick={() => setIsOpen((v) => !v)}>
        <Glyph name={isOpen ? "cross" : "menu"} />
        {data.label}
      </button>
      <nav id={id} className={`${s.sheet} ${align === "left" ? s.left : s.right}`} data-open={isOpen} aria-label={data.label} inert={!isOpen}>
        <p className={s.group} style={{ "--i": k++ } as CSSProperties}>
          {data.servicesTitle}
        </p>
        {data.services.map((it) => link(it))}
        <span className={s.rule} aria-hidden="true" />
        {data.links.map((it) => link(it, s.strong))}
        <div className={s.foot}>
          <div className={s.langRow} style={{ "--i": k++ } as CSSProperties}>
            <span>{data.langLabel}</span>
            <LangSwitch items={data.langs} label={data.langLabel} tone="light" />
          </div>
          {link(data.phone, s.phone)}
          {link(data.cta, s.cta)}
        </div>
      </nav>
    </div>
  );
}
