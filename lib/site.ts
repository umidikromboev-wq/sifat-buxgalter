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
  { file: "avangard", name: "Avangard", w: 360, h: 360 },
  { file: "aiwa", name: "Aiwa", w: 318, h: 52 },
  { file: "rollton", name: "Роллтон", w: 185, h: 83 },
  { file: "klass-export", name: "Klass Export", w: 221, h: 144 },
  { file: "inesis", name: "Inesis", w: 158, h: 90 },
  { file: "profit-stone", name: "Profit Stone", w: 284, h: 262 },
  { file: "poytaxt", name: "Poytaxt Aqua Wave", w: 360, h: 357 },
  { file: "oq-tepa-dental", name: "Oq Tepa Dental", w: 199, h: 149 },
  { file: "bumble", name: "Bumble", w: 220, h: 90 },
  { file: "zhalyn-komir", name: "Жалын Көмір", w: 176, h: 61 },
  { file: "tsg", name: "TSG", w: 100, h: 109 },
  { file: "west-med", name: "West Med Group", w: 320, h: 58 },
] as const;

// Видео-отзывы: ссылку вставить в url, пока пусто, карточка показывает «скоро» и не кликается.
export const REVIEWS: { url: string; poster: string; w: number; h: number; pos: string }[] = [
  { url: "", poster: "/glass/desk.webp", w: 880, h: 663, pos: "30% 50%" },
  { url: "", poster: "/glass/hero.webp", w: 1344, h: 752, pos: "50% 40%" },
  { url: "", poster: "/glass/desk.webp", w: 880, h: 663, pos: "75% 50%" },
];

const CONTENT: Record<Locale, Content> = { uz, ru };

export const getContent = (lang: Locale): Content => CONTENT[lang];
