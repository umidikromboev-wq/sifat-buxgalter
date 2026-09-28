import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "flowbite-react";
import { ArrowUpRight, Instagram, MapPin, Telegram } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollLine } from "@/components/motion/Scroll";
import { LeadSection } from "@/components/sections/LeadSection";
import { PageHero } from "@/components/sections/PageHero";
import type { Locale } from "@/i18n/routing";
import { raw } from "@/lib/i18n";
import { pageAlternates } from "@/lib/metadata";
import { site } from "@/lib/site";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: "contactPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: pageAlternates(locale, "/contact"),
  };
}

/** Contact: what the ten minutes are for, then the form, then the office. */
export default async function ContactPage({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("contactPage");
  const lead = await getTranslations("lead");
  const steps = raw<{ title: string; text: string }[]>(t, "steps");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t.raw("title")} lead={t("lead")} />

      <section aria-label={t("tenTitle")} className="pb-8">
        <div className="shell">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-line pt-10">
            <h2 className="display-3 text-ink">{t("tenTitle")}</h2>
            <span className="rounded-full border border-gold/40 bg-gold-pale/60 px-3.5 py-1.5 text-sm font-medium text-gold-deep">
              {t("tenNote")}
            </span>
          </div>
          <ol className="relative mt-12 grid gap-10 md:grid-cols-3">
            <ScrollLine horizontal className="absolute inset-x-0 top-7 hidden h-px md:block" />
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 140} className="relative">
                <span className="numerals relative grid size-14 place-items-center rounded-full border border-line-strong bg-card font-serif text-2xl text-ink shadow-[0_0_0_8px_var(--paper)]">
                  {i + 1}
                </span>
                <h3 className="mt-7 text-xl font-medium text-ink">{step.title}</h3>
                <p className="mt-3 max-w-sm leading-relaxed text-ink-2">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <LeadSection source="contact" />

      <section aria-label={t("officeTitle")} className="pb-24 lg:pb-32">
        <div className="shell">
          <Reveal>
            <div className="grid overflow-hidden rounded-hero border border-line bg-card shadow-soft lg:grid-cols-12">
              <div className="flex flex-col gap-8 p-7 md:p-10 lg:col-span-5">
                <div className="flex gap-5">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-night text-gold-light">
                    <MapPin className="size-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-3">{t("officeTitle")}</p>
                    <p className="mt-2 text-xl font-medium leading-snug text-ink">{lead("address")}</p>
                    <p className="mt-1 text-ink-3">{lead("hours")}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button as="a" color="ghost" size="md" href={site.maps.yandex} target="_blank" rel="noopener noreferrer">
                    {t("mapsYandex")}
                    <ArrowUpRight className="size-4" />
                  </Button>
                  <Button as="a" color="ghost" size="md" href={site.maps.google} target="_blank" rel="noopener noreferrer">
                    {t("mapsGoogle")}
                    <ArrowUpRight className="size-4" />
                  </Button>
                </div>
                <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6 text-[15px] font-medium">
                  <a
                    href={site.telegram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink transition-colors hover:text-gold-deep"
                  >
                    <Telegram className="size-4 text-gold-deep" />
                    {site.telegram.handle}
                  </a>
                  <a
                    href={site.instagram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink transition-colors hover:text-gold-deep"
                  >
                    <Instagram className="size-4 text-gold-deep" />
                    {site.instagram.handle}
                  </a>
                </div>
              </div>
              {/* The embed needs no API key. It loads only when scrolled to,
                  and in the dark theme a filter turns the tiles dark too. */}
              <div className="relative min-h-80 border-t border-line lg:col-span-7 lg:min-h-104 lg:border-s lg:border-t-0">
                <iframe
                  title={t("mapTitle")}
                  src={site.maps.embed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 size-full border-0 dark:filter-[invert(0.92)_hue-rotate(180deg)_saturate(0.55)_brightness(0.95)]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
