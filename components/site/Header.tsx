"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Phone } from "@/components/icons";
import { CallButton } from "@/components/ui/Buttons";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./Theme";
import { navSections, type NavSection } from "./nav";

/**
 * Transparent over the hero; once the page moves it condenses into a
 * floating glass bar. It steps out of the way while you read downwards and
 * comes back the moment you scroll up. On the home page the link for the
 * section you're in carries a gold marker.
 */
export function Header() {
  const t = useTranslations("nav");
  const c = useTranslations("cta");
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState<NavSection | null>(null);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      setScrolled(y > 16);
      if (y < 320) setHidden(false);
      else if (delta > 6) setHidden(true);
      else if (delta < -6) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sections = navSections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visible.set(entry.target.id, entry.intersectionRatio);
        let best: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        setActive(bestRatio > 0 ? (best as NavSection) : null);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.01, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out",
        hidden && "translate-y-[-120%]",
      )}
    >
      <div className={cn("transition-[padding] duration-500 ease-out", scrolled ? "px-2 pt-2 sm:px-3 sm:pt-3" : "px-0 pt-0")}>
        <div
          className={cn(
            "mx-auto flex h-17 items-center justify-between gap-3 transition-[max-width,background-color,border-color,box-shadow,border-radius,padding] duration-500 ease-out",
            scrolled
              ? "glass max-w-304 rounded-full pe-2 ps-4 sm:pe-2.5 sm:ps-5"
              : "max-w-310 rounded-none border border-transparent px-4 sm:px-6 md:px-8",
          )}
        >
          <Link href="/" aria-label={site.name} className="shrink-0 rounded-full">
            <Logo id="logo-header" />
          </Link>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {navSections.map((id) => (
                <li key={id}>
                  <Link
                    href={{ pathname: "/", hash: id }}
                    className={cn(
                      "relative block whitespace-nowrap rounded-full px-3 py-2 text-[14px] font-medium transition-colors duration-300",
                      active === id ? "text-ink" : "text-ink-2 hover:text-ink",
                    )}
                  >
                    {t(id)}
                    {active === id ? (
                      <motion.span
                        layoutId="nav-marker"
                        className="absolute inset-x-3 -bottom-px h-px bg-(image:--gold-fill)"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <a
              href={site.phones[0].href}
              className="hidden items-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-[14px] font-medium tabular-nums text-ink transition-colors hover:text-gold-deep 2xl:inline-flex"
            >
              <Phone className="size-4 text-gold-deep" />
              {site.phones[0].display}
            </a>
            {/* Visibility lives on a wrapper: the switcher's own `inline-flex`
                would otherwise beat `hidden`, since cn() doesn't dedupe. */}
            <div className="hidden min-[375px]:block">
              <LocaleSwitcher compact />
            </div>
            <ThemeToggle />
            <div className="hidden md:block">
              <CallButton size="md" source="modal" className="whitespace-nowrap">
                {c("callShort")}
              </CallButton>
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
