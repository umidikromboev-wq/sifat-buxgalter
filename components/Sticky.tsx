"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import s from "./Menu.module.css";

// Закреплённая шапка: выезжает сверху, когда основная шапка первого экрана ушла из вида.
// Следим через IntersectionObserver за меткой под шапкой, без обработчика прокрутки.
// Сам бар уходит порталом в body: внутри героя его перекрывают листы страницы.
export function Sticky({ children }: { children: ReactNode }) {
  const mark = useRef<HTMLSpanElement>(null);
  const [isShown, setIsShown] = useState(false);
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setHost(document.body);
    const el = mark.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setIsShown(!e.isIntersecting && e.boundingClientRect.top < 0));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <span ref={mark} className={s.mark} aria-hidden="true" />
      {host &&
        createPortal(
          <div className={s.bar} data-shown={isShown} inert={!isShown}>
            {children}
          </div>,
          host,
        )}
    </>
  );
}
