"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { Glyph } from "./ui/Glyph";
import { LangSwitch, type LangItem } from "./LangSwitch";
import top from "./Top.module.css";
import s from "./Menu.module.css";

type Item = { href: string; label: string };
export type MenuData = { label: string; servicesTitle: string; services: Item[]; links: Item[]; phone: Item; cta: Item; langs: LangItem[]; langLabel: string };
type Props = { data: MenuData; align?: "left" | "right" };

const SHEET_GAP = 10;
const SCROLL_CLOSE_PX = 40;

// Белая плашка раскрывается из угла кнопки по диагонали, пункты поднимаются следом.
// Одно меню на все экраны: на компьютере открывается влево-вниз от кнопки, на телефоне вправо.
export function SiteMenu({ data, align = "right" }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [place, setPlace] = useState<CSSProperties>({});
  const root = useRef<HTMLDivElement>(null);
  const sheet = useRef<HTMLElement>(null);
  const id = useId();
  const pathname = usePathname();

  useEffect(() => setIsMounted(true), []);
  useEffect(() => setIsOpen(false), [pathname]);

  // Плашка живёт в body, иначе её обрезает тёмный верх страницы (overflow: hidden).
  // Позиция и высота считаются от кнопки, остаток экрана прокручивается внутри.
  useLayoutEffect(() => {
    if (!isOpen) return;
    const measure = () => {
      const r = root.current?.getBoundingClientRect();
      if (!r) return;
      const top = r.bottom + SHEET_GAP;
      const side = align === "left" ? { left: r.left } : { right: window.innerWidth - r.right };
      setPlace({ top, ...side, maxHeight: window.innerHeight - top - SHEET_GAP });
    };
    measure();
    const startY = window.scrollY;
    const onScroll = () => Math.abs(window.scrollY - startY) > SCROLL_CLOSE_PX && setIsOpen(false);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isOpen, align]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!root.current?.contains(t) && !sheet.current?.contains(t)) setIsOpen(false);
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

  const nav = (
    <nav
      ref={sheet}
      id={id}
      className={`${s.sheet} ${align === "left" ? s.left : s.right} ${isMounted ? s.floating : ""}`}
      style={isMounted ? place : undefined}
      data-open={isOpen}
      aria-label={data.label}
      inert={!isOpen}
    >
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
  );

  return (
    <div ref={root} className={s.root}>
      <button type="button" className={top.glassPill} aria-expanded={isOpen} aria-controls={id} onClick={() => setIsOpen((v) => !v)}>
        <Glyph name={isOpen ? "cross" : "menu"} />
        {data.label}
      </button>
      {isMounted ? createPortal(nav, document.body) : nav}
    </div>
  );
}
