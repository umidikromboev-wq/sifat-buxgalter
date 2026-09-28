import type { Locale } from "@/i18n/routing";
import type messages from "./messages/ru.json";

// Russian is the reference copy: a key missing from it is a type error, and
// `npm run check:messages` makes sure uz.json has exactly the same shape.
declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
    Messages: typeof messages;
  }
}
