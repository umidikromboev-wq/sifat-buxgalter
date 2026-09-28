"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button, Drawer, DrawerItems, useDrawerContext } from "flowbite-react";
import { ArrowUpRight, Cross, Instagram, Menu, Phone, Telegram } from "@/components/icons";
import { CallButton } from "@/components/ui/Buttons";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { navSections } from "./nav";

/**
 * Flowbite's DrawerHeader hard-codes an English "Close menu" for screen
 * readers; this one says it in the page's language. It reuses the drawer's
 * id, which the dialog points its aria-describedby at.
 */
function DrawerTitle({ title, closeLabel }: { title: string; closeLabel: string }) {
  const { id, onClose } = useDrawerContext();
  return (
    <div className="mb-8 flex items-center justify-between">
      <p id={id} className="pt-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
        {title}
      </p>
      <button
        type="button"
        onClick={onClose}
        aria-label={closeLabel}
        className="-me-2 grid size-11 place-items-center rounded-full text-ink-3 transition-colors hover:bg-sand hover:text-ink"
      >
        <Cross className="size-5" />
      </button>
    </div>
  );
}

export function MobileMenu() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t("a11y.menu")}
        aria-expanded={open}
        className="grid size-11 place-items-center rounded-full border border-line-strong text-ink transition-colors hover:border-ink xl:hidden"
      >
        <Menu className="size-5" />
      </button>

      {/* Flowbite keeps the closed drawer in the DOM, off-screen but still
          focusable; `inert` takes it out of the tab order and the
          accessibility tree until it opens. */}
      <Drawer open={open} onClose={close} position="right" aria-label={t("a11y.menu")} inert={!open}>
        <DrawerTitle title={t("nav.menu")} closeLabel={t("a11y.close")} />
        <DrawerItems className="flex flex-1 flex-col">
          <nav aria-label="Mobile">
            <ol className="border-t border-line">
              {navSections.map((id, i) => (
                <li key={id} className="border-b border-line">
                  <Link
                    href={{ pathname: "/", hash: id }}
                    onClick={close}
                    className="group flex items-center justify-between py-4"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="numerals font-serif text-sm text-gold-deep">0{i + 1}</span>
                      <span className="font-serif text-[28px] font-medium leading-none text-ink">
                        {t(`nav.${id}`)}
                      </span>
                    </span>
                    <ArrowUpRight className="size-5 text-ink-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                  </Link>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-8 space-y-2">
            {site.phones.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="flex items-center gap-3 text-lg font-medium tabular-nums text-ink"
              >
                <Phone className="size-4 text-gold-deep" />
                {phone.display}
              </a>
            ))}
          </div>

          <div className="mt-auto space-y-3 pt-10">
            <div onClick={close}>
              <CallButton fullSized size="lg" source="modal">
                {t("cta.call")}
              </CallButton>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button
                as="a"
                color="ghost"
                size="lg"
                href={site.telegram.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("a11y.telegram")}
              >
                <Telegram className="size-5" />
                Telegram
              </Button>
              <Button
                as="a"
                color="ghost"
                size="lg"
                href={site.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="size-5" />
                Instagram
              </Button>
            </div>
            {/* The header drops the language switch below 375px; it lives here. */}
            <div className="flex justify-center pt-3 min-[375px]:hidden">
              <LocaleSwitcher />
            </div>
          </div>
        </DrawerItems>
      </Drawer>
    </>
  );
}
