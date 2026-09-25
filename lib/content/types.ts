export const LOCALES = ["uz", "ru"] as const;
export type Locale = (typeof LOCALES)[number];

export const isLocale = (v: string): v is Locale => (LOCALES as readonly string[]).includes(v);

type Pair = readonly [string, string];

export type Content = {
  meta: { title: string; description: string };
  nav: { services: string; team: string; faq: string; cta: string; langLabel: string };
  hero: {
    kicker: string;
    h1: string;
    sub: string;
    cta: string;
    ctaAlt: string;
    note: string;
    sheet: { tag: string; title: string; rows: Pair[]; foot: Pair[]; stamp: string };
    facts: Pair[];
  };
  triggers: { kicker: string; h2: string; items: string[]; lead: string };
  risk: { kicker: string; h2: string; lead: string; steps: string[]; total: string; totalLabel: string; answer: string };
  services: { kicker: string; h2: string; sub: string; groups: { title: string; items: string[] }[] };
  clauses: { kicker: string; h2: string; sub: string; items: { title: string; text: string }[] };
  compare: { kicker: string; h2: string; sub: string; cols: [string, string]; rows: { k: string; now: string; us: string }[]; note: string };
  fit: { kicker: string; h2: string; yesTitle: string; yes: string[]; noTitle: string; no: string[]; note: string };
  team: { kicker: string; h2: string; people: { name: string; role: string; facts: string[] }[] };
  clients: { kicker: string; h2: string; sub: string };
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
  };
  footer: { addressLabel: string; address: string; landmark: string; mapLink: string; contacts: string; hours: string; rights: string };
};
