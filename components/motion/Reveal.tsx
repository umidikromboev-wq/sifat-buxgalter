"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { useArmOnView } from "./inView";

type RevealTag = "div" | "section" | "li" | "p" | "span" | "article" | "figure" | "ul" | "ol" | "header" | "footer";

/**
 * Entrance for a block as it scrolls into view: a rise and a fade by default,
 * a soft scale or a top-down wipe on request. Delays are in milliseconds so a
 * list can be staggered with `delay={i * 70}`.
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  variant = "up",
  className,
  style,
  id,
}: {
  children: ReactNode;
  as?: RevealTag;
  delay?: number;
  variant?: "up" | "fade" | "scale" | "mask";
  className?: string;
  style?: CSSProperties;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  useArmOnView(ref, "reveal");

  return (
    <Tag
      ref={ref as never}
      id={id}
      data-variant={variant}
      className={className}
      style={{ "--reveal-delay": `${delay}ms`, ...style } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
