import { ru } from "./content/ru";
import type { Content, Locale } from "./content/types";
import { uz } from "./content/uz";

export const SITE = {
  name: "Sifat Buxgalter",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sifat-buxgalter-site.vercel.app",
  phones: [
    { label: "+998 97 732 18 48", href: "tel:+998977321848" },
    { label: "+998 94 647 80 45", href: "tel:+998946478045" },
  ],
  telegram: "https://t.me/Davronbekov_Bekzod",
  instagram: "https://instagram.com/sifatbuxgalter",
  map: "https://maps.app.goo.gl/pBtkJ7jbAEkg3x3g7",
} as const;

export const CLIENTS = [
  { file: "avangard", name: "Avangard" },
  { file: "aiwa", name: "Aiwa" },
  { file: "rollton", name: "Роллтон" },
  { file: "klass-export", name: "Klass Export" },
  { file: "inesis", name: "Inesis" },
  { file: "profit-stone", name: "Profit Stone" },
  { file: "poytaxt", name: "Poytaxt Aqua Wave" },
  { file: "oq-tepa-dental", name: "Oq Tepa Dental" },
  { file: "bumble", name: "Bumble" },
  { file: "zhalyn-komir", name: "Жалын Көмір" },
  { file: "tsg", name: "TSG" },
  { file: "west-med", name: "West Med Group" },
] as const;

const CONTENT: Record<Locale, Content> = { uz, ru };

export const getContent = (lang: Locale): Content => CONTENT[lang];
