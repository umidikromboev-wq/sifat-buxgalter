import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { LeadSection } from "@/components/sections/LeadSection";
import { PageHero } from "@/components/sections/PageHero";
import { Promises } from "@/components/sections/Promises";
import { ServiceRouter } from "@/components/sections/ServiceRouter";
import { serviceIcons } from "@/components/sections/Services";
import { CallButton } from "@/components/ui/Buttons";
import { Tick } from "@/components/ui/Tick";
import type { Locale } from "@/i18n/routing";
import { plainText, raw } from "@/lib/i18n";
import { pageAlternates } from "@/lib/metadata";
import { serviceKeys } from "@/lib/site";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: "servicesPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: pageAlternates(locale, "/services"),
  };
}

type Option = { key: "fine" | "urgent" | "taxes"; label: string; title: string; text: string };
type Detail = { forWhom: string; included: string[] };
type Item = { title: string; text: string; tags: string[] };

/** The services hub: a three-way router, then every service in detail. */
export default async function ServicesPage({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("servicesPage");
  const s = await getTranslations("services");
  const c = await getTranslations("cta");
  const details = raw<Record<string, Detail>>(t, "details");
  const items = raw<Record<string, Item>>(s, "items");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t.raw("title")} lead={t("lead")}>
        <ServiceRouter
          title={t("routerTitle")}
          options={raw<Option[]>(t, "router")}
          ctas={raw<Record<Option["key"], string>>(t, "routerCta")}
        />
      </PageHero>

      <section aria-label={plainText(t.raw("title"))} className="pb-24 lg:pb-32">
        <div className="shell space-y-5">
          {serviceKeys.map((key, i) => {
            const Icon = serviceIcons[key];
            const item = items[key];
            const detail = details[key];
            return (
              <Reveal key={key} id={key} className="scroll-mt-28">
                <Tilt max={1.5} className="rounded-hero">
                  <article className="grid gap-10 rounded-hero border border-line bg-card p-7 shadow-soft md:p-10 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-4">
                        <span className="grid size-14 place-items-center rounded-2xl border border-line bg-paper text-gold-deep">
                          <Icon className="size-6" />
                        </span>
                        <span className="numerals font-serif text-2xl text-gold-deep">0{i + 1}</span>
                      </div>
                      <h2 className="display-3 mt-8 text-ink">{item.title}</h2>
                      <p className="mt-4 text-lg leading-relaxed text-ink-2">{item.text}</p>
                      <div className="mt-8">
                        <CallButton size="lg" source="services">
                          {c("audit")}
                        </CallButton>
                      </div>
                    </div>
                    <div className="lg:col-span-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-3">{t("forWhom")}</p>
                      <p className="mt-3 text-lg leading-snug text-ink">{detail.forWhom}</p>
                      <p className="mt-9 text-xs font-semibold uppercase tracking-[0.18em] text-ink-3">{t("included")}</p>
                      <ul className="mt-3 divide-y divide-line border-y border-line">
                        {detail.included.map((line, j) => (
                          <li key={line} className="flex gap-3 py-3.5 text-[15px] text-ink">
                            <Tick index={j} className="mt-0.5 size-5 shrink-0 text-gold-deep" />
                            {line}
                          </li>
                        ))}
                      </ul>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <li key={tag} className="rounded-full border border-line bg-paper/70 px-3 py-1.5 text-xs font-medium text-ink-2">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Tilt>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Promises />
      <LeadSection source="services" />
    </>
  );
}
