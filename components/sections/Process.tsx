import { getTranslations } from "next-intl/server";
import { Button } from "flowbite-react";
import { ArrowSwap, Clock } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollLine } from "@/components/motion/Scroll";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { raw } from "@/lib/i18n";

/** Five steps on a gold spine that fills as you scroll along it. */
export async function Process() {
  const t = await getTranslations("process");
  const steps = raw<{ title: string; text: string }[]>(t, "steps");

  return (
    <section id="process" aria-label={t("eyebrow")} className="section-y relative">
      <div className="shell">
        <SectionHeader eyebrow={t("eyebrow")} title={t.raw("title")} subtitle={t("subtitle")} />

        <ol className="relative mt-16 grid gap-10 lg:mt-20 lg:grid-cols-5 lg:gap-6">
          <ScrollLine horizontal className="absolute inset-x-0 top-7 hidden h-px lg:block" />
          <ScrollLine className="absolute bottom-4 inset-s-7 top-4 w-px lg:hidden" />
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 110} className="relative ps-20 lg:ps-0">
              <span className="numerals absolute inset-s-0 top-0 grid size-14 place-items-center rounded-full border border-line-strong bg-card font-serif text-2xl text-ink shadow-[0_0_0_8px_var(--paper)] transition-colors duration-500 lg:relative">
                {i + 1}
              </span>
              <div className="lg:mt-8">
                <h3 className="flex items-center gap-2 text-xl font-medium leading-snug text-ink">
                  {step.title}
                  {i === 0 ? <Clock className="size-5 text-gold-deep" /> : null}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-2">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14">
          <Button href="#contact" color="ink" size="lg">
            {t("cta")}
            <ArrowSwap />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
