import type { CSSProperties } from "react";
import { getTranslations } from "next-intl/server";
import { Button } from "flowbite-react";
import { Telegram } from "@/components/icons";
import { Odometer } from "@/components/motion/Odometer";
import { CallButton } from "@/components/ui/Buttons";
import { site } from "@/lib/site";
import { ReportCard } from "./ReportCard";

const step = (n: number) => ({ "--intro": n }) as CSSProperties;

export async function Hero() {
  const t = await getTranslations("hero");
  const c = await getTranslations("cta");

  return (
    <section className="relative isolate overflow-hidden pb-20 pt-[calc(var(--header-h)+36px)] md:pb-28 lg:pt-[calc(var(--header-h)+52px)]">
      <div aria-hidden="true" className="aurora absolute inset-0 -z-10">
        <span />
        <span />
        <span />
      </div>
      <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10" />

      <div className="shell grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <div className="intro" style={step(0)}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-card/70 py-1.5 pe-4 ps-2.5 text-[13px] font-medium text-ink shadow-soft backdrop-blur">
              <span className="relative flex size-2.5" aria-hidden="true">
                <span className="absolute inset-0 animate-ping-soft rounded-full bg-[#2f9e6b]" />
                <span className="relative size-2.5 rounded-full bg-[#2f9e6b]" />
              </span>
              {t("badge")}
            </span>
          </div>

          <p className="eyebrow intro mt-7" style={step(1)}>
            {t("eyebrow")}
          </p>

          <h1 className="display-1 mt-5 text-ink">
            <span className="line-mask">
              <span className="line-inner intro-line" style={step(2)}>
                {t("titleA")}
              </span>
            </span>
            <span className="line-mask">
              <span className="line-inner intro-line text-gold animate-gold-shift italic" style={step(3)}>
                {t("titleB")}
              </span>
            </span>
          </h1>

          <ul className="mt-8 space-y-2.5">
            {(["l1", "l2", "l3"] as const).map((key, i) => (
              <li
                key={key}
                className="intro flex gap-4 text-[17px] leading-relaxed text-ink-2 md:text-lg"
                style={step(5 + i)}
              >
                <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rotate-45 bg-gold" />
                <span>
                  {t.rich(key, {
                    b: (chunks) => <strong className="font-semibold text-ink">{chunks}</strong>,
                  })}
                </span>
              </li>
            ))}
          </ul>

          <div className="intro mt-9 grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto]" style={step(8)}>
            <div className="glass rounded-card p-5 sm:p-6">
              <p className="max-w-md text-[15px] leading-relaxed text-ink-2">{t("note")}</p>
              {/* Side by side when they fit, stacked at equal width when not. */}
              <div className="mt-5 flex flex-wrap gap-3 *:grow">
                <CallButton size="lg" source="hero" magnetic className="w-full">
                  {c("call")}
                </CallButton>
                <Button as="a"
                  color="ghost"
                  size="lg"
                  href={site.telegram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Telegram className="size-5" />
                  {c("telegram")}
                </Button>
              </div>
            </div>

            <div className="card relative flex flex-col justify-between overflow-hidden p-6 shadow-soft sm:w-49">
              <span
                aria-hidden="true"
                className="absolute -inset-e-10 -top-10 size-32 rounded-full bg-[radial-gradient(closest-side,rgb(226_198_138/0.55),transparent)]"
              />
              <Odometer value={String(site.since)} gold className="font-serif text-[64px] font-medium" />
              <p className="mt-4 text-sm leading-snug text-ink-2">{t("statLabel")}</p>
            </div>
          </div>
        </div>

        {/* Dropped a little on desktop so the Telegram bubble has room above it. */}
        <div className="lg:col-span-5 xl:pt-20">
          <ReportCard />
        </div>
      </div>
    </section>
  );
}
