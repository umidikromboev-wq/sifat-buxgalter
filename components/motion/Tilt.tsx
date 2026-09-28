"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * A card that leans toward the pointer, with a warm spotlight under it and a
 * gold rim that brightens nearest the cursor (both drawn in globals.css from
 * the --mx/--my this component writes).
 *
 * The lean is for mouse and trackpad only; on touch and with reduced motion
 * the card still gets the rim and spotlight, it just doesn't move.
 */
export function Tilt({
  children,
  className,
  max = 5,
  rim = true,
  style,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  rim?: boolean;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const lean =
      max > 0 &&
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
      if (!lean) return;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rx = (y / rect.height - 0.5) * -2 * max;
        const ry = (x / rect.width - 0.5) * 2 * max;
        el.style.transition = "transform 160ms ease-out";
        el.style.transform = `perspective(1200px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      el.style.transition = "transform 900ms var(--ease-out)";
      el.style.transform = "";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [max]);

  return (
    <div
      ref={ref}
      className={cn("spotlight will-change-transform", rim && "gold-rim", className)}
      style={style}
    >
      {children}
    </div>
  );
}
