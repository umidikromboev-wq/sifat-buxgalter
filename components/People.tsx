import type { Content } from "@/lib/content/types";
import { REVIEWS } from "@/lib/site";
import { ReviewVideo } from "./ReviewVideo";
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

// Видео-отзывы: проигрываются прямо в карточке, второе запущенное ставит первое на паузу.
export function Reviews({ t }: { t: Content["reviews"] }) {
  return (
    <section aria-labelledby="rev-h">
      <SectionHead id="rev-h" kicker={t.kicker} title={t.h2} lead={t.lead} />
      <div className="wrap grid12">
        <ul className={s.reviews} data-stagger>
          {REVIEWS.map((r, i) => {
            const n = String(i + 1).padStart(2, "0");
            return (
              <li key={r.video} className={s.review}>
                <ReviewVideo review={r} person={t.items[i]} title={`${t.label} ${n}`} playLabel={`${t.play} ${n}`} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
