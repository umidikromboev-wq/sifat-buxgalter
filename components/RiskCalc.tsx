"use client";

import { useId, useState } from "react";
import type { RiskCalc as T } from "@/lib/content/types";
import { calcRisk, MAX_YEARS, short } from "@/lib/riskCalc";
import s from "./Problem.module.css";

// Стартовые значения дают пример из интервью: 25 млрд в год × 20% без чеков × 2 года = 10 млрд скрытой выручки.
const START = { turnoverBln: 25, sharePct: 20, years: 2 };

export function RiskCalc({ t }: { t: T }) {
  const [v, setV] = useState(START);
  const id = useId();
  const r = calcRisk(v);
  const fmt = (n: number) => short(n, t.bln, t.mln, ",");
  const rows = (["fine", "vat", "profit", "peni"] as const).map((k) => ({ k, label: t.rows[k], law: t.laws[k], n: r[k] }));
  const sliders = [
    { key: "turnoverBln", label: t.turnover, min: 1, max: 100, step: 1, out: `${v.turnoverBln} ${t.bln}` },
    { key: "sharePct", label: t.share, min: 5, max: 60, step: 5, out: `${v.sharePct}%` },
    { key: "years", label: t.years, min: 1, max: MAX_YEARS, step: 1, out: `${v.years} ${t.yearsUnit[v.years - 1]}` },
  ] as const;

  return (
    <div className={`glass ${s.calc} reveal`}>
      <p className={s.calcT}>{t.title}</p>
      <div className={s.sliders}>
        {sliders.map((sl) => (
          <label key={sl.key} className={s.slider} htmlFor={`${id}-${sl.key}`}>
            <span className={s.slTop}>
              <span>{sl.label}</span>
              <output className="num">{sl.out}</output>
            </span>
            <input
              id={`${id}-${sl.key}`}
              type="range"
              min={sl.min}
              max={sl.max}
              step={sl.step}
              value={v[sl.key]}
              onChange={(e) => setV({ ...v, [sl.key]: Number(e.target.value) })}
            />
          </label>
        ))}
      </div>
      <p className={s.hidden}>
        {t.hidden} <b className="num">{fmt(r.hidden)}</b>
      </p>
      <dl className={s.rows} aria-live="polite">
        {rows.map((row) => (
          <div key={row.k} className={s.row}>
            <dt>
              {row.label}
              <small>{row.law}</small>
            </dt>
            <dd className="num">{fmt(row.n)}</dd>
          </div>
        ))}
        <div className={`${s.row} ${s.rowTotal}`}>
          <dt>{t.total}</dt>
          <dd className="num">
            {fmt(r.total)} <span>{t.sum}</span>
          </dd>
        </div>
      </dl>
      <p className={s.totalL}>{t.note}</p>
    </div>
  );
}
