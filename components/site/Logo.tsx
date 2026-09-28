import { cn } from "@/lib/cn";

/**
 * The Sifat Buxgalter mark: four slanted gold tiles on one diagonal gradient,
 * redrawn as a vector from the client's logo (public/brand/logo.png, 500px),
 * so it stays sharp at any size and sits on either theme without its dark
 * square. `id` keeps the gradient reference unique when the mark appears
 * more than once on a page.
 */
// The logo's own gradient, for dark surfaces in either theme.
const brightStops = ["#be982c", "#d7bc5b", "#fdf3a8"];
// Theme-aware: a deeper gold on ivory, the original in the dark theme.
const themedStops = ["var(--mark-1)", "var(--mark-2)", "var(--mark-3)"];

export function LogoMark({
  id,
  bright = false,
  className,
}: {
  id: string;
  /** Always use the original gradient — for the footer and other dark bands. */
  bright?: boolean;
  className?: string;
}) {
  const stops = bright ? brightStops : themedStops;
  return (
    <svg viewBox="0 0 114 119" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="114" y2="119" gradientUnits="userSpaceOnUse">
          <stop offset="0" style={{ stopColor: stops[0] }} />
          <stop offset="0.45" style={{ stopColor: stops[1] }} />
          <stop offset="1" style={{ stopColor: stops[2] }} />
        </linearGradient>
      </defs>
      <g fill={`url(#${id})`}>
        <path d="M25 0 83 1 69 55 11 54Z" />
        <path d="M83 24 114 25 106 55 75 54Z" />
        <path d="M9 64 40 66 31 96 0 94Z" />
        <path d="M47 64 103 65 88 119 32 118Z" />
      </g>
    </svg>
  );
}

/** Mark plus the two-line wordmark, set like the original lockup. */
export function Logo({
  id = "logo",
  tone = "ink",
  className,
}: {
  id?: string;
  /** "paper" on the black bands and the footer, where the wordmark is light. */
  tone?: "ink" | "paper";
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark
        id={id}
        bright={tone === "paper"}
        className="h-9 w-auto shrink-0 drop-shadow-[0_4px_10px_rgb(176_141_69/0.35)]"
      />
      <span className="flex flex-col font-sans text-[13px] font-bold uppercase leading-[1.05] tracking-[0.16em]">
        <span className={tone === "ink" ? "text-brand-gold" : "text-[#d8b84e]"}>Sifat</span>
        <span className={tone === "ink" ? "text-ink" : "text-on-night"}>Buxgalter</span>
      </span>
    </span>
  );
}
