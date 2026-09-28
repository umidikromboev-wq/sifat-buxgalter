import { getTranslations } from "next-intl/server";
import { Button } from "flowbite-react";
import { Telegram } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { raw } from "@/lib/i18n";
import { site } from "@/lib/site";
import { FaqAccordion } from "./FaqAccordion";

export async function Faq() {
  const t = await getTranslations("faq");
  const c = await getTranslations("cta");
  const items = raw<{ q: string; a: string }[]>(t, "items");

  return (
    <section id="faq" aria-label={t("eyebrow")} className="section-y relative bg-sand/70">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeader eyebrow={t("eyebrow")} title={t.raw("title")} subtitle={t("subtitle")} />
            <Reveal delay={300} className="mt-8">
              <Button as="a" color="ghost" size="lg" href={site.telegram.href} target="_blank" rel="noopener noreferrer">
                <Telegram className="size-5" />
                {c("telegram")}
              </Button>
            </Reveal>
          </div>
        </div>
        <Reveal className="lg:col-span-8">
          <FaqAccordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}
