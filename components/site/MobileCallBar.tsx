"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Phone, Telegram } from "@/components/icons";
import { CallButton } from "@/components/ui/Buttons";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

/**
 * On phones the primary action follows you: a glass bar slides up once the
 * hero is behind you, and steps aside while the lead form is on screen so
 * the two never compete.
 */
export function MobileCallBar() {
  const t = useTranslations();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let formOnScreen = false;
    const update = () => setVisible(window.scrollY > 640 && !formOnScreen);

    const form = document.getElementById("contact");
    const observer = new IntersectionObserver(([entry]) => {
      formOnScreen = entry.isIntersecting;
      update();
    });
    if (form) observer.observe(form);

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-3 bottom-3 z-40 transition-[transform,opacity] duration-500 ease-out lg:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[140%] opacity-0",
      )}
    >
      <div className="glass flex items-center gap-2 rounded-full p-1.5">
        <CallButton size="md" source="modal" className="flex-1">
          {t("cta.callShort")}
        </CallButton>
        <a
          href={site.phones[0].href}
          aria-label={t("a11y.callUs")}
          className="grid size-12 shrink-0 place-items-center rounded-full border border-line-strong bg-card text-ink"
        >
          <Phone className="size-5" />
        </a>
        <a
          href={site.telegram.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("a11y.telegram")}
          className="grid size-12 shrink-0 place-items-center rounded-full border border-line-strong bg-card text-ink"
        >
          <Telegram className="size-5" />
        </a>
      </div>
    </div>
  );
}
