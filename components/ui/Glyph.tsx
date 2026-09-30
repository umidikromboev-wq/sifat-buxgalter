// Контуры из набора Умида (~/Downloads/Sifat buxgalter/icons: ui + chips), сетка 14, stroke 1.5.
// Пути перенесены в код, чтобы цвет шёл от currentColor. Недостающие дорисованы в той же сетке.
const PATHS = {
  arrow: <path d="M4 10 10 4M5 4h5v5" />,
  menu: <path d="M2 5h10M2 9h10" />,
  shield: (
    <>
      <path d="M7 1.5 2.5 3.2v3.3c0 2.8 1.9 5 4.5 6 2.6-1 4.5-3.2 4.5-6V3.2z" />
      <path d="m5 7 1.4 1.4L9 5.8" />
    </>
  ),
  trend: (
    <>
      <path d="M2 3.5 6 8l2-2 4 4.5" />
      <path d="M9 10.5h3v-3" />
    </>
  ),
  handoff: <path d="M2 7h9M8 4l3 3-3 3" />,
  clock: (
    <>
      <circle cx="7" cy="7" r="5" />
      <path d="M7 4.5V7l1.6 1.2" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="3.5" width="9" height="7" rx="1.5" />
      <path d="M2.5 6h9" />
    </>
  ),
  eye: (
    <>
      <path d="M1.5 7s2-4 5.5-4 5.5 4 5.5 4-2 4-5.5 4-5.5-4-5.5-4z" />
      <circle cx="7" cy="7" r="1.6" />
    </>
  ),
  percent: (
    <>
      <path d="M3 11 11 3" />
      <circle cx="4" cy="4" r="1.5" />
      <circle cx="10" cy="10" r="1.5" />
    </>
  ),
  refresh: (
    <>
      <path d="M11.5 5.5A4.8 4.8 0 0 0 3 4.3M2.5 8.5a4.8 4.8 0 0 0 8.5 1.2" />
      <path d="M11.5 2.5v3h-3M2.5 11.5v-3h3" />
    </>
  ),
  check: <path d="m3 7.2 2.6 2.6L11 4.4" />,
  cross: <path d="m4 4 6 6M10 4l-6 6" />,
  plus: <path d="M7 3v8M3 7h8" />,
  play: <path d="M5 3.4v7.2L10.6 7z" />,
  doc: (
    <>
      <path d="M4 1.8h4.2L10.5 4v8.2h-6.5z" />
      <path d="M6 7h3M6 9.5h3" />
    </>
  ),
  users: (
    <>
      <circle cx="5.2" cy="5" r="2" />
      <path d="M1.8 11.5c.4-1.9 1.8-3 3.4-3s3 1.1 3.4 3" />
      <path d="M9.2 3.2a2 2 0 0 1 0 3.6M10.4 8.7c1 .5 1.6 1.4 1.8 2.8" />
    </>
  ),
  globe: (
    <>
      <circle cx="7" cy="7" r="5" />
      <path d="M2 7h10M7 2c1.5 1.4 2.2 3 2.2 5S8.5 10.6 7 12C5.5 10.6 4.8 9 4.8 7S5.5 3.4 7 2z" />
    </>
  ),
  lock: (
    <>
      <rect x="3" y="6.2" width="8" height="5.6" rx="1.2" />
      <path d="M4.8 6.2V4.6a2.2 2.2 0 0 1 4.4 0v1.6" />
    </>
  ),
  phone: <path d="M4.6 2H3.2c-.6 0-1.1.5-1 1.1.5 4.6 4.1 8.2 8.7 8.7.6.1 1.1-.4 1.1-1V9.4l-2.4-1-1.2 1.2c-1.4-.7-2.4-1.7-3.1-3.1l1.2-1.2z" />,
  send: <path d="M12 2 1.8 6.2l4.1 1.6 1.6 4.1zM12 2 5.9 7.8" />,
  pin: (
    <>
      <path d="M7 12.5s4-3.6 4-7a4 4 0 0 0-8 0c0 3.4 4 7 4 7z" />
      <circle cx="7" cy="5.5" r="1.4" />
    </>
  ),
} as const;

export type GlyphName = keyof typeof PATHS;

export function Glyph({ name, className }: { name: GlyphName; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}

export function Marker() {
  return (
    <span className="marker" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}
