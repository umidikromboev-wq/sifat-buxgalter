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
        </div>
        <LeadForm t={t} lang={lang} />
      </div>
    </section>
  );
}
