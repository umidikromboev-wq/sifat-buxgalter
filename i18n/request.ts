import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { typographAll } from "@/lib/typograph";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: typographAll((await import(`../messages/${locale}.json`)).default),
    timeZone: "Asia/Tashkent",
  };
});
