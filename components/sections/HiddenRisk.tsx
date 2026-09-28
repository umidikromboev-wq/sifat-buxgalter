import { getTranslations } from "next-intl/server";
import { Alert } from "@/components/icons";
import { Odometer } from "@/components/motion/Odometer";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollLine } from "@/components/motion/Scroll";
import { Tilt } from "@/components/motion/Tilt";
import { CallButton } from "@/components/ui/Buttons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { raw } from "@/lib/i18n";

/** The black band: how a small error becomes a fine, and what one costs. */
export async function HiddenRisk() {
  const t = await getTranslations("risk");
  const steps = raw<{ title: string; text: string }[]>(t, "steps");

  return (
    <section id="risk" aria-label={t("eyebrow")} className="grain relative overflow-hidden bg-night text-on-night dark:border-y dark:border-white/5">
      <Tilt max={0} rim={false} className="section-y [--spot-alpha:0.09]">
        <div
          aria-hidden="true"
          className="absolute -inset-e-40 -top-40 size-160 rounded-full bg-[radial-gradient(closest-side,rgb(176_141_69/0.22),transparent)]"
        />
        <div className="shell relative">
          <SectionHeader tone="night" eyebrow={t("eyebrow")} title={t.raw("title")} subtitle={t("subtitle")} />

          <ol className="relative mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-10">
            <ScrollLine horizontal tone="night" className="absolute inset-x-0 top-9.5 hidden h-px md:block" />
            <ScrollLine tone="night" className="absolute bottom-6 inset-s-9.5 top-6 w-px md:hidden" />
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 160} className="relative ps-24 md:ps-0">
                <span className="numerals absolute inset-s-0 top-0 grid size-19 place-items-center rounded-full border border-night-line bg-night-2 font-serif text-3xl text-gold-light shadow-[0_0_0_8px_var(--night)] md:relative">
                  {i + 1}
                </span>
                <h3 className="text-xl font-medium text-on-night md:mt-8">{step.title}</h3>
                <p className="mt-3 max-w-sm leading-relaxed text-on-night-2">{step.text}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal variant="scale" className="mt-20">
            <div className="relative overflow-hidden rounded-hero border border-danger-light/25 bg-[linear-gradient(135deg,rgb(240_141_118/0.12),rgb(240_141_118/0.02)_60%)] p-8 md:p-12">
              <span aria-hidden="true" className="absolute inset-e-8 top-8 hidden text-danger-light/70 md:block">
                <span className="absolute inset-0 animate-ping-soft rounded-full bg-danger-light/20" />
                <Alert className="relative size-7" />
              </span>
              <div className="grid items-end gap-8 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-12">
                <p className="flex flex-wrap items-baseline gap-x-3 font-serif">
                  <Odometer
                    value={t("fineValue")}
                    className="text-[clamp(4.5rem,3rem+5vw,8rem)] font-medium text-danger-light"
                  />
                  <span className="font-sans text-xl font-medium text-on-night-2">{t("fineUnit")}</span>
                </p>
                <div className="lg:pb-4">
                  <p className="max-w-md text-xl leading-snug text-on-night">{t("fineLabel")}</p>
                  <p className="mt-3 text-on-night-3">{t("fineNote")}</p>
                </div>
                <div className="lg:pb-3">
                  <CallButton color="paper" size="lg" source="modal">
                    {t("cta")}
                  </CallButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Tilt>
    </section>
  );
}
