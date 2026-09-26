import type { HomeContent } from "@/content/home";

export default function ReportCard({ s }: { s: HomeContent["hero"]["sample"] }) {
  return (
    <div className="paper" aria-hidden="true">
      <div className="paper-head">
        <div>
          <div className="paper-title">{s.title}</div>
          <div className="paper-period">{s.period}</div>
        </div>
        <span className="paper-badge">{s.badge}</span>
      </div>
      <ul className="paper-rows">
        {s.rows.map(([k, v]) => (
          <li key={k}>
            <span className="k">{k}</span>
            <span className="dots" />
            <span className="v">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
              {v}
            </span>
          </li>
        ))}
      </ul>
      <div className="paper-stats">
        <div>
          <small>{s.stat1[0]}</small>
          <strong>{s.stat1[1]}</strong>
        </div>
        <div>
          <small>{s.stat2[0]}</small>
          <strong>{s.stat2[1]}</strong>
        </div>
      </div>
      <div className="paper-sign">{s.signed}</div>
      <div className="seal">
        <svg viewBox="0 0 120 120" width="120" height="120">
          <defs>
            <path id="sealPath" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
          </defs>
          <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="60" cy="60" r="34" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <text fontSize="10.5" fontWeight="700" letterSpacing="2.2" fill="currentColor">
            <textPath href="#sealPath">{s.stamp + s.stamp}</textPath>
          </text>
          <image href="/mark.png" x="44" y="44" width="32" height="33" />
        </svg>
      </div>
    </div>
  );
}
