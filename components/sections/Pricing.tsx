import type { ComponentType, SVGProps } from "react";
import { getTranslations } from "next-intl/server";
import { Building, Calendar, Cross, Document, Spark, Users } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { CallButton } from "@/components/ui/Buttons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tick } from "@/components/ui/Tick";
import { raw } from "@/lib/i18n";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

// One icon per price factor, in the order the brief lists them.
const factorIcons: Icon[] = [Document, Spark, Calendar, Users, Building];

/** No tariffs: what the price depends on, and when it becomes a number. */
export async function Pricing() {
  const t = await getTranslations("pricing");
  const c = await getTranslations("cta");
  const depends = raw<string[]>(t, "depends.items");
  const excluded = raw<string[]>(t, "excluded.items");
  const why = raw<string[]>(t, "why.items");

  return (
    <section id="pricing" aria-label={t("eyebrow")} className="section-y relative">
      <div className="shell">
        <SectionHeader eyebrow={t("eyebrow")} title={t.raw("title")} subtitle={t("subtitle")} />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Reveal>
            <Tilt max={3} className="h-full rounded-hero">
              <article className="h-full rounded-hero border border-line bg-card p-7 shadow-soft md:p-9">
                <p className="numerals font-serif text-lg text-gold-deep">01</p>
                <h3 className="mt-3 text-2xl font-medium text-ink">{t("depends.title")}</h3>
                <ul className="mt-7 space-y-3">
                  {depends.map((item, i) => {
                    const Icon = factorIcons[i] ?? Document;
                    return (
                      <li
                        key={item}
                        className="flex items-center gap-4 rounded-2xl border border-line bg-paper/60 px-4 py-3.5 text-[15px] text-ink"
                      >
                        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-card text-gold-deep shadow-soft">
                          <Icon className="size-4.5" />
                        </span>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </article>
            </Tilt>
          </Reveal>

          <Reveal delay={110}>
            <Tilt max={3} className="h-full rounded-hero">
              <article className="h-full rounded-hero border border-line bg-card p-7 shadow-soft md:p-9">
                <p className="numerals font-serif text-lg text-gold-deep">02</p>
                <h3 className="mt-3 text-2xl font-medium text-ink">{t("excluded.title")}</h3>
                <ul className="mt-7 divide-y divide-line border-y border-line">
                  {excluded.map((item) => (
                    <li key={item} className="flex gap-3.5 py-4 text-[15px] leading-snug text-ink-2">
                      <Cross className="mt-0.5 size-4 shrink-0 text-ink-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Tilt>
          </Reveal>

          <Reveal delay={60}>
            <Tilt max={3} className="h-full rounded-hero">
              <article className="h-full rounded-hero border border-line bg-card p-7 shadow-soft md:p-9">
                <p className="numerals font-serif text-lg text-gold-deep">03</p>
                <h3 className="mt-3 text-2xl font-medium text-ink">{t("why.title")}</h3>
                <p className="mt-4 leading-relaxed text-ink-2">{t("why.text")}</p>
                <ul className="mt-6 space-y-3.5">
                  {why.map((item, i) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-snug text-ink">
                      <Tick index={i} className="mt-0.5 size-5 shrink-0 text-gold-deep" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Tilt>
          </Reveal>

          <Reveal delay={170}>
            <Tilt max={3} rim={false} className="h-full rounded-hero [--spot-alpha:0.14]">
              <article className="grain relative flex h-full flex-col overflow-hidden rounded-hero bg-night p-7 text-on-night shadow-float md:p-9 dark:ring-1 dark:ring-inset dark:ring-gold/20">
                <span
                  aria-hidden="true"
                  className="absolute -bottom-32 -inset-e-32 size-80 rounded-full bg-[radial-gradient(closest-side,rgb(176_141_69/0.35),transparent)]"
                />
                <p className="numerals font-serif text-lg text-gold-light">04</p>
                <h3 className="mt-3 text-2xl font-medium text-on-night">{t("when.title")}</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-on-night-2">{t("when.text")}</p>
                <div className="mt-auto pt-10">
                  <CallButton color="paper" size="lg" source="modal">
                    {c("audit")}
                  </CallButton>
                </div>
              </article>
            </Tilt>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
