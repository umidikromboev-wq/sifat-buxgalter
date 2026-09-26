"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { altPathFor } from "@/content/altpath";
import type { Locale } from "@/content/services";
import { contacts, ui } from "@/content/site";
import { homePath, sectionPath } from "@/content/routes";

export default function Header({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const pathname = usePathname();
  const altPath = altPathFor(pathname, locale);
  const [open, setOpen] = useState(false);
  const links = [
    [sectionPath(locale, "services"), t.nav.services],
    [sectionPath(locale, "pricing"), t.nav.pricing],
    [sectionPath(locale, "team"), t.nav.team],
    [sectionPath(locale, "faq"), t.nav.faq],
    [sectionPath(locale, "contact"), t.nav.contact],
  ];
  return (
    <header className="header">
      <div className="wrap">
        <Link href={homePath(locale)} className="brand">
          <img src="/mark.png" alt="" width={26} height={27} /> <span>SIFAT</span>BUXGALTER
        </Link>
        <nav className="nav" aria-label="Main">
          {links.map(([href, label]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-right">
          <a className="header-phone" href={contacts.phone1Href}>
            {contacts.phone1}
          </a>
          <Link className="lang" href={altPath} hrefLang={locale === "uz" ? "ru" : "uz"}>
            {t.langSwitch}
          </Link>
          <Link className="btn btn-primary btn-sm" href={sectionPath(locale, "contact")}>
            {t.headerCta}
          </Link>
          <button className="menu-btn" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>
      <div className={"mobile-nav" + (open ? " open" : "")}>
        {links.map(([href, label]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <a href={contacts.phone1Href}>{contacts.phone1}</a>
      </div>
    </header>
  );
}
