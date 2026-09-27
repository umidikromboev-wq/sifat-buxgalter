"use client";

import { useState } from "react";
import type { Content } from "@/lib/content/types";
import { SITE } from "@/lib/site";
import s from "./Benefits.module.css";

// Лид-магнит для тех, кто не готов звонить: сфера → готовое сообщение в Telegram Бекзоду.
export function Benefits({ t }: { t: Content["benefits"] }) {
  const [sphere, setSphere] = useState(t.spheres[0]);
  const href = `${SITE.telegram}?text=${encodeURIComponent(t.message.replace("{s}", sphere))}`;
  return (
    <section id="imtiyozlar" className={`section ${s.sec}`} aria-labelledby="bn-h">
      <div className={`wrap ${s.grid}`}>
        <div>
          <p className="kicker">{t.kicker}</p>
          <h2 id="bn-h" className={`h2 ${s.h}`}>
            {t.h2}
          </h2>
          <p className="lead">{t.sub}</p>
        </div>
        <div className={s.card}>
          <fieldset className={s.chips}>
            <legend>{t.label}</legend>
            {t.spheres.map((o) => (
              <label key={o} className={s.chip}>
                <input type="radio" name="sphere" value={o} checked={sphere === o} onChange={() => setSphere(o)} />
                <span>{o}</span>
              </label>
            ))}
          </fieldset>
          <a className={`btn btn-gold ${s.cta}`} href={href} target="_blank" rel="noopener noreferrer">
            {t.cta}
          </a>
          <p className={s.note}>{t.note}</p>
        </div>
      </div>
    </section>
  );
}
