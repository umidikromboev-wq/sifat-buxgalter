import type { ComponentType, SVGProps } from "react";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight, Globe, Grid, Ledger, Percent, Scale, Users } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { raw } from "@/lib/i18n";
import type { ServiceKey } from "@/lib/site";

type Item = { title: string; text: string; tags: string[] };

export const serviceIcons: Record<ServiceKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  accounting: Ledger,
  taxes: Percent,
  audits: Scale,
  payroll: Users,
  trade: Globe,
};

// A 12-column bento from 1280px: the two wide tiles sit in opposite corners,
// so the eye crosses the whole grid — accounting first, the gold "all
// services" last. Narrower, three-to-a-row cards get too thin, so tablets and
// small laptops get two columns with the wide tiles spanning both.
const layout: Record<ServiceKey, string> = {
  accounting: "xl:col-span-6",
  taxes: "xl:col-span-3",
  audits: "xl:col-span-3",
  payroll: "xl:col-span-3",
  trade: "xl:col-span-3",
};

export async function Services() {
  const t = await getTranslations("services");
  const c = await getTranslations("cta");
  const items = raw<Record<ServiceKey, Item>>(t, "items");
  const keys = Object.keys(layout) as ServiceKey[];

  return (
    <section id="services" aria-label={t("eyebrow")} className="section-y relative">
      <div className="shell">
        <SectionHeader eyebrow={t("eyebrow")} title={t.raw("title")} subtitle={t("subtitle")} />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:gap-5 xl:grid-cols-12">
          {keys.map((key, i) => {
            const Icon = serviceIcons[key];
            const item = items[key];
            const wide = key === "accounting";
            return (
              <Reveal key={key} delay={(i % 3) * 90} className={cn(layout[key], wide && "md:col-span-2 xl:col-span-6")}>
                <Tilt max={wide ? 3 : 5} className="h-full rounded-hero">
                  <Link
                    href={{ pathname: "/services", hash: key }}
                    className="group relative flex h-full min-h-75 flex-col overflow-hidden rounded-hero border border-line bg-card p-7 shadow-soft transition-shadow duration-500 hover:shadow-lift md:p-8"
                  >
                    {wide ? (
                      <span
                        aria-hidden="true"
                        className="numerals pointer-events-none absolute inset-e-8 top-16 select-none font-serif text-[200px] font-medium italic leading-none text-ink/4.5 transition-colors duration-700 group-hover:text-gold/15"
                      >
                        1С
                      </span>
                    ) : null}
                    <div className="flex items-start justify-between">
                      <span className="grid size-14 place-items-center rounded-2xl border border-line bg-paper text-gold-deep transition-colors duration-500 group-hover:border-gold/40 group-hover:bg-gold-pale">
                        <Icon className="size-6" />
                      </span>
                      <span className="grid size-10 place-items-center rounded-full border border-line text-ink-3 transition-all duration-500 ease-out group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                    <h3 className={cn("mt-10 font-medium tracking-[-0.015em] text-ink", wide ? "text-3xl" : "text-2xl")}>
                      {item.title}
                    </h3>
                    <p className={cn("relative mt-3 leading-relaxed text-ink-2", wide ? "max-w-md text-lg" : "text-[15px]")}>
                      {item.text}
                    </p>
                    <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-line bg-paper/70 px-3 py-1.5 text-xs font-medium text-ink-2"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <span className="sr-only">{c("more")}</span>
                  </Link>
                </Tilt>
              </Reveal>
            );
          })}

          <Reveal delay={180} className="md:col-span-2 xl:col-span-6">
            <Tilt max={3} rim={false} className="h-full rounded-hero [--spot-alpha:0.35]">
              <Link
                href="/services"
                className="sheen group relative flex h-full min-h-75 flex-col overflow-hidden rounded-hero bg-(image:--gold-fill) p-7 text-night shadow-[0_30px_60px_-30px_rgb(176_141_69/0.9)] md:p-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute -inset-e-16 -top-16 size-64 rounded-full border border-night/10"
                />
                <span
                  aria-hidden="true"
                  className="absolute -inset-e-4 -top-4 size-40 rounded-full border border-night/10"
                />
                <div className="flex items-start justify-between">
                  <span className="grid size-14 place-items-center rounded-2xl bg-night text-gold-light">
                    <Grid className="size-6" />
                  </span>
                </div>
                <h3 className="display-3 mt-10 text-night">{t("all.title")}</h3>
                <p className="mt-3 max-w-md text-lg leading-relaxed text-night/75">{t("all.text")}</p>
                <span className="mt-auto inline-flex items-center gap-3 pt-8 font-medium">
                  <span className="border-b border-night/40 pb-0.5 transition-colors group-hover:border-night">
                    {t("all.cta")}
                  </span>
                  <span className="grid size-11 place-items-center rounded-full bg-night text-on-night transition-transform duration-500 ease-out group-hover:translate-x-1.5">
                    <ArrowUpRight className="size-4" />
                  </span>
                </span>
              </Link>
            </Tilt>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
