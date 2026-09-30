// Знак перерисован в SVG с logo_v5.png клиента: исходник 500px, знак в нём ~120px — растр мылился.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 114 120" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="sifat-gold" x1="0" y1="0" x2="0.7" y2="1">
          <stop offset="0" stopColor="#b38a26" />
          <stop offset="1" stopColor="#ecd58a" />
        </linearGradient>
      </defs>
      <g fill="url(#sifat-gold)" stroke="url(#sifat-gold)" strokeWidth="3" strokeLinejoin="round">
        <polygon points="25,2 82,2 77,54 13,54" />
        <polygon points="84,26 112,26 106,54 77,54" />
        <polygon points="8,65 38,65 32,95 2,95" />
        <polygon points="48,65 101,65 90,118 34,118" />
      </g>
    </svg>
  );
}
