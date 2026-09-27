import Link from "next/link";
import type { Content, Locale } from "@/lib/content/types";
import { articlePath, getPages, sectionPath, servicePath } from "@/lib/pages";
import { SITE } from "@/lib/site";
import { Logo } from "./Logo";

// Колонки услуг и статей — сквозная перелинковка: каждая SEO-страница доступна с любой страницы сайта.
export function Footer({ t, lang }: { t: Content["footer"]; lang: Locale }) {
  const year = new Date().getFullYear();
  const { copy, services, articles } = getPages(lang);
  return (
    <footer className="ftr">
      <div className="wrap ftr-in">
        <div className="ftr-brand">
          <Logo />
          <p className="ftr-hours">{t.hours}</p>
          <div className="ftr-addr">
            <p className="ftr-lbl">{t.addressLabel}</p>
            <p>{t.address}</p>
            <p className="ftr-dim">{t.landmark}</p>
            <a className="ftr-link" href={SITE.map} target="_blank" rel="noopener noreferrer">
              {t.mapLink} ↗
            </a>
          </div>
        </div>
        <nav aria-label={copy.services.kicker}>
          <p className="ftr-lbl">
            <Link href={sectionPath(lang, "services")}>{copy.services.kicker}</Link>
          </p>
          <ul className="ftr-list">
            {Object.entries(services).map(([id, s]) => (
              <li key={id}>
                <Link href={servicePath(lang, id)}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={copy.articles.kicker}>
          <p className="ftr-lbl">
            <Link href={sectionPath(lang, "articles")}>{copy.articles.kicker}</Link>
          </p>
          <ul className="ftr-list">
            {Object.entries(articles).map(([id, a]) => (
              <li key={id}>
                <Link href={articlePath(lang, id)}>{a.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="ftr-lbl">{t.contacts}</p>
          <ul className="ftr-list">
            {SITE.phones.map((p) => (
              <li key={p.href}>
                <a className="num" href={p.href}>
                  {p.label}
                </a>
              </li>
            ))}
            <li>
              <a href={SITE.telegram} target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </li>
            <li>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap ftr-base">
        <span>
          © {year} {t.rights}
        </span>
      </div>
    </footer>
  );
}
