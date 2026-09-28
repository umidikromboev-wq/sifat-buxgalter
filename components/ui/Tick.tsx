import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

/** A check mark that draws itself when the surrounding `Reveal` plays. */
export function Tick({ className, index = 0 }: { className?: string; index?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("tick", className)}
      style={{ "--row": index } as CSSProperties}
    >
      <path pathLength={1} d="m4.5 12.5 4.8 4.8L19.5 7" />
    </svg>
  );
}
