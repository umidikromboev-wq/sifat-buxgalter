import { getTranslations } from "next-intl/server";
import { Odometer } from "@/components/motion/Odometer";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollWords } from "@/components/motion/Scroll";
import { CallButton } from "@/components/ui/Buttons";
import { raw } from "@/lib/i18n";

type Stat = { prefix: string; value: string; suffix: string; label: string };

/**
 * The manifest lights up word by word as it scrolls past, then four numbers
 * roll into place. The numbers are the only claims on the site we print this
 * large, so each is one we can stand behind.
 */
export async function Impact() {
  const t = await getTranslations("impact");
  const stats = raw<Stat[]>(t, "stats");

  return (
    <section aria-label={t("eyebrow")} className="section-y relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -inset-s-40 top-10 -z-10 size-130 rounded-full bg-[radial-gradient(closest-side,rgb(226_198_138/0.35),transparent)]"
      />
      <div className="shell">
        <Reveal variant="fade">
          <p className="eyebrow">{t("eyebrow")}</p>
        </Reveal>

        <ScrollWords
          className="display-1 mt-8 max-w-5xl"
          lines={[
            { text: t("manifestA"), className: "text-ink" },
            { text: t("manifestB"), className: "text-gold italic" },
          ]}
        />

        <Reveal delay={120}>
          <p className="mt-8 text-xl text-ink-2">{t("sub")}</p>
        </Reveal>

        <dl className="mt-16 grid border-t border-line sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 120}
              className="flex flex-col-reverse justify-end border-b border-line py-10 sm:odd:pe-8 sm:even:border-s sm:even:ps-8 lg:border-b-0 lg:border-s lg:px-8 lg:first:border-s-0 lg:first:ps-0"
            >
              <dt className="mt-5 max-w-68 text-[15px] leading-snug text-ink-3">{stat.label}</dt>
              <dd className="flex flex-wrap items-baseline gap-x-2.5 font-serif">
                {stat.prefix ? <span className="text-3xl italic text-ink-3">{stat.prefix}</span> : null}
                <Odometer value={stat.value} gold className="text-[clamp(4.25rem,2.5rem+4.5vw,7.25rem)] font-medium" />
                {stat.suffix ? (
                  <span className="font-sans text-lg font-medium text-ink-2">{stat.suffix}</span>
                ) : null}
              </dd>
            </Reveal>
          ))}
        </dl>

        <Reveal className="mt-12">
          <CallButton size="lg" source="modal">
            {t("cta")}
          </CallButton>
        </Reveal>
      </div>
    </section>
  );
}
