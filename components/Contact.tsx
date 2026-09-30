import type { Content, Locale } from "@/lib/content/types";
import { SITE } from "@/lib/site";
import { LeadForm } from "./LeadForm";
import { Glyph, Marker } from "./ui/Glyph";
import s from "./LeadForm.module.css";

// Заявка на тёмном листе: слева обещание и прямые контакты, справа стеклянная форма.
export function Contact({ t, lang }: { t: Content["form"]; lang: Locale }) {
  return (
    <section id="ariza" aria-labelledby="form-h">
      <div className="wrap grid12" data-stagger>
        <Marker />
        <div className={s.copy}>
          <p className="kicker">{t.kicker}</p>
          <h2 id="form-h" className="h2">
            {t.h2}
          </h2>
          <p className={s.sub}>{t.sub}</p>
          <p className={s.callL}>{t.orCall}</p>
          <ul className={s.call}>
            {SITE.phones.map((p) => (
              <li key={p.href}>
                <a className={`${s.phone} num`} href={p.href}>
                  <Glyph name="phone" />
                  {p.label}
                </a>
              </li>
            ))}
            <li>
              <a className={s.phone} href={SITE.telegram} target="_blank" rel="noopener noreferrer">
                <Glyph name="send" />
                {t.orTelegram}
              </a>
            </li>
          </ul>
        </div>
        <div className={s.formCol}>
          <LeadForm t={t} lang={lang} />
        </div>
      </div>
    </section>
  );
}
