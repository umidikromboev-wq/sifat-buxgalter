import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "flowbite-react";
import { Telegram } from "@/components/icons";
import { Heading } from "@/components/motion/Heading";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Buttons";
import type { Locale } from "@/i18n/routing";
import { raw } from "@/lib/i18n";
import { site } from "@/lib/site";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: "thanks" });
  return { title: t("metaTitle"), robots: { index: false, follow: false } };
}

/** After the form: while we dial, the visitor recalls three facts. */
export default async function ThankYouPage({ params }: Params) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("thanks");
  const facts = raw<{ title: string; text: string }[]>(t, "facts");

  return (
    <section className="relative isolate overflow-hidden pb-24 pt-[calc(var(--header-h)+64px)] lg:pb-32 lg:pt-[calc(var(--header-h)+96px)]">
      <div aria-hidden="true" className="aurora absolute inset-0 -z-10">
        <span />
        <span />
        <span />
      </div>
      <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10" />

      <div className="shell max-w-4xl text-center">
        <div className="intro mx-auto grid size-24 place-items-center rounded-full bg-(image:--gold-fill) p-px shadow-[0_20px_50px_-20px_rgb(176_141_69/0.9)]">
          <div className="grid size-full place-items-center rounded-full bg-night text-gold-light">
            <svg viewBox="0 0 24 24" className="thanks-check size-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path pathLength={1} d="m5 12.5 4.5 4.5L19 7.5" />
            </svg>
          </div>
        </div>
        <p className="eyebrow intro mt-10 justify-center" style={{ "--intro": 1 } as CSSProperties}>
          {t("eyebrow")}
        </p>
        <Heading as="h1" text={t.raw("title")} className="display-2 mx-auto mt-6 max-w-3xl text-ink" delay={150} />
        <p className="intro mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-2" style={{ "--intro": 4 } as CSSProperties}>
          {t("lead")}
        </p>

        <ol className="mt-14 grid gap-4 text-left md:grid-cols-3">
          {facts.map((fact, i) => (
            <Reveal as="li" key={fact.title} delay={500 + i * 130}>
              <div className="h-full rounded-hero border border-line bg-card p-6 shadow-soft">
                <span className="numerals font-serif text-4xl text-gold-deep">{i + 1}</span>
                <h2 className="mt-4 text-lg font-medium text-ink">{fact.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{fact.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={900} className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button as="a" color="ink" size="lg" href={site.telegram.href} target="_blank" rel="noopener noreferrer">
            <Telegram className="size-5" />
            {t("telegram")}
          </Button>
          <ButtonLink href="/" color="ghost" size="lg" arrow={false}>
            {t("back")}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
