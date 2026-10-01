"use client";

import { useState } from "react";
import type { Content, Locale } from "@/lib/content/types";
import { SITE } from "@/lib/site";
import { Marker } from "./ui/Glyph";
import { Pill } from "./ui/Kit";
import s from "./Benefits.module.css";

// Лид-магнит: пять льгот со статьями НК прямо на сайте как образец, остальные под сферу — сообщением в Telegram Бекзоду.
export function Benefits({ t, lang }: { t: Content["benefits"]; lang: Locale }) {
  const [sphere, setSphere] = useState(t.spheres[0]);
  const href = `${SITE.telegram}?text=${encodeURIComponent(t.message.replace("{s}", sphere))}`;
  return (
    <section id="imtiyozlar" aria-labelledby="bn-h">
      <div className="wrap">
        <div className={`card card-dark ${s.box} reveal`}>
          <img className={s.img} src="/glass/desk.webp" alt={lang === "uz" ? "Buxgalter ish stoli, kechki ofis" : "Рабочий стол бухгалтера, вечерний офис"} width={880} height={663} loading="lazy" decoding="async" />
          <div className={`grid12 ${s.grid}`} data-stagger>
            <Marker />
            <div className={s.copy}>
              <p className="kicker">{t.kicker}</p>
              <h2 id="bn-h" className="h2">
                {t.h2}
              </h2>
              <p className={s.sub}>{t.sub}</p>
              <table className={s.sample}>
                <caption>{t.sampleTitle}</caption>
                <thead>
                  <tr>
                    {t.cols.map((c) => (
                      <th key={c} scope="col">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.sample.map((b) => (
                    <tr key={b.law}>
                      <th scope="row">{b.what}</th>
                      <td className={s.law}>{b.law}</td>
                      <td>{b.who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={`glass ${s.panel}`}>
              <fieldset className={s.chips}>
                <legend>
                  <b>{t.restTitle}</b>
                  {t.label}
                </legend>
                {t.spheres.map((o) => (
                  <label key={o} className={s.opt}>
                    <input type="radio" name="sphere" value={o} checked={sphere === o} onChange={() => setSphere(o)} />
                    <span>{o}</span>
                  </label>
                ))}
              </fieldset>
              <Pill label={t.cta} href={href} external />
              <p className={s.note}>{t.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
