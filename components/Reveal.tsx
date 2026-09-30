"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Один наблюдатель на страницу: .reveal получает .in при входе в экран. Без обработчика скролла.
// Путь в зависимостях: layout живёт между переходами, новые .reveal надо подхватить заново.
export function Reveal() {
  const path = usePathname();
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);
  return null;
}

export function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
