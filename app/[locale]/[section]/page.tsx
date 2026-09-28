import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ClientLogos from "@/components/ClientLogos";
import CtaSection from "@/components/CtaSection";
import JsonLd, { breadcrumbLd, faqLd } from "@/components/JsonLd";
import { home } from "@/content/home";
import { contactExtra, pages, pricingIncluded, privacyText, servicesRouter, thanksExtra } from "@/content/pages";
import { homePath, isLocale, kindFromSection, locales, sectionPath, sections, servicePath, siteUrl, type PageKind } from "@/content/routes";
import { serviceOrder, services } from "@/content/services";
import { contacts, ui } from "@/content/site";

type Props = { params: Promise<{ locale: string; section: string }> };

export function generateStaticParams() {
  const out: { locale: string; section: string }[] = [];
  for (const l of locales) for (const s of Object.values(sections[l])) out.push({ locale: l, section: s });
  return out;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, section } = await params;
  if (!isLocale(locale)) return {};
  const kind = kindFromSection(locale, section);
  if (!kind) return {};
  const p = pages[locale][kind];
  return {
    title: p.title,
    description: p.description,
    robots: kind === "thanks" ? { index: false } : undefined,
    alternates: {
      canonical: siteUrl + sectionPath(locale, kind),
      languages: { uz: siteUrl + sectionPath("uz", kind), ru: siteUrl + sectionPath("ru", kind), "x-default": siteUrl + sectionPath("uz", kind) },
    },
    openGraph: { title: p.title, description: p.description, url: siteUrl + sectionPath(locale, kind) },
  };
}

function Hero({ locale, kind }: { locale: "uz" | "ru"; kind: PageKind }) {
  const p = pages[locale][kind];
  const t = ui[locale];
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <Link href={homePath(locale)}>{t.breadcrumbHome}</Link>
          <span>›</span>
          {p.eyebrow.split("·")[0].trim()}
        </div>
        <div className="eyebrow">{p.eyebrow}</div>
        <h1>{p.h1}</h1>
        <p className="lead">{p.lead}</p>
      </div>
    </section>
  );
}

