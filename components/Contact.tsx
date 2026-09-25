import type { Content, Locale } from "@/lib/content/types";
import { SITE } from "@/lib/site";
import { LeadForm } from "./LeadForm";
import s from "./LeadForm.module.css";

export function Contact({ t, lang }: { t: Content["form"]; lang: Locale }) {
  return (
    <section id="ariza" className={`section ${s.section}`} aria-labelledby="form-h">
      <div className={`wrap ${s.grid}`}>
        <div>
          <p className={`kicker ${s.kicker}`}>{t.kicker}</p>
          <h2 id="form-h" className="h2">
            {t.h2}
          </h2>
          <p className={s.sub}>{t.sub}</p>
          <div className={s.call}>
            <p className={s.callL}>{t.orCall}</p>
            {SITE.phones.map((p) => (
              <div key={p.href}>
                <a className={`${s.phone} num`} href={p.href}>
                  {p.label}
                </a>
              </div>
            ))}
          </div>
          <a className={s.tg} href={SITE.telegram} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="currentColor" d="M21.9 4.3 18.7 19.4c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.2 13 1.4 11.5c-1-.3-1-1 .2-1.5L20.6 2.8c.9-.3 1.6.2 1.3 1.5Z" />
            </svg>
            <span>{t.orTelegram}</span>
          </a>
        </div>
        <LeadForm t={t} lang={lang} />
      </div>
    </section>
  );
}
