"use client";

import { useRef, type CSSProperties } from "react";
import { cn } from "@/lib/cn";
import { useArmOnView } from "./inView";

const STRIP = "01234567890123456789".split("");

/**
 * A mechanical counter: every digit rolls through a full turn and lands on
 * its value, the columns settling left to right. Separators — the slash in
 * 24/7, the dash in 4–5, the space in 10 000 — stay put.
 *
 * The server HTML already shows the final number (each strip is parked on its
 * digit), so crawlers and visitors without JavaScript read the real figure.
 */
export function Odometer({
  value,
  gold = false,
  className,
}: {
  value: string;
  /** Polished-gold digits; applied per glyph because the strips move. */
  gold?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useArmOnView(ref, "odo");

  let column = 0;
  return (
    <span ref={ref} className={cn("odometer numerals", gold && "odo-gold", className)}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="inline-flex items-baseline">
        {[...value].map((char, i) => {
          if (!/\d/.test(char)) {
            return (
              <span key={i} className="odo-sep">
                {char}
              </span>
            );
          }
          const style = { "--d": Number(char), "--c": column++ } as CSSProperties;
          return (
            <span key={i} className="odo-digit" style={style}>
              {/* An invisible copy of the digit sits in the text flow, so the
                  column keeps a real baseline next to «млрд сум» and friends. */}
              <span className="odo-ghost">{char}</span>
              <span className="odo-strip">
                {STRIP.map((d, j) => (
                  <span key={j}>{d}</span>
                ))}
              </span>
            </span>
          );
        })}
      </span>
    </span>
  );
}
