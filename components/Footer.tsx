import Link from "next/link";
import type { Content, Locale } from "@/lib/content/types";
import { articlePath, getPages, sectionPath, servicePath } from "@/lib/pages";
import { SITE } from "@/lib/site";
import { LogoMark } from "./Logo";
import { Glyph } from "./ui/Glyph";
import s from "./Footer.module.css";

// Колонки услуг и статей — сквозная перелинковка: каждая SEO-страница доступна с любой страницы сайта.
export function Footer({ t, lang }: { t: Content["footer"]; lang: Locale }) {
  const year = new Date().getFullYear();
  const { copy, services, articles } = getPages(lang);
  return (
    <footer id="aloqa" className={s.ftr}>
      <div className={`wrap grid12 ${s.in}`}>
        <div className={s.brand}>
          <Link href={`/${lang}`} className={s.logo}>
            <LogoMark className={s.mark} />
            <span>Sifat Buxgalter</span>
          </Link>
          <p className={s.dim}>{t.hours}</p>
          <p className={s.visit}>{t.visit}</p>
          <p className={s.lbl}>{t.addressLabel}</p>
          <p>{t.address}</p>
          {t.landmark && <p className={s.dim}>{t.landmark}</p>}
          <a className="more" href={SITE.map} target="_blank" rel="noopener noreferrer">
            {t.mapLink}
            <Glyph name="arrow" />
          </a>
        </div>
        <nav className={s.col} aria-label={copy.services.kicker}>
          <Link className={s.lbl} href={sectionPath(lang, "services")}>
            {copy.services.kicker}
          </Link>
          <ul>
            {Object.entries(services).map(([id, sv]) => (
              <li key={id}>
                <Link href={servicePath(lang, id)}>{sv.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className={s.col} aria-label={copy.articles.kicker}>
          <Link className={s.lbl} href={sectionPath(lang, "articles")}>
            {copy.articles.kicker}
          </Link>
          <ul>
            {Object.entries(articles).map(([id, a]) => (
              <li key={id}>
                <Link href={articlePath(lang, id)}>{a.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={s.col}>
          <p className={s.lbl}>{t.contacts}</p>
          <ul>
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
      <div className={`wrap ${s.base}`}>
        <span>
          © {year} {t.rights}
        </span>
      </div>
    </footer>
  );
}
