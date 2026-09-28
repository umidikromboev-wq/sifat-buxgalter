import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ClientLogos from "@/components/ClientLogos";
import CtaSection from "@/components/CtaSection";
import ReportCard from "@/components/ReportCard";
import JsonLd, { faqLd } from "@/components/JsonLd";
import { home } from "@/content/home";
import { homePath, isLocale, sectionPath, servicePath, siteUrl } from "@/content/routes";
import { contacts, ui } from "@/content/site";

type Props = { params: Promise<{ locale: string }> };

// Hero hisobot kartasidagi oy nomi yangilanib turishi uchun — kuniga bir marta qayta generatsiya
export const revalidate = 86400;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const h = home[locale];
  return {
    title: h.meta.title,
    description: h.meta.description,
    alternates: {
      canonical: siteUrl + homePath(locale),
      languages: { uz: siteUrl + homePath("uz"), ru: siteUrl + homePath("ru"), "x-default": siteUrl + homePath("uz") },
    },
    openGraph: { title: h.meta.title, description: h.meta.description, url: siteUrl + homePath(locale), locale: locale === "uz" ? "uz_UZ" : "ru_RU" },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const h = home[locale];
  const t = ui[locale];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">{h.hero.eyebrow}</div>
            <h1>
              {(() => { const i = h.hero.h1.indexOf(". "); return i > 0 ? (<><span className="h1-muted">{h.hero.h1.slice(0, i + 1)}</span>{h.hero.h1.slice(i + 2)}</>) : h.hero.h1; })()}
            </h1>
            <p className="lead">{h.hero.lead}</p>
            <div className="actions">
              <a className="btn btn-primary" href="#ariza">
                {h.hero.cta}
              </a>
              <a className="btn btn-ghost" href={contacts.telegram} target="_blank" rel="noopener">
                {h.hero.telegram}
              </a>
            </div>
            <p className="note">{h.hero.note}</p>
            <div className="hero-stat"><i>§</i><div><strong>{h.stats[0][0]}</strong><span>{h.stats[0][1]}</span></div></div>
          </div>
          <ReportCard s={h.hero.sample} locale={locale} />
        </div>
      </section>

      {/* TRIGGERS + 3 QUESTIONS */}
      <section id="holatlar" className="after-hero">
        <div className="wrap">
          <div className="eyebrow">{h.triggers.eyebrow}</div>
          <h2>{h.triggers.h2}</h2>
          <ul className="checklist" style={{ marginTop: 24 }}>
            {h.triggers.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="muted" style={{ marginTop: 20 }}>
            {h.triggers.note}
          </p>
          <div className="check">
            <div>
              <h3>{h.check.title}</h3>
              <p style={{ color: "#e6e0d0", margin: 0 }}>{h.check.intro}</p>
            </div>
            <div>
              <ol>
                {h.check.questions.map((q) => (
                  <li key={q.q}>
                    <span>{q.q}</span>
                    <span className="why">{q.why}</span>
                  </li>
                ))}
              </ol>
              <p className="outro-yes">{h.check.outroYes}</p>
              <p className="outro-no">
                {h.check.outroNo} <a href="#ariza">{h.check.link}</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section id="solishtiring" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head3">
            <div className="eyebrow">{h.compare.eyebrow}</div>
            <h2>{h.compare.h2}</h2>
            <p className="lead">{h.compare.lead}</p>
          </div>
          <table className="compare">
            <thead>
              <tr>
                <th></th>
                <th>{h.compare.colNow}</th>
                <th>{h.compare.colUs}</th>
              </tr>
            </thead>
            <tbody>
              {h.compare.rows.map(([k, a, b]) => (
                <tr key={k}>
                  <td>{k}</td>
                  <td data-l={h.compare.colNow}>{a}</td>
                  <td data-l={h.compare.colUs}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: 20 }}>
            {h.compare.note}{" "}
            <a href="#ariza" className="gold" style={{ fontWeight: 600, textDecoration: "none" }}>
              →
            </a>
          </p>
        </div>
      </section>

      <section className="stats-band" style={{ paddingTop: 0 }}>
        <div className="wrap stats">
          {h.stats.map(([n, l]) => (
            <div className="stat" key={n}>
              <strong>{n}</strong>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* RISK */}
      <section className="risk" id="xavf">
        <div className="wrap">
          <div className="eyebrow">{h.risk.eyebrow}</div>
          <h2>{h.risk.h2}</h2>
          <p className="lead">{h.risk.intro}</p>
          <ol className="steps">
            {h.risk.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <div className="big">{h.risk.big}</div>
          <p className="big-note">{h.risk.bigNote}</p>
          <p className="outro">{h.risk.outro}</p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="xizmatlar">
        <div className="wrap">
          <div className="head3">
            <div className="eyebrow">{h.services.eyebrow}</div>
            <h2>{h.services.h2}</h2>
            <p className="lead">{h.services.lead}</p>
          </div>
          <div className="grid-3" style={{ marginTop: 28 }}>
            {h.services.groups.map((g) => (
              <Link key={g.title} href={servicePath(locale, g.id)} className="card card-link">
                <h3>{g.title}</h3>
                <ul>
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <div className="more">{t.readMore}</div>
              </Link>
            ))}
            <Link href={sectionPath(locale, "services")} className="card card-link card-dark" style={{ display: "grid", alignContent: "end", fontWeight: 600, fontSize: 22, minHeight: 200 }}>
              {h.services.hubLink}
            </Link>
          </div>
        </div>
      </section>

      {/* PROMISES */}
      <section id="majburiyatlar" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head3">
            <div className="eyebrow">{h.promises.eyebrow}</div>
            <h2>{h.promises.h2}</h2>
            <p className="lead">{h.promises.lead}</p>
          </div>
          <ol className="promises">
            {h.promises.items.map((p, i) => (
              <li key={p.title}>
                <div className="num">§ {i + 1}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRICING */}
      <section id="narx" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="head3">
            <div className="eyebrow">{h.pricing.eyebrow}</div>
            <h2>{h.pricing.h2}</h2>
            <p className="lead">{h.pricing.intro}</p>
          </div>
          <div className="grid-4" style={{ marginTop: 28 }}>
            {h.pricing.cards.map((c) => (
              <div className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p style={{ margin: 0, color: "var(--ink-2)", fontSize: 15 }}>{c.text}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 24 }}>
            <a href="#ariza" className="gold" style={{ fontWeight: 600, textDecoration: "none" }}>
              {h.pricing.cta}
            </a>
            {" · "}
            <Link href={sectionPath(locale, "pricing")}>{t.pricingLink}</Link>
          </p>
        </div>
      </section>

      {/* WHO */}
      <section id="kimga">
        <div className="wrap">
          <div className="eyebrow">{h.who.eyebrow}</div>
          <h2>{h.who.h2}</h2>
          <div className="who">
            <div className="card yes">
              <h3>{h.who.yesTitle}</h3>
              <ul>
                {h.who.yes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="card no">
              <h3>{h.who.noTitle}</h3>
              <ul>
                {h.who.no.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="muted" style={{ marginTop: 18 }}>
            {h.who.note}
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section id="jamoa" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="eyebrow">{h.team.eyebrow}</div>
          <h2>{h.team.h2}</h2>
          <div className="grid-2" style={{ marginTop: 24 }}>
            {h.team.people.map((p) => (
              <div className="card person" key={p.name}>
                <div className="avatar">{p.initial}</div>
                <div>
                  <div className="role">{p.role}</div>
                  <h3>{p.name}</h3>
                  <ul>
                    {p.facts.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="tajriba" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head3">
            <div className="eyebrow">{h.clients.eyebrow}</div>
            <h2>{h.clients.h2}</h2>
            <p className="lead">{h.clients.lead}</p>
          </div>
          <ClientLogos />
        </div>
      </section>

      {/* FAQ */}
      <section id="savollar" style={{ paddingTop: 0 }}>
        <div className="wrap faq">
          <div className="eyebrow">{h.faq.eyebrow}</div>
          <h2>{h.faq.h2}</h2>
          {h.faq.items.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaSection locale={locale} eyebrow={h.cta.eyebrow} source="home" />
      <JsonLd data={faqLd(h.faq.items)} />
    </>
  );
}
