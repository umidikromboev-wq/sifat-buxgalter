import { LogoMark } from "@/components/Logo";
import type { Story } from "@/lib/content/story/types";
import { ChapterHead } from "./Letter";
import { Rich } from "./Rich";
import s from "./Story.module.css";

// Тёмная интерлюдия: три года одной ошибки — от «всё в порядке» до суммы штрафа.
export function Trap({ t }: { t: Story["trap"] }) {
  return (
    <section className={s.trap} aria-labelledby="trap-h">
      <div className={s.col}>
        <ChapterHead num={t.num} id="trap-h" title={t.title} onDark />
        <p className={s.trapIntro}>
          <Rich text={t.intro} />
        </p>
      </div>
      <div className={s.colWide}>
        <ol className={s.years}>
          {t.steps.map((st, i) => (
            <li key={st.year} className={`${s.year} reveal`} data-last={i === t.steps.length - 1 || undefined}>
              <span className={s.yearN}>{st.year}</span>
              <h3 className={s.yearT}>{st.title}</h3>
              <p>{st.text}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className={s.col}>
        <div className={`${s.sum} reveal`}>
          <p className={s.sumL}>{t.sumLabel}</p>
          <p className={`${s.sumN} num`}>
            {t.sum} <span>{t.sumNote}</span>
          </p>
        </div>
        <p className={s.trapOutro}>
          <Rich text={t.outro} />
        </p>
      </div>
    </section>
  );
}

export function Beliefs({ t }: { t: Story["beliefs"] }) {
  return (
    <section className={s.chapter} aria-labelledby="beliefs-h">
      <div className={s.col}>
        <ChapterHead num={t.num} id="beliefs-h" title={t.title} />
        <p className={s.bodyP}>
          <Rich text={t.intro} />
        </p>
        <ol className={s.beliefs}>
          {t.items.map((it) => (
            <li key={it.think} className={`${s.belief} reveal`}>
              <p className={s.think}>
                <span className={s.label}>{t.thinkLabel}</span>
                <s>{it.think}</s>
              </p>
              <p className={s.truth}>
                <span className={s.label}>{t.truthLabel}</span>
                <Rich text={it.truth} />
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Stack({ t }: { t: Story["stack"] }) {
  return (
    <section className={s.chapter} aria-labelledby="stack-h">
      <div className={s.col}>
        <ChapterHead num={t.num} id="stack-h" title={t.title} />
        <p className={s.bodyP}>
          <Rich text={t.intro} />
        </p>
        <ul className={`${s.stack} reveal`}>
          {t.rows.map((r) => (
            <li key={r.what} className={s.stackRow}>
              <span className={s.tick} aria-hidden="true" />
              <div>
                <h3 className={s.stackT}>{r.what}</h3>
                <p className={s.stackD}>{r.detail}</p>
                {r.tag && <p className={s.stackTag}>{r.tag}</p>}
              </div>
            </li>
          ))}
        </ul>
        <p className={s.stackNote}>
          <Rich text={t.note} />
        </p>
      </div>
    </section>
  );
}

export function Guarantee({ t }: { t: Story["guarantee"] }) {
  return (
    <section className={s.chapter} aria-labelledby="guar-h">
      <div className={s.col}>
        <div className={`${s.guar} reveal`}>
          <ChapterHead num={t.num} id="guar-h" title={t.title} />
          <p className={s.guarText}>
            <Rich text={t.text} />
          </p>
          <p className={s.guarCond}>
            <Rich text={t.condition} />
          </p>
          <Seal text={t.seal} />
        </div>
      </div>
    </section>
  );
}

function Seal({ text }: { text: string }) {
  const ring = `${text} · ${text} · `;
  return (
    <div className={s.seal} aria-hidden="true">
      <svg className={s.sealRing} viewBox="0 0 120 120">
        <defs>
          <path id="seal-ring" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="33" fill="none" stroke="currentColor" strokeWidth="1" />
        <text className={s.sealText}>
          <textPath href="#seal-ring">{ring.toUpperCase()}</textPath>
        </text>
      </svg>
      <LogoMark className={s.sealMark} />
    </div>
  );
}

export function NotFor({ t }: { t: Story["notFor"] }) {
  return (
    <section className={s.chapter} aria-labelledby="notfor-h">
      <div className={s.col}>
        <ChapterHead num={t.num} id="notfor-h" title={t.title} />
        <p className={s.bodyP}>
          <Rich text={t.intro} />
        </p>
        <ul className={s.nolist}>
          {t.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <p className={s.bodyP}>
          <Rich text={t.outro} />
        </p>
      </div>
    </section>
  );
}

export function Next({ t }: { t: Story["next"] }) {
  return (
    <section className={s.chapter} aria-labelledby="next-h">
      <div className={s.col}>
        <ChapterHead num={t.num} id="next-h" title={t.title} />
        <ol className={s.path}>
          {t.steps.map((st, i) => (
            <li key={st.title} className={`${s.pathStep} reveal`}>
              <span className={`${s.pathN} num`}>{i + 1}</span>
              <div>
                <h3 className={s.stackT}>{st.title}</h3>
                <p className={s.stackD}>{st.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Signature({ sign, ps }: { sign: Story["sign"]; ps: Story["ps"] }) {
  return (
    <section className={s.signSec} aria-label="P.S.">
      <div className={s.col}>
        <p className={s.closing}>{sign.closing}</p>
        <div className={s.signs}>
          {sign.people.map((p) => (
            <p key={p.name} className={s.signP}>
              <span className={s.signName}>{p.name}</span>
              <span className={s.signRole}>{p.role}</span>
            </p>
          ))}
        </div>
        <div className={s.ps}>
          {ps.map((p) => (
            <p key={p}>
              <Rich text={p} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
