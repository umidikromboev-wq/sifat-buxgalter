"use client";

import { useEffect, useLayoutEffect, type RefObject } from "react";

/**
 * One IntersectionObserver for every scroll animation on the page, instead of
 * a hundred. Each element is watched until it first enters the viewport, then
 * forgotten.
 */
const callbacks = new WeakMap<Element, () => void>();
let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const callback = callbacks.get(entry.target);
          callbacks.delete(entry.target);
          observer?.unobserve(entry.target);
          callback?.();
        }
      },
      { rootMargin: "0px 0px -9% 0px", threshold: 0.01 },
    );
  }
  return observer;
}

export function observeOnce(element: Element, callback: () => void): () => void {
  callbacks.set(element, callback);
  getObserver().observe(element);
  return () => {
    callbacks.delete(element);
    observer?.unobserve(element);
  };
}

export function motionAllowed(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof IntersectionObserver !== "undefined" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

// Arming before paint is what prevents a flash of the un-hidden state;
// useLayoutEffect warns during SSR, so the server gets the plain effect.
export const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Arms `element` under `attribute` (hidden state), then flips it to "shown"
 * when it scrolls into view. Content is visible in the server HTML and stays
 * visible if JavaScript never runs — the worst case is no animation.
 */
export function useArmOnView(
  ref: RefObject<HTMLElement | null>,
  attribute: "reveal" | "lines" | "odo" | "draw",
) {
  useIsoLayoutEffect(() => {
    const node = ref.current;
    if (!node || !motionAllowed()) return;
    node.dataset[attribute] = "armed";
    return observeOnce(node, () => {
      // One frame in the armed state so the transition has a start value.
      requestAnimationFrame(() => {
        node.dataset[attribute] = "shown";
      });
    });
  }, [ref, attribute]);
}
