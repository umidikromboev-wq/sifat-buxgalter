"use client";

import { useId, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/cn";

/** RU | UZ, with the ink pill sliding to whichever is current. */
export function LocaleSwitcher({
  tone = "ink",
  compact = false,
  className,
}: {
  tone?: "ink" | "paper";
  /** Narrower buttons below `sm`, so it fits a 375px header. */
  compact?: boolean;
  className?: string;
}) {
  const t = useTranslations("a11y");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  // Header, drawer and footer each mount a switcher; a shared layoutId would
  // make the pill fly between them.
  const pillId = useId();

  return (
    <div
      role="group"
      aria-label={t("language")}
      className={cn(
        "relative inline-flex rounded-full border p-1 transition-opacity",
        tone === "ink" ? "border-line-strong bg-card/50" : "border-white/15 bg-white/5",
        pending && "opacity-60",
        className,
      )}
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-pressed={active}
            disabled={pending}
            onClick={() => startTransition(() => router.replace(pathname, { locale: code, scroll: false }))}
            className={cn(
              "relative z-10 h-8 rounded-full text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-300",
              compact ? "min-w-9 px-2 sm:min-w-11 sm:px-3" : "min-w-11 px-3",
              active
                ? tone === "ink"
                  ? "text-paper"
                  : "text-night"
                : tone === "ink"
                  ? "text-ink-3 hover:text-ink"
                  : "text-on-night-2 hover:text-on-night",
            )}
          >
            {active ? (
              <motion.span
                layoutId={pillId}
                className={cn("absolute inset-0 -z-10 rounded-full", tone === "ink" ? "bg-ink" : "bg-on-night")}
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            ) : null}
            {code}
          </button>
        );
      })}
    </div>
  );
}