export default async function SectionPage({ params }: Props) {
  const { locale, section } = await params;
  if (!isLocale(locale)) notFound();
  const kind = kindFromSection(locale, section);
  if (!kind) notFound();
  const t = ui[locale];
  const h = home[locale];
  const p = pages[locale][kind];
  const crumbs = breadcrumbLd([
    { name: t.breadcrumbHome, url: siteUrl + homePath(locale) },
    { name: p.h1, url: siteUrl + sectionPath(locale, kind) },
  ]);

  if (kind === "services") {
    const r = servicesRouter[locale];
    return (
      <>
        <Hero locale={locale} kind={kind} />
        <section className="section-tight">
          <div className="wrap">
            <div className="eyebrow">{r.title}</div>
            <p className="lead" style={{ marginBottom: 20 }}>{r.lead}</p>
            <div className="router">
              {r.items.map((it) => (
                <Link key={it.id} href={servicePath(locale, it.id)} className="router-item">
                  <span className="router-q">{it.situation}</span>
                  <span className="router-a">{it.answer}</span>
                  <span className="more">{t.readMore}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="section-tight" style={{ paddingTop: 0 }}>
          <div className="wrap grid-3">
            {serviceOrder.map((id) => {
              const s = services[locale][id];
              return (
                <Link key={id} href={servicePath(locale, id)} className="card card-link">
                  <div className="eyebrow" style={{ marginBottom: 8 }}>
                    {s.eyebrow}
                  </div>
                  <h3>{s.title.split(/ — |: |, /)[0].trim()}</h3>
                  <p style={{ margin: "0 0 8px", fontWeight: 600 }}>{s.h1}</p>
                  <p style={{ margin: 0, color: "var(--ink-2)", fontSize: 15 }}>{s.lead.split(". ")[0]}.</p>
                  <div className="more">{t.readMore}</div>
                </Link>
              );
            })}
          </div>
        </section>
        <CtaSection locale={locale} eyebrow={h.cta.eyebrow} source="services-hub" />
        <JsonLd data={crumbs} />
      </>
    );
  }

  if (kind === "pricing") {
    return (
      <>
        <Hero locale={locale} kind={kind} />
        <section className="section-tight">
          <div className="wrap">
            <div className="grid-4">
              {h.pricing.cards.map((c) => (
                <div className="card" key={c.title}>
                  <h3>{c.title}</h3>
                  <p style={{ margin: 0, color: "var(--ink-2)", fontSize: 15 }}>{c.text}</p>
                </div>
              ))}
            </div>
            <div className="included">
              <h2 style={{ fontSize: 28 }}>{pricingIncluded[locale].title}</h2>
              <ul className="checklist">
                {pricingIncluded[locale].items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <p className="muted" style={{ marginTop: 14, fontSize: 15 }}>{pricingIncluded[locale].note}</p>
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
                {h.compare.rows.slice(-4).map(([k, a, b]) => (
                  <tr key={k}>
                    <td>{k}</td>
                    <td data-l={h.compare.colNow}>{a}</td>
                    <td data-l={h.compare.colUs}>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="faq" style={{ marginTop: 40 }}>
              <h2>{h.faq.h2}</h2>
              {h.faq.items.slice(-2).map((f) => (
                <details key={f.q} open>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <CtaSection locale={locale} eyebrow={h.cta.eyebrow} text={h.pricing.cta.replace(" →", "")} source="pricing" />
        <JsonLd data={crumbs} />
        <JsonLd data={faqLd(h.faq.items.slice(-2))} />
      </>
    );
  }

  if (kind === "team") {
    return (
      <>
        <Hero locale={locale} kind={kind} />
        <section className="section-tight">
          <div className="wrap">
            <div className="grid-2">
              {h.team.people.map((pp) => (
                <div className="card person" key={pp.name}>
                  <div className="avatar">{pp.initial}</div>
                  <div>
                    <div className="role">{pp.role}</div>
                    <h3>{pp.name}</h3>
                    <ul>
                      {pp.facts.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40 }}>
              <div className="eyebrow">{h.promises.eyebrow}</div>
              <h2>{h.promises.h2}</h2>
              <ol className="promises">
                {h.promises.items.map((pr, i) => (
                  <li key={pr.title}>
                    <div className="num">§ {i + 1}</div>
                    <div>
                      <h3>{pr.title}</h3>
                      <p>{pr.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div style={{ marginTop: 40 }}>
              <div className="eyebrow">{h.clients.eyebrow}</div>
              <h2>{h.clients.h2}</h2>
              <p className="lead">{h.clients.lead}</p>
              <ClientLogos />
            </div>
          </div>
        </section>
        <CtaSection locale={locale} eyebrow={h.cta.eyebrow} source="team" />
        <JsonLd data={crumbs} />
      </>
    );
  }

  if (kind === "faq") {
    const all = [
      ...h.faq.items,
      ...serviceOrder.flatMap((id) => services[locale][id].faq),
    ].filter((f, i, arr) => arr.findIndex((x) => x.q === f.q) === i);
    return (
      <>
        <Hero locale={locale} kind={kind} />
        <section className="section-tight">
          <div className="wrap faq">
            {all.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
        <CtaSection locale={locale} eyebrow={h.cta.eyebrow} source="faq" />
        <JsonLd data={crumbs} />
        <JsonLd data={faqLd(all)} />
      </>
    );
  }

  if (kind === "contact") {
    const c = contactExtra[locale];
    return (
      <>
        <Hero locale={locale} kind={kind} />
        <CtaSection locale={locale} eyebrow={h.cta.eyebrow} source="contact" />
        <section className="section-tight">
          <div className="wrap">
            <h2 style={{ fontSize: 28 }}>{c.title}</h2>
            <ol className="process">
              {c.steps.map((st) => (
                <li key={st.t}>
                  <h3>{st.t}</h3>
                  <p>{st.d}</p>
                </li>
              ))}
            </ol>
            <p className="muted" style={{ marginTop: 16, maxWidth: 720 }}>{c.noSale}</p>
          </div>
        </section>
        <section className="section-tight" style={{ paddingTop: 0 }}>
          <div className="wrap grid-2">
            <div className="card">
              <h3>{t.footer.office}</h3>
              <p style={{ margin: 0 }}>{t.footer.address}</p>
              <p className="muted">{t.footer.landmark}</p>
              <a href={contacts.map} target="_blank" rel="noopener">
                {t.footer.mapLink}
              </a>
            </div>
            <div className="card">
              <h3>{t.footer.contact}</h3>
              <div className="phones">
                <a href={contacts.phone1Href}>{contacts.phone1}</a>
                <a href={contacts.phone2Href}>{contacts.phone2}</a>
              </div>
              <p style={{ marginTop: 10 }}>
                <a href={contacts.telegram}>Telegram {contacts.telegramHandle}</a> ·{" "}
                <a href={contacts.instagram}>Instagram @sifatbuxgalter</a>
              </p>
              <p className="muted" style={{ margin: 0 }}>
                {t.footer.online}
              </p>
            </div>
          </div>
        </section>
        <JsonLd data={crumbs} />
      </>
    );
  }

  if (kind === "privacy") {
    return (
      <>
        <Hero locale={locale} kind={kind} />
        <section className="section-tight prose">
          <div className="wrap">
            {privacyText[locale].map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </section>
      </>
    );
  }

  // thanks
  const th = thanksExtra[locale];
  return (
    <>
      <Hero locale={locale} kind={kind} />
      <section className="section-tight">
        <div className="wrap">
          <div className="card" style={{ maxWidth: 640 }}>
            <h3>{th.title}</h3>
            <ol className="prep">
              {th.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ol>
          </div>
          <p className="muted" style={{ marginTop: 28, marginBottom: 6 }}>{th.telegram}</p>
          <div className="phones">
            <a href={contacts.phone1Href}>{contacts.phone1}</a>
            <a href={contacts.telegram}>Telegram {contacts.telegramHandle}</a>
          </div>
          <p style={{ marginTop: 24 }}>
            <Link className="btn btn-ghost" href={homePath(locale)}>
              ← {t.breadcrumbHome}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
