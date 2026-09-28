import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

// Hairline icons on a 24px grid, drawn for this site so they share one stroke
// weight with the serif headings. Decorative by default: every icon sits next
// to text that already says what it means.
function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 12h15.5" />
    <path d="m13.5 6 6 6-6 6" />
  </Svg>
);

export const ArrowUpRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 17 17 7" />
    <path d="M8.5 7H17v8.5" />
  </Svg>
);

export const Phone = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6.6 3.8 9 3.2a1 1 0 0 1 1.14.58l1.3 3.05a1 1 0 0 1-.27 1.15L9.6 9.3a11.3 11.3 0 0 0 5.1 5.1l1.32-1.57a1 1 0 0 1 1.15-.27l3.05 1.3a1 1 0 0 1 .58 1.14l-.6 2.4a1.6 1.6 0 0 1-1.63 1.2C10.45 18.2 5.8 13.55 5.4 5.43A1.6 1.6 0 0 1 6.6 3.8Z" />
  </Svg>
);

export const Telegram = (p: IconProps) => (
  <Svg {...p} fill="currentColor" stroke="none">
    <path d="M20.66 4.2 3.3 10.9c-1.18.47-1.17 1.13-.21 1.42l4.46 1.4 1.7 5.23c.2.57.1.8.71.8.47 0 .68-.22.94-.47l2.25-2.19 4.68 3.46c.86.47 1.48.23 1.7-.8l3.07-14.47c.32-1.26-.48-1.83-1.94-1.08ZM8.6 13.4l9.37-5.9c.47-.29.9-.13.55.18l-8.02 7.24-.31 3.33L8.6 13.4Z" />
  </Svg>
);

export const Check = (p: IconProps) => (
  <Svg {...p}>
    <path d="m4.5 12.5 4.8 4.8L19.5 7" />
  </Svg>
);

export const Cross = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6.5 6.5 17.5 17.5" />
    <path d="M17.5 6.5 6.5 17.5" />
  </Svg>
);

export const Plus = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </Svg>
);

export const Clock = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Svg>
);

export const Shield = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.2 5 6v5.4c0 4.3 2.9 7.9 7 9.4 4.1-1.5 7-5.1 7-9.4V6l-7-2.8Z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </Svg>
);

export const Ledger = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 3.5h10.5A1.5 1.5 0 0 1 18 5v15.5H7a2 2 0 0 1-2-2V4.5a1 1 0 0 1 1-1Z" />
    <path d="M5 18.5a2 2 0 0 1 2-2h11" />
    <path d="M9 7.5h5.5" />
    <path d="M9 11h5.5" />
  </Svg>
);

export const Percent = (p: IconProps) => (
  <Svg {...p}>
    <path d="M18.5 5.5 5.5 18.5" />
    <circle cx="7.25" cy="7.25" r="2.25" />
    <circle cx="16.75" cy="16.75" r="2.25" />
  </Svg>
);

export const Scale = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.5v17" />
    <path d="M7.5 20.5h9" />
    <path d="M5 7h14" />
    <path d="m5 7-2.8 6.2a3.2 3.2 0 0 0 5.6 0L5 7Z" />
    <path d="m19 7-2.8 6.2a3.2 3.2 0 0 0 5.6 0L19 7Z" />
  </Svg>
);

export const Users = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
    <path d="M15.5 5.2a3.2 3.2 0 0 1 0 5.6" />
    <path d="M17.2 14.7c1.8.6 3 2.2 3.3 4.8" />
  </Svg>
);

export const Globe = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17" />
    <path d="M12 3.5c2.3 2.4 3.5 5.2 3.5 8.5s-1.2 6.1-3.5 8.5c-2.3-2.4-3.5-5.2-3.5-8.5S9.7 5.9 12 3.5Z" />
  </Svg>
);

export const Grid = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" />
    <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" />
    <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" />
    <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" />
  </Svg>
);

export const Lock = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5" y="10.5" width="14" height="10" rx="2" />
    <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
  </Svg>
);

export const MapPin = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21s6.5-5.6 6.5-11a6.5 6.5 0 1 0-13 0c0 5.4 6.5 11 6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </Svg>
);

export const Menu = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 8h16" />
    <path d="M4 16h10" />
  </Svg>
);

export const Alert = (p: IconProps) => (
  <Svg {...p}>
    <path d="M10.3 4.1 2.9 17.3A2 2 0 0 0 4.6 20.3h14.8a2 2 0 0 0 1.7-3L13.7 4.1a2 2 0 0 0-3.4 0Z" />
    <path d="M12 9.5v4" />
    <path d="M12 17h.01" />
  </Svg>
);

export const Document = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14 3.5H7a1.5 1.5 0 0 0-1.5 1.5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8L14 3.5Z" />
    <path d="M14 3.5V8h4.5" />
    <path d="M9 12.5h6" />
    <path d="M9 16h4" />
  </Svg>
);

export const Spark = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.5c.6 4.2 2.3 5.9 6.5 6.5-4.2.6-5.9 2.3-6.5 6.5-.6-4.2-2.3-5.9-6.5-6.5 4.2-.6 5.9-2.3 6.5-6.5Z" />
    <path d="M18.5 16v4" />
    <path d="M16.5 18h4" />
  </Svg>
);

export const Building = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.5 20.5v-14l7-3v17" />
    <path d="M11.5 8.5h8v12" />
    <path d="M3 20.5h18" />
    <path d="M7.5 9.5h1" />
    <path d="M7.5 13h1" />
    <path d="M7.5 16.5h1" />
    <path d="M15 12h1" />
    <path d="M15 15.5h1" />
  </Svg>
);

export const Handshake = (p: IconProps) => (
  <Svg {...p}>
    <path d="m11 7.5-2.2-1.7a2 2 0 0 0-2.4 0L3 8.5v6l5.5 5a1.6 1.6 0 0 0 2.3-.1" />
    <path d="m21 14.5-5.5 5a1.6 1.6 0 0 1-2.2-.1l-4.8-4.6" />
    <path d="M21 8.5 17.6 5.8a2 2 0 0 0-2.4 0l-4.6 3.6a1.5 1.5 0 0 0 1.9 2.3l2.4-1.8 6.1 4.6" />
  </Svg>
);

export const Calendar = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
    <path d="M3.5 10h17" />
    <path d="M8 3v4" />
    <path d="M16 3v4" />
  </Svg>
);

export const Instagram = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </Svg>
);

export const Sun = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
  </Svg>
);

export const Moon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1Z" />
  </Svg>
);

/** The button arrow: two copies, one leaving and one arriving on hover. */
export function ArrowSwap({ className = "" }: { className?: string }) {
  return (
    <span className={`arrow-swap ${className}`} aria-hidden="true">
      <ArrowRight />
      <ArrowRight />
    </span>
  );
}
