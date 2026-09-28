import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { CallButton } from "@/components/ui/Buttons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { raw } from "@/lib/i18n";

export async function Triggers() {
  const t = await getTranslations("triggers");
  const c = await getTranslations("cta");
  const items = raw<string[]>(t, "items");
  const questions = raw<string[]>(t, "card.questions");

  return (
    <section id="triggers" aria-label={t("eyebrow")} className="section-y relative">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <SectionHeader eyebrow={t("eyebrow")} title={t.raw("title")} subtitle={t("subtitle")} />

          <ol className="mt-14 border-t border-line">
            {items.map((item, i) => (
              <Reveal
                as="li"
                key={item}
                delay={i * 70}
                className="group relative grid grid-cols-[3rem_minmax(0,1fr)] items-baseline gap-4 border-b border-line py-6 md:grid-cols-[4rem_minmax(0,1fr)] md:py-7"
              >
                <span className="numerals font-serif text-2xl text-gold-deep transition-transform duration-500 ease-out group-hover:translate-x-1 md:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[17px] leading-snug text-ink md:text-xl md:leading-snug">{item}</p>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-px inset-s-0 h-px w-0 bg-(image:--gold-fill) transition-[width] duration-700 ease-out group-hover:w-full"
                />
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-5">
          <Reveal variant="scale" className="lg:sticky lg:top-28">
            <Tilt max={4} className="rounded-hero [--spot-alpha:0.16]">
              <div className="grain relative overflow-hidden rounded-hero bg-night p-8 text-on-night shadow-float md:p-10 dark:ring-1 dark:ring-inset dark:ring-gold/20">
                <span
                  aria-hidden="true"
                  className="absolute -inset-e-24 -top-24 size-72 rounded-full bg-[radial-gradient(closest-side,rgb(176_141_69/0.35),transparent)]"
                />
                <p className="eyebrow text-gold-light">{t("card.eyebrow")}</p>
                <h3 className="display-3 mt-6 text-on-night">{t("card.title")}</h3>
                <ol className="mt-8 space-y-5">
                  {questions.map((question, i) => (
                    <li key={question} className="flex gap-4">
                      <span className="numerals grid size-9 shrink-0 place-items-center rounded-full border border-gold/40 font-serif text-lg text-gold-light">
                        {i + 1}
                      </span>
                      <p className="pt-1 text-[17px] leading-snug text-on-night">{question}</p>
                    </li>
                  ))}
                </ol>
                <p className="mt-8 border-t border-night-line pt-6 text-on-night-2">{t("card.note")}</p>
                <div className="mt-6">
                  <CallButton color="paper" size="lg" source="modal">
                    {c("call")}
                  </CallButton>
                </div>
              </div>
            </Tilt>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
