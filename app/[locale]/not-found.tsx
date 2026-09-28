import { getTranslations } from "next-intl/server";
import { ButtonLink } from "@/components/ui/Buttons";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <section className="relative isolate overflow-hidden pb-32 pt-[calc(var(--header-h)+96px)]">
      <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10" />
      <div className="shell max-w-3xl text-center">
        <p className="text-gold numerals font-serif text-[clamp(7rem,20vw,14rem)] font-medium italic leading-none">404</p>
        <h1 className="display-2 mt-6 text-ink">{t("title")}</h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-ink-2">{t("text")}</p>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/">{t("back")}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
