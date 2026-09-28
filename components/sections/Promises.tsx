import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { CallButton } from "@/components/ui/Buttons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { raw } from "@/lib/i18n";

/**
 * §1–§7, set like the clauses of a contract on a sheet of paper, with a
 * signature that writes itself at the bottom when the sheet comes into view.
 */
export async function Promises() {
  const t = await getTranslations("promises");
  const items = raw<{ title: string; text: string }[]>(t, "items");

  return (
    <section id="promises" aria-label={t("eyebrow")} className="section-y relative bg-sand/70">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeader eyebrow={t("eyebrow")} title={t.raw("title")} subtitle={t("subtitle")} />
            <Reveal delay={300} className="mt-10">
              <CallButton size="lg" source="modal">
                {t("cta")}
              </CallButton>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-hero border border-line bg-card shadow-lift">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-e-6 top-6 select-none font-serif text-[180px] italic leading-none text-gold/10"
              >
                §
              </span>

              <ol className="relative divide-y divide-line">
                {items.map((item, i) => (
                  <li
                    key={item.title}
                    className="group grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 px-6 py-7 transition-colors duration-500 hover:bg-gold-pale/30 md:grid-cols-[5rem_minmax(0,1fr)] md:px-10 md:py-8"
                  >
                    <span className="numerals font-serif text-3xl text-gold-deep transition-transform duration-500 ease-out group-hover:-translate-y-0.5 md:text-4xl">
                      §{i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium leading-snug text-ink md:text-xl">{item.title}</h3>
                      <p className="mt-2 leading-relaxed text-ink-2">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <Reveal
                variant="fade"
                className="relative flex flex-wrap items-end justify-between gap-6 border-t border-line bg-paper/60 px-6 py-7 md:px-10"
              >
                <div>
                  <svg
                    viewBox="0 0 220 64"
                    className="signature h-14 w-48 text-ink"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path
                      pathLength={1}
                      d="M6 44c10-2 18-20 22-30 3-8-2-10-5-2-4 11-6 26-2 30 5 5 14-16 18-20 3-3 3 4 2 8-1 5 1 8 5 4 6-6 9-14 14-14 4 0 0 10 4 11 6 1 12-10 18-10 5 0 2 9 7 9 7 0 13-12 21-12 5 0 3 8 8 8 9 0 22-14 36-16 14-2 26 2 38 6"
                    />
                    <path pathLength={1} d="M40 56c40-4 90-6 150-4" />
                  </svg>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-3">{t("sign")}</p>
                </div>
                <span className="rounded-full border border-gold/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
                  NDA · 1С · 24/7
                </span>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
