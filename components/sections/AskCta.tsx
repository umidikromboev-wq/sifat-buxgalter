import { getTranslations } from "next-intl/server";
import { Button } from "flowbite-react";
import { ArrowSwap } from "@/components/icons";
import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

/** The one gold button on the page, with a slowly turning halo behind it. */
export async function AskCta() {
  const t = await getTranslations("ask");
  const c = await getTranslations("cta");

  return (
    <section aria-label={t("eyebrow")} className="section-y relative isolate overflow-hidden">
      <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10 opacity-70" />
      <div
        aria-hidden="true"
        className="absolute inset-s-1/2 top-1/2 -z-10 size-190 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(226_198_138/0.5),transparent)] dark:opacity-35"
      />
      <div className="shell">
        <SectionHeader align="center" eyebrow={t("eyebrow")} title={t.raw("title")} subtitle={t("text")} className="max-w-4xl" />
        <Reveal delay={350} className="mt-12 flex justify-center">
          <Magnetic strength={0.3}>
            {/* A hairline of turning gold hugs the pill: the conic ring shows
                only in the 1.5px the padding leaves around the button. */}
            <span className="gold-ring inline-flex rounded-full p-[1.5px] shadow-[0_24px_60px_-24px_rgb(176_141_69/0.9)]">
              <Button href="#contact" color="gold" size="xl" className="shadow-none">
                {c("audit")}
                <ArrowSwap />
              </Button>
            </span>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
