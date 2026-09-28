import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { CallButton } from "@/components/ui/Buttons";
import { raw } from "@/lib/i18n";

/**
 * The chief accountant. There is no photo yet, so the portrait frame holds a
 * monogram inside a slowly turning gold ring; drop a photo into the frame
 * (public/team/ibrohim.jpg) when there is one.
 */
export async function Expert() {
  const t = await getTranslations("expert");
  const facts = raw<{ value: string; text: string }[]>(t, "facts");
  const initial = t("name").charAt(0);

  return (
    <section aria-label={t("eyebrow")} className="section-y relative">
      <div className="shell">
        <Reveal variant="scale">
          <Tilt max={2} rim={false} className="rounded-hero [--spot-alpha:0.12]">
            <div className="grain relative grid overflow-hidden rounded-hero bg-night text-on-night shadow-float lg:grid-cols-12 dark:ring-1 dark:ring-inset dark:ring-gold/20">
              <span
                aria-hidden="true"
                className="absolute -inset-s-40 -top-40 size-130 rounded-full bg-[radial-gradient(closest-side,rgb(176_141_69/0.28),transparent)]"
              />

              <div className="relative flex items-center justify-center p-10 lg:col-span-5 lg:p-14">
                <figure className="relative w-full max-w-85">
                  <div className="gold-ring rounded-[36px] p-[1.5px]">
                    <div
                      role="img"
                      aria-label={t("photoAlt")}
                      className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[35px] bg-[radial-gradient(120%_90%_at_50%_0%,var(--night-3),var(--night))]"
                    >
                      <span
                        aria-hidden="true"
                        className="text-gold select-none font-serif text-[180px] font-medium italic leading-none"
                      >
                        {initial}
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-8 bottom-8 h-px bg-[linear-gradient(90deg,transparent,rgb(226_198_138/0.6),transparent)]"
                      />
                    </div>
                  </div>
                  <figcaption className="absolute -bottom-5 inset-s-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold/30 bg-night-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
                    {t("role")}
                  </figcaption>
                </figure>
              </div>

              <div className="relative p-8 pt-4 md:p-12 lg:col-span-7 lg:py-14 lg:ps-4">
                <p className="eyebrow text-gold-light">{t("eyebrow")}</p>
                <h2 className="display-2 mt-6 text-on-night">{t("name")}</h2>
                <p className="mt-2 text-lg text-gold-light">{t("role")}</p>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-night-2">{t("intro")}</p>

                <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-night-line bg-night-line sm:grid-cols-2">
                  {facts.map((fact, i) => (
                    <div
                      key={fact.text}
                      className={`flex flex-col-reverse justify-end bg-night-2 p-5 ${i === facts.length - 1 ? "sm:col-span-2" : ""}`}
                    >
                      <dt className="mt-1.5 text-sm leading-snug text-on-night-2">{fact.text}</dt>
                      <dd className="numerals font-serif text-3xl font-medium text-gold-light">{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-10">
                  <CallButton color="paper" size="lg" source="modal">
                    {t("cta")}
                  </CallButton>
                </div>
              </div>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  );
}
