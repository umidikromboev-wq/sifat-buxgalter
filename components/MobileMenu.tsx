"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { usePathname } from "next/navigation";
import { Glyph } from "./ui/Glyph";
import s from "./Top.module.css";

type Props = { label: string; items: { href: string; label: string }[] };

// Белая плашка меню раскрывается из правого верхнего угла по диагонали, пункты поднимаются следом.
export function MobileMenu({ label, items }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
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

  return (
    <div ref={root} className={s.menuRoot}>
      <button
        type="button"
        className={s.glassPill}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((v) => !v)}
      >
        <Glyph name="menu" />
        {label}
      </button>
      <nav id="mobile-menu" className={s.mobileSheet} data-open={isOpen} aria-label={label} inert={!isOpen}>
        {items.map((l, i) => (
          <a key={l.href + i} href={l.href} style={{ "--i": i } as CSSProperties} onClick={() => setIsOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
