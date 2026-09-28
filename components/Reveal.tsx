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
    return () => { io.disconnect(); window.clearTimeout(safety); };
  }, []);
  return null;
}
