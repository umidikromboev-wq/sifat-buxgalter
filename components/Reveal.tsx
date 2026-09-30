"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Один наблюдатель на страницу, без обработчика скролла: элемент получает .in при входе в экран.
// Что следим: одиночные .reveal, дети групп [data-stagger] и блоки [data-anim] (заголовки секций).
const TARGETS = ".reveal:not(.in), [data-stagger] > :not(.in), [data-anim]:not(.in)";
const STAGGER_MS = 80;
const MAX_STEPS = 6;
// После появления задержку обнуляем, иначе наведение на карточку тоже ждало бы свою очередь.
const CLEAR_AFTER_MS = 1400;

// Волна идёт по тем элементам, что вошли в экран одновременно, в порядке чтения: сверху вниз, слева направо.
// Так на телефоне каждая карточка появляется сама, а на широком экране ряд идёт по очереди.
// Путь в зависимостях: layout живёт между переходами, новые элементы надо подхватить заново.
export function Reveal() {
  const path = usePathname();
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(TARGETS);
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const timers: number[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
          .forEach((e, k) => {
            const el = e.target as HTMLElement;
            const delay = Math.min(k, MAX_STEPS) * STAGGER_MS;
            el.style.setProperty("--d", `${delay}ms`);
            el.classList.add("in");
            io.unobserve(el);
            timers.push(window.setTimeout(() => el.style.setProperty("--d", "0ms"), delay + CLEAR_AFTER_MS));
          });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [path]);
  return null;
}

export function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
