import { getTranslations } from "next-intl/server";
import { Instagram, MapPin, Phone, Telegram } from "@/components/icons";
import { Link } from "@/i18n/navigation";
import { raw } from "@/lib/i18n";
import { serviceKeys, site } from "@/lib/site";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { Logo } from "./Logo";
import { ThemeToggle } from "./Theme";
import { navSections } from "./nav";

export async function Footer() {
  const t = await getTranslations();
  const badges = raw<string[]>(t, "footer.badges");

  return (
    <footer className="grain relative overflow-hidden bg-night text-on-night dark:border-t dark:border-white/5">
      <div className="shell pb-8 pt-20 md:pt-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" aria-label={site.name} className="inline-flex rounded-full">
              <Logo id="logo-footer" tone="paper" />
            </Link>
            <p className="mt-6 max-w-sm leading-relaxed text-on-night-2">{t("footer.tagline")}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full border border-night-line px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-on-night-2"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label={t("footer.navTitle")} className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-on-night-3">{t("footer.navTitle")}</p>
            <ul className="mt-5 space-y-3">
              {navSections.map((id) => (
                <li key={id}>
                  <Link
                    href={{ pathname: "/", hash: id }}
                    className="text-on-night-2 transition-colors hover:text-gold-light"
                  >
                    {t(`nav.${id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t("footer.servicesTitle")} className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-on-night-3">
              {t("footer.servicesTitle")}
            </p>
            <ul className="mt-5 space-y-3">
              {serviceKeys.map((key) => (
                <li key={key}>
                  <Link
                    href={{ pathname: "/services", hash: key }}
                    className="text-on-night-2 transition-colors hover:text-gold-light"
                  >
                    {t(`services.items.${key}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-on-night-3">
              {t("footer.contactTitle")}
            </p>
            <ul className="mt-5 space-y-3">
              {site.phones.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    className="inline-flex items-center gap-2.5 font-medium tabular-nums text-on-night transition-colors hover:text-gold-light"
                  >
                    <Phone className="size-4 text-gold-light" />
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.telegram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-medium text-on-night transition-colors hover:text-gold-light"
                >
                  <Telegram className="size-4 text-gold-light" />
                  {site.telegram.handle}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-medium text-on-night transition-colors hover:text-gold-light"
                >
                  <Instagram className="size-4 text-gold-light" />
                  {site.instagram.handle}
                </a>
              </li>
              <li>
                <a
                  href={site.maps.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2.5 text-on-night-2 transition-colors hover:text-gold-light"
                >
                  <MapPin className="mt-1 size-4 shrink-0 text-gold-light" />
                  {t("lead.address")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="text-gold pointer-events-none mt-16 select-none whitespace-nowrap pb-[0.12em] text-center font-serif text-[clamp(2.75rem,11vw,10.5rem)] font-medium italic leading-[0.95] tracking-[-0.03em] opacity-90"
        >
          {site.name}
        </p>

        <div className="mt-10 flex flex-col-reverse gap-5 border-t border-night-line pt-8 text-sm text-on-night-3 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-2.5">
            <LocaleSwitcher tone="paper" />
            <ThemeToggle tone="paper" />
          </div>
        </div>
      </div>
    </footer>
  );
}
