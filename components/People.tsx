import type { CSSProperties } from "react";
import type { Content } from "@/lib/content/types";
import { REVIEWS } from "@/lib/site";
import { Glyph } from "./ui/Glyph";
import { SectionHead } from "./ui/Kit";
import s from "./People.module.css";

// Эксперт слева, четыре цифры справа сеткой 2×2. Фото Иброхима ждём: пока монограмма, не чужое лицо.
export function Expert({ t }: { t: Content["expert"] }) {
  return (
    <section aria-labelledby="exp-h">
      <SectionHead id="exp-h" kicker={t.kicker} title={t.h2} />
      <div className="wrap grid12" data-stagger>
        <article className={`card ${s.person}`}>
          <div className={s.personHead}>
            <span className={s.mono} aria-hidden="true">
              {t.name.slice(0, 1)}
            </span>
            <div>
              <h3 className={s.name}>{t.name}</h3>
              <p className={s.role}>{t.role}</p>
            </div>
          </div>
          <p className={s.bio}>{t.bio}</p>
        </article>
        <dl className={s.stats}>
          {t.stats.map((it) => (
            <div key={it.label} className={`card ${s.stat}`}>
              <dt className={s.value}>
                {it.value}
                {it.unit && <span>{it.unit}</span>}
              </dt>
              <dd className={s.label}>{it.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// Три вертикальных видео-отзыва. Пока ссылки нет, карточка не кликается и честно пишет «скоро».
export function Reviews({ t }: { t: Content["reviews"] }) {
  return (
    <section aria-labelledby="rev-h">
      <SectionHead id="rev-h" kicker={t.kicker} title={t.h2} lead={t.lead} />
      <div className="wrap grid12">
        <ul className={s.reviews} data-stagger>
          {REVIEWS.map((r, i) => {
            const n = String(i + 1).padStart(2, "0");
            const inner = (
              <>
                <img className={s.poster} src={r.poster} alt={`${t.label} ${n}`} width={r.w} height={r.h} loading="lazy" decoding="async" style={{ objectPosition: r.pos } as CSSProperties} />
                <span className={s.play} aria-hidden="true">
                  <Glyph name="play" />
                </span>
                <span className={s.caption}>
                  <span className={s.capTitle}>
                    {t.label} {n}
                  </span>
                  {!r.url && <span className={s.capSoon}>{t.soon}</span>}
                </span>
              </>
            );
            return (
              <li key={n} className={s.review}>
                {r.url ? (
                  <a className={s.reviewLink} href={r.url} target="_blank" rel="noopener noreferrer" aria-label={`${t.play} ${n}`}>
                    {inner}
                  </a>
                ) : (
                  <div className={`${s.reviewLink} ${s.isSoon}`}>{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
