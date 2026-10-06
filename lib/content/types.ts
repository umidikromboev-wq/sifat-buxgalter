import type { GlyphName } from "@/components/ui/Glyph";

export const LOCALES = ["uz", "ru"] as const;
export type Locale = (typeof LOCALES)[number];

export const isLocale = (v: string): v is Locale => (LOCALES as readonly string[]).includes(v);

type Pair = readonly [string, string];

export type Content = {
  meta: { title: string; description: string };
  nav: { services: string; servicesList: string; faq: string; contacts: string; cta: string; callback: string; menu: string; langLabel: string };
  hero: {
    factTitle: Pair;
    factText: string;
    h1Muted: string;
    h1: string;
    panelTitle: string;
    panelText: string;
    cta: string;
  };
  cases: {
    kicker: string;
    h2: Pair;
    lead: string;
    items: Case[];
    cta: { title: string; text: string; cta: string };
  };
  risk: { kicker: string; h2: string; lead: string; steps: string[]; calc: RiskCalc; answer: string };
  services: { kicker: string; h2: string; sub: string; groups: { title: string; items: string[] }[] };
  clauses: { kicker: string; h2: string; sub: string; items: { title: string; text: string }[]; chat: Chat };
  compare: { kicker: string; h2: string; sub: string; cols: [string, string]; rows: { k: string; now: string; us: string }[]; note: string };
  benefits: {
    kicker: string;
    h2: string;
    sub: string;
    sampleTitle: string;
    cols: [string, string, string];
    sample: { what: string; law: string; who: string }[];
    restTitle: string;
    label: string;
    spheres: string[];
    cta: string;
    note: string;
    message: string;
  };
  fit: { kicker: string; h2: string; yesTitle: string; yes: string[]; noTitle: string; no: string[]; note: string };
  clients: { label: string };
  price: { kicker: string; h2: string; sub: string; items: { title: string; text: string }[]; cta: string };
  expert: {
    kicker: string;
    h2: string;
    name: string;
    role: string;
    bio: string;
    stats: { value: string; unit?: string; label: string }[];
  };
  reviews: { kicker: string; h2: string; lead: string; label: string; play: string; items: { name: string; role: string; quote: string }[] };
  steps: { h2: Pair; lead: string; items: { title: string; text: string }[] };
  report: { kicker: string; h2: string; lead: string; title: string; month: string; badge: string; rows: Pair[]; footer: string };
  faq: { kicker: string; h2: string; items: Pair[] };
  form: {
    kicker: string;
    h2: string;
    sub: string;
    name: string;
    phone: string;
    company: string;
    turnover: string;
    turnoverOpts: string[];
    submit: string;
    sending: string;
    ok: string;
    err: string;
    invalid: string;
    privacy: string;
    orCall: string;
    orTelegram: string;
  };
  footer: {
    visit: string; addressLabel: string; address: string; landmark: string; mapLink: string; contacts: string; hours: string; rights: string };
};

// Карточка бенто «Когда к нам приходят»: ведёт на страницу услуги или статьи.
export type Case = {
  title: string;
  img: string; // public/glass/ill/<img>.svg
  icon: GlyphName;
  link: { kind: "services" | "articles"; id: string };
  size: "narrow" | "tall" | "wide";
};

// Калькулятор риска: три ползунка, разбивка по статьям НК. Ставки и допущения — в lib/riskCalc.ts.
export type RiskCalc = {
  title: string;
  turnover: string;
  share: string;
  years: string;
  bln: string;
  mln: string;
  yearsUnit: [string, string, string];
  hidden: string;
  rows: { fine: string; vat: string; profit: string; peni: string };
  laws: { fine: string; vat: string; profit: string; peni: string };
  total: string;
  sum: string;
  note: string;
};

// Нарисованный чат Telegram-группы: пример переписки, имена скрыты.
export type Chat = {
  title: string;
  members: string;
  client: string;
  us: string;
  messages: { from: "client" | "us"; text: string; time: string }[];
  typing: string;
  gap: string;
  caption: string;
};
