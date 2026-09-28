import { getTranslations } from "next-intl/server";
import { Instagram, MapPin, Phone, Telegram } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { LeadForm } from "@/components/lead/LeadForm";
import { Heading } from "@/components/motion/Heading";
import { raw } from "@/lib/i18n";
import type { Lead } from "@/lib/lead";
import { site } from "@/lib/site";

/** The closing form: what the call is on the left, the form on the right. */
export async function LeadSection({ source = "form" }: { source?: Lead["source"] }) {
  const t = await getTranslations("lead");
  const p = await getTranslations("promises");
  const steps = raw<string[]>(t, "steps");
  // Three contract clauses under the form — the reasons to press the button:
  // §1 the 10-minute answer, §2 our mistake is our fine, §5 the NDA.
  const promises = raw<{ title: string }[]>(p, "items");
  const clauses = [1, 2, 5].map((n) => ({ n, title: promises[n - 1].title }));

  return (
    <section id="contact" aria-label={t("eyebrow")} className="section-y relative scroll-mt-4">
      <div className="shell">
        <Reveal variant="scale">
          <div className="grid overflow-hidden rounded-hero border border-line bg-card shadow-float lg:grid-cols-12">
            <div className="grain relative overflow-hidden bg-night p-8 text-on-night md:p-12 lg:col-span-5">
              <span
                aria-hidden="true"
                className="absolute -bottom-40 -inset-e-40 size-96 rounded-full bg-[radial-gradient(closest-side,rgb(176_141_69/0.3),transparent)]"
              />
              <p className="eyebrow text-gold-light">{t("eyebrow")}</p>
              <Heading text={t.raw("title")} className="display-2 mt-6 text-on-night" />
              <p className="mt-5 max-w-sm leading-relaxed text-on-night-2">{t("subtitle")}</p>

              <div className="mt-10">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-on-night-3">{t("stepsTitle")}</p>
                  <span className="whitespace-nowrap rounded-full border border-gold/40 px-3 py-1 text-xs font-medium text-gold-light">
                    {t("notSales")}
                  </span>
                </div>
                <ol className="mt-5 space-y-4">
                  {steps.map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="numerals grid size-8 shrink-0 place-items-center rounded-full bg-white/6 font-serif text-base text-gold-light">
                        {i + 1}
                      </span>
                      <p className="pt-1 leading-snug text-on-night">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-10 space-y-5 border-t border-night-line pt-8 text-[15px]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-on-night-3">{t("phonesLabel")}</p>
                  <div className="mt-2 flex flex-col gap-1">
                    {site.phones.map((phone) => (
                      <a
                        key={phone.href}
                        href={phone.href}
                        className="inline-flex items-center gap-2.5 text-lg font-medium tabular-nums text-on-night transition-colors hover:text-gold-light"
                      >
                        <Phone className="size-4 text-gold-light" />
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-on-night-3">{t("telegramLabel")}</p>
                  <a
                    href={site.telegram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2.5 text-lg font-medium text-on-night transition-colors hover:text-gold-light"
                  >
                    <Telegram className="size-4 text-gold-light" />
                    {site.telegram.handle}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-on-night-3">{t("instagramLabel")}</p>
                  <a
                    href={site.instagram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2.5 text-lg font-medium text-on-night transition-colors hover:text-gold-light"
                  >
                    <Instagram className="size-4 text-gold-light" />
                    {site.instagram.handle}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-on-night-3">{t("officeLabel")}</p>
                  <a
                    href={site.maps.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex gap-2.5 text-on-night-2 transition-colors hover:text-gold-light"
                  >
                    <MapPin className="mt-0.5 size-4 shrink-0 text-gold-light" />
                    {t("address")}
                  </a>
                </div>
                <p className="text-sm text-on-night-3">{t("hours")}</p>
              </div>
            </div>

            <div className="flex flex-col p-7 md:p-12 lg:col-span-7">
              <h3 className="text-2xl font-medium text-ink">{t("formTitle")}</h3>
              <div className="mt-8">
                <LeadForm source={source} />
              </div>
              <ul className="mt-10 grid gap-3 border-t border-line pt-8 sm:grid-cols-3 lg:mt-auto">
                {clauses.map((clause) => (
                  <li key={clause.n} className="flex gap-3 text-sm leading-snug text-ink-2">
                    <span className="numerals font-serif text-lg leading-none text-gold-deep">§{clause.n}</span>
                    {clause.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
