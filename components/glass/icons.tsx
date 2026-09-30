import type { Icon } from "./content";

// Линейные иконки в духе Lucide: stroke 1.5, скруглённые концы.
const PATHS: Record<Icon | "arrow" | "menu" | "shield", React.ReactNode> = {
  arrow: <path d="M7 17 17 7M8 7h9v9" />,
  menu: <path d="M4 9h16M4 15h16" />,
  shield: <><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  calc: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" /></>,
  handoff: <><path d="M4 7h11l-3-3M20 17H9l3 3" /></>,
  letter: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>,
  eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
  growth: <><path d="m3 17 6-6 4 4 8-8" /><path d="M15 7h6v6" /></>,
  law: <><path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Z" /><path d="M9 7h6" /></>,
};

export function Glyph({ name, className }: { name: keyof typeof PATHS; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {PATHS[name]}
    </svg>
  );
}
