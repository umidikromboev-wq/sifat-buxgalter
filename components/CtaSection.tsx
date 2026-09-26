import type { Locale } from "@/content/services";
import { contacts, ui } from "@/content/site";
import LeadForm from "./LeadForm";

export default function CtaSection({
  locale,
  eyebrow,
  title,
  text,
  source,
}: {
  locale: Locale;
  eyebrow: string;
  title?: string;
  text?: string;
  source: string;
}) {
  const t = ui[locale];
  return (
    <section className="cta" id="ariza-section">
      <div className="wrap cta-grid">
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h2>{title ?? t.ctaTitle}</h2>
          <p className="lead">{text ?? t.ctaText}</p>
          <p className="muted" style={{ marginTop: 24, marginBottom: 4 }}>
            {t.orCall}
          </p>
          <div className="phones">
            <a href={contacts.phone1Href}>{contacts.phone1}</a>
            <a href={contacts.phone2Href}>{contacts.phone2}</a>
          </div>
          <p style={{ marginTop: 16 }}>
            <a href={contacts.telegram} target="_blank" rel="noopener">
              {t.telegramLine}
            </a>
          </p>
        </div>
        <LeadForm locale={locale} source={source} />
      </div>
    </section>
  );
}
