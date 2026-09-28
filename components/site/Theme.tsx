"use client";

import type { MouseEvent, ReactNode } from "react";
import { useTranslations } from "next-intl";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { Moon, Sun } from "@/components/icons";
import { cn } from "@/lib/cn";

/**
 * Light and dark themes. The visitor's OS setting decides until they press
 * the toggle; after that their choice is remembered. next-themes sets the
 * class before the first paint, so there is no flash of the wrong theme.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  );
}

/**
 * Sun in the dark theme, moon in the light one — both are rendered and CSS
 * shows the right one, so the server HTML never guesses the theme wrong.
 *
 * Where the browser supports View Transitions, the new theme spreads out in a
 * circle from the button; elsewhere, and with reduced motion, it just switches.
 */
export function ThemeToggle({ tone = "ink", className }: { tone?: "ink" | "paper"; className?: string }) {
  const t = useTranslations("a11y");
  const { resolvedTheme, setTheme } = useTheme();

  function toggle(event: MouseEvent<HTMLButtonElement>) {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (typeof document.startViewTransition !== "function" || reduce) {
      setTheme(next);
      return;
    }

    const { clientX: x, clientY: y } = event;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const transition = document.startViewTransition(() => {
      // Apply the class ourselves so the "after" snapshot is taken with the
      // new theme; next-themes then persists the choice and agrees with it.
      const root = document.documentElement;
      root.classList.toggle("dark", next === "dark");
      root.classList.toggle("light", next === "light");
      root.style.colorScheme = next;
      setTheme(next);
    });
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 750, easing: "cubic-bezier(0.16, 1, 0.3, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t("theme")}
      title={t("theme")}
      className={cn(
        "group relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-full border transition-colors duration-300",
        tone === "ink"
          ? "border-line-strong text-ink hover:border-ink"
          : "border-white/15 text-on-night hover:border-white/40",
        className,
      )}
    >
      <Moon className="size-4.5 transition-[transform,opacity] duration-500 ease-out group-hover:-rotate-12 dark:translate-y-6 dark:rotate-90 dark:opacity-0" />
      <Sun className="absolute size-4.5 -translate-y-6 -rotate-90 opacity-0 transition-[transform,opacity] duration-500 ease-out group-hover:rotate-45 dark:translate-y-0 dark:rotate-0 dark:opacity-100" />
    </button>
  );
}
