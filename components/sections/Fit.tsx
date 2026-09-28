import { getTranslations } from "next-intl/server";
import { Cross } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { CallButton } from "@/components/ui/Buttons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tick } from "@/components/ui/Tick";
import { raw } from "@/lib/i18n";

export async function Fit() {
  const t = await getTranslations("fit");
  const c = await getTranslations("cta");
  const yes = raw<string[]>(t, "yes");
  const no = raw<string[]>(t, "no");

  return (
    <section id="fit" aria-label={t("eyebrow")} className="section-y relative bg-sand/70">
      <div className="shell">
        <SectionHeader eyebrow={t("eyebrow")} title={t.raw("title")} />

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Tilt max={3} className="h-full rounded-hero">
              <article className="relative h-full overflow-hidden rounded-hero border border-gold/30 bg-card p-7 shadow-lift md:p-10">
                <span
                  aria-hidden="true"
                  className="absolute -inset-e-24 -top-24 size-72 rounded-full bg-[radial-gradient(closest-side,rgb(226_198_138/0.45),transparent)]"
                />
                <h3 className="relative flex items-center gap-3 text-2xl font-medium text-ink">
                  <span className="grid size-10 place-items-center rounded-full bg-(image:--gold-fill) text-night">
                    <Tick className="size-5" />
                  </span>
                  {t("yesTitle")}
                </h3>
                <ul className="relative mt-8 divide-y divide-line border-t border-line">
                  {yes.map((item, i) => (
                    <li key={item} className="flex gap-4 py-5 text-[17px] leading-snug text-ink">
                      <Tick index={i} className="mt-0.5 size-5 shrink-0 text-gold-deep" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Tilt>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <Tilt max={3} rim={false} className="h-full rounded-hero [--spot-alpha:0.1]">
              <article className="grain relative h-full overflow-hidden rounded-hero bg-night p-7 text-on-night shadow-float md:p-10 dark:ring-1 dark:ring-inset dark:ring-gold/20">
                <h3 className="flex items-center gap-3 text-2xl font-medium">
                  <span className="grid size-10 place-items-center rounded-full border border-night-line text-on-night-2">
                    <Cross className="size-4" />
                  </span>
                  {t("noTitle")}
                </h3>
                <ul className="mt-8 divide-y divide-night-line border-t border-night-line">
                  {no.map((item) => (
                    <li key={item} className="flex gap-4 py-5 text-[17px] leading-snug text-on-night-2">
                      <Cross className="mt-1 size-4 shrink-0 text-danger-light/80" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Tilt>
          </Reveal>
        </div>

        <Reveal className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
          <CallButton size="lg" source="modal">
            {c("call")}
          </CallButton>
          <p className="max-w-md text-ink-2">{t("note")}</p>
        </Reveal>
      </div>
    </section>
  );
}
