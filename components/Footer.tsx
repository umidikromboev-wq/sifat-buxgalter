import type { Content } from "@/lib/content/types";
import { SITE } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer({ t }: { t: Content["footer"] }) {
  const year = new Date().getFullYear();
  return (
    <footer className="ftr">
      <div className="wrap ftr-in">
        <div className="ftr-brand">
          <Logo />
          <p className="ftr-hours">{t.hours}</p>
        </div>
        <div>
          <p className="ftr-lbl">{t.addressLabel}</p>
          <p>{t.address}</p>
          <p className="ftr-dim">{t.landmark}</p>
          <a className="ftr-link" href={SITE.map} target="_blank" rel="noopener noreferrer">
            {t.mapLink} ↗
          </a>
        </div>
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
