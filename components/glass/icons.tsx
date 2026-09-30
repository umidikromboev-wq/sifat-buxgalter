import type { Icon } from "./content";

// Контуры из набора Умида (~/Downloads/Sifat buxgalter/icons, ui + chips): сетка 14, stroke 1.5.
// Цвет через currentColor, поэтому пути перенесены в код, а не подключены файлами.
const PATHS: Record<Icon | "arrow" | "menu" | "shield", React.ReactNode> = {
  arrow: <path d="M4 10 10 4M5 4h5v5" />,
  menu: <path d="M2 5h10M2 9h10" />,
  shield: <><path d="M7 1.5 2.5 3.2v3.3c0 2.8 1.9 5 4.5 6 2.6-1 4.5-3.2 4.5-6V3.2z" /><path d="m5 7 1.4 1.4L9 5.8" /></>,
  calc: <><path d="M2 3.5 6 8l2-2 4 4.5" /><path d="M9 10.5h3v-3" /></>,
  handoff: <path d="M2 7h9M8 4l3 3-3 3" />,
  letter: <><circle cx="7" cy="7" r="5" /><path d="M7 4.5V7l1.6 1.2" /></>,
  lock: <><rect x="2.5" y="3.5" width="9" height="7" rx="1.5" /><path d="M2.5 6h9" /></>,
  eye: <><path d="M1.5 7s2-4 5.5-4 5.5 4 5.5 4-2 4-5.5 4-5.5-4-5.5-4z" /><circle cx="7" cy="7" r="1.6" /></>,
  growth: <><path d="M3 11 11 3" /><circle cx="4" cy="4" r="1.5" /><circle cx="10" cy="10" r="1.5" /></>,
  law: <><path d="M11.5 5.5A4.8 4.8 0 0 0 3 4.3M2.5 8.5a4.8 4.8 0 0 0 8.5 1.2" /><path d="M11.5 2.5v3h-3M2.5 11.5v-3h3" /></>,
};

export function Glyph({ name, className }: { name: keyof typeof PATHS; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {PATHS[name]}
    </svg>
  );
}
