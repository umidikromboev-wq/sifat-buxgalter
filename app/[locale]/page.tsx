import { setRequestLocale } from "next-intl/server";
import { AskCta } from "@/components/sections/AskCta";
import { Clients } from "@/components/sections/Clients";
import { Compare } from "@/components/sections/Compare";
import { Expert } from "@/components/sections/Expert";
import { Faq } from "@/components/sections/Faq";
import { Fit } from "@/components/sections/Fit";
import { Hero } from "@/components/sections/Hero";
import { HiddenRisk } from "@/components/sections/HiddenRisk";
import { Impact } from "@/components/sections/Impact";
import { LeadSection } from "@/components/sections/LeadSection";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Promises } from "@/components/sections/Promises";
import { Services } from "@/components/sections/Services";
import { Triggers } from "@/components/sections/Triggers";
import type { Locale } from "@/i18n/routing";

// Section order is the brief's (§6), 2 through 16; header and footer live in the layout.
export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <Hero />
      <Triggers />
      <Compare />
      <Impact />
      <HiddenRisk />
      <Services />
      <Promises />
      <Pricing />
      <Fit />
      <Process />
      <Expert />
      <Clients />
      <Faq />
      <AskCta />
      <LeadSection />
    </>
  );
}
