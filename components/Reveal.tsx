"use client";

import { useEffect } from "react";

/** Framer-uslubidagi scroll-reveal: .wrap ichidagi elementlar koʻringanda yumshoq paydo boʻladi */
export default function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("main section > .wrap > *, main .grid-3 > *, main .grid-4 > *, main .router > *, main .promises > li, main .process > li, main .steps > li"));
    if (reduce) { nodes.forEach((n) => n.classList.add("in")); return; }
    nodes.forEach((n, i) => { n.classList.add("reveal"); n.style.transitionDelay = `${Math.min((i % 6) * 60, 300)}ms`; });
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { (e.target as HTMLElement).classList.add("in"); io.unobserve(e.target); }
    }, { rootMargin: "0px 0px -5% 0px", threshold: 0 });
    // xavfsizlik: 2.5 s dan keyin koʻrinish maydonidan yuqoridagilar baribir ochiladi
    const safety = window.setTimeout(() => nodes.forEach((n) => { if (n.getBoundingClientRect().top < window.innerHeight) n.classList.add("in"); }), 2500);
    nodes.forEach((n) => io.observe(n));
    // raqamlar count-up
    const nums = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    const cio = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        cio.unobserve(e.target);
        const el = e.target as HTMLElement;
        const raw = el.dataset.count || "";
        const m = raw.match(/^(\d+)(.*)$/);
        if (!m || raw.includes("/")) continue;
        const target = parseInt(m[1], 10), suffix = m[2];
        const from = target > 1000 ? target - 30 : 0;
        const t0 = performance.now(), dur = 1200;
        const tick = (t: number) => {
          const k = Math.min(1, (t - t0) / dur), ease = 1 - Math.pow(1 - k, 3);
          el.textContent = Math.round(from + (target - from) * ease) + suffix;
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    nums.forEach((n) => cio.observe(n));
    return () => { io.disconnect(); cio.disconnect(); window.clearTimeout(safety); };
  }, []);
  return null;
}
