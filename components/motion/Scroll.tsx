"use client";

import { useRef, useSyncExternalStore, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/cn";

const noop = () => () => {};

/** False on the server and during hydration, true once the page is live. */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
}

/** Hairline of gold across the top of the window: how far down the page you are. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 36, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-70 h-0.5 origin-left bg-(image:--gold-fill)"
      style={{ scaleX }}
    />
  );
}

/**
 * A line that fills as its own box scrolls through the viewport — the spine
 * of the timelines. Vertical by default, horizontal from `md` if asked.
 */
export function ScrollLine({
  className,
  horizontal = false,
  tone = "ink",
}: {
  className?: string;
  horizontal?: boolean;
  /** "night" for the black bands, where the unfilled track has to be light. */
  tone?: "ink" | "night";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });

  return (
    <div ref={ref} aria-hidden="true" className={cn("pointer-events-none", className)}>
      <div className={cn("absolute inset-0", tone === "night" ? "bg-white/12" : "bg-line-strong")} />
      <motion.div
        className={cn("absolute inset-0 bg-(image:--gold-fill)", horizontal ? "origin-left" : "origin-top")}
        style={horizontal ? { scaleX: progress } : { scaleY: progress }}
      />
    </div>
  );
}

/** Drifts its content against the scroll by up to `offset` pixels. */
export function Parallax({
  children,
  offset = 60,
  className,
}: {
  children: ReactNode;
  offset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} className={className} style={reduce ? undefined : { y }}>
      {children}
    </motion.div>
  );
}

function ScrollWord({
  children,
  progress,
  range,
  className,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const blur = useTransform(progress, range, ["blur(3px)", "blur(0px)"]);
  return (
    <motion.span className={cn("inline-block", className)} style={{ opacity, filter: blur }}>
      {children}
    </motion.span>
  );
}

/**
 * The manifest: words light up one by one as you scroll past, as if the
 * sentence were being read to you. Server HTML and reduced motion get the
 * plain, fully visible sentence.
 */
export function ScrollWords({
  lines,
  className,
}: {
  lines: { text: string; className?: string }[];
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const hydrated = useHydrated();
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.88", "end 0.5"] });

  const words = lines.flatMap((line, l) =>
    line.text.split(" ").map((word) => ({ word, line: l, className: line.className })),
  );
  const animate = hydrated && !reduce;

  // The line's class goes on every word, not the line: gradient text has to
  // be painted by the element that owns the glyphs, and here that's the word.
  return (
    <p ref={ref} className={className}>
      {lines.map((line, l) => (
        <span key={l} className="block">
          {words.map((item, i) => {
            if (item.line !== l) return null;
            const isLast = i === words.length - 1 || words[i + 1].line !== l;
            return (
              <span key={i}>
                {animate ? (
                  <ScrollWord
                    progress={scrollYProgress}
                    range={[i / words.length, (i + 1) / words.length]}
                    className={item.className}
                  >
                    {item.word}
                  </ScrollWord>
                ) : (
                  <span className={cn("inline-block", item.className)}>{item.word}</span>
                )}
                {isLast ? null : " "}
              </span>
            );
          })}
        </span>
      ))}
    </p>
  );
}
