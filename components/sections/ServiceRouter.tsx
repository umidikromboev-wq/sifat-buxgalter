"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "flowbite-react";
import { Alert, ArrowSwap, Percent, Shield } from "@/components/icons";
import { CallButton } from "@/components/ui/Buttons";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

type Option = { key: "fine" | "urgent" | "taxes"; label: string; title: string; text: string };

const icons = { fine: Shield, urgent: Alert, taxes: Percent } as const;

/**
 * The hub's three-way router: pick the situation you're in, get the one next
 * step that fits it. Urgent cases get a phone number, not a form.
 */
export function ServiceRouter({
  title,
  options,
  ctas,
}: {
  title: string;
  options: Option[];
  ctas: Record<Option["key"], string>;
}) {
  const [selected, setSelected] = useState<Option["key"]>(options[0].key);
  const current = options.find((option) => option.key === selected) ?? options[0];

  return (
    <div className="mt-14 rounded-hero border border-line bg-card/80 p-3 shadow-lift backdrop-blur md:p-4">
      <p className="px-4 pb-4 pt-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-3">{title}</p>
      <div role="radiogroup" aria-label={title} className="grid gap-2 md:grid-cols-3">
        {options.map((option) => {
          const Icon = icons[option.key];
          const active = option.key === selected;
          return (
            <button
              key={option.key}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setSelected(option.key)}
              className={cn(
                "relative flex items-center gap-4 rounded-2xl px-4 py-4 text-left transition-colors duration-300",
                active ? "text-paper" : "text-ink hover:bg-paper",
              )}
            >
              {active ? (
                <motion.span
                  layoutId="router-pill"
                  className="absolute inset-0 rounded-2xl bg-ink"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              ) : null}
              <span
                className={cn(
                  "relative grid size-11 shrink-0 place-items-center rounded-xl border transition-colors duration-300",
                  active ? "border-paper/20 text-paper" : "border-line text-gold-deep",
                  option.key === "urgent" && !active && "text-danger",
                )}
              >
                <Icon className="size-5" />
              </span>
              <span className="relative text-[15px] font-medium leading-snug">{option.label}</span>
            </button>
          );
        })}
      </div>

      <div className="relative overflow-hidden px-4 pb-4 pt-8 md:px-6 md:pb-6">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <h2 className="display-3 text-ink">{current.title}</h2>
              <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink-2">{current.text}</p>
            </div>
            {current.key === "urgent" ? (
              <Button href={site.phones[0].href} color="ink" size="lg" className="shrink-0">
                {ctas.urgent} · {site.phones[0].display}
                <ArrowSwap />
              </Button>
            ) : (
              <CallButton size="lg" source="services" className="shrink-0">
                {ctas[current.key]}
              </CallButton>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
