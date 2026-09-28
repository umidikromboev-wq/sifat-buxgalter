/**
 * Facts that are the same in every language: the brand, the phones, the
 * Telegram handle and the office. Copy lives in `messages/*.json`; anything a
 * visitor dials, taps or pastes into a map lives here, once.
 */
// The office pin from the client's Google Maps link (maps.app.goo.gl/pBtkJ7jbAEkg3x3g7).
const office = { lat: 41.278422, lng: 69.250819 };

export const site = {
  name: "Sifat Buxgalter",
  // Set NEXT_PUBLIC_SITE_URL in production: canonical links and hreflang use it.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  since: 2016,
  phones: [
    { display: "+998 97 732 18 48", href: "tel:+998977321848" },
    { display: "+998 94 647 80 45", href: "tel:+998946478045" },
  ],
  telegram: {
    handle: "@Davronbekov_Bekzod",
    href: "https://t.me/Davronbekov_Bekzod",
  },
  instagram: {
    handle: "@sifatbuxgalter",
    href: "https://www.instagram.com/sifatbuxgalter/",
  },
  office,
  // Built from the coordinates rather than kept as the short link: a short
  // link can expire or be re-pointed, and says nothing in review about where
  // it leads.
  maps: {
    google: `https://www.google.com/maps/search/?api=1&query=${office.lat},${office.lng}`,
    yandex: `https://yandex.uz/maps/?pt=${office.lng},${office.lat}&z=17&l=map`,
    embed: `https://maps.google.com/maps?q=${office.lat},${office.lng}&z=16&output=embed`,
  },
} as const;

export type ServiceKey = "accounting" | "taxes" | "audits" | "payroll" | "trade";

export const serviceKeys: ServiceKey[] = [
  "accounting",
  "taxes",
  "audits",
  "payroll",
  "trade",
];
