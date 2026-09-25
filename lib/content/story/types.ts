// Контент версии-письма (сторителлинг по Брансону/Субу).
// В строках `**фрагмент**` рендерится как выделение маркером — без HTML.
export type Rich = string;

export type Block = { p: Rich } | { quote: string; who?: string } | { list: string[] };

export type Chapter = { id: string; num: string; title: string; blocks: Block[] };

export type Story = {
  meta: { title: string; description: string };
  top: { cta: string; switchTo: string };
  callout: string;
  h1: string;
  sub: Rich;
  readTime: string;
  byline: { name: string; role: string };
  cta: { label: string; note: string };
  greeting: string;
  opening: Chapter;
  inside: Chapter;
  trap: {
    num: string;
    title: string;
    intro: Rich;
    steps: { year: string; title: string; text: string }[];
    sumLabel: string;
    sum: string;
    sumNote: string;
    outro: Rich;
  };
  epiphany: Chapter;
  beliefs: { num: string; title: string; intro: Rich; thinkLabel: string; truthLabel: string; items: { think: string; truth: Rich }[] };
  stack: {
    num: string;
    title: string;
    intro: Rich;
    rows: { what: string; detail: string; tag?: string }[];
    note: Rich;
  };
  guarantee: { num: string; title: string; text: Rich; condition: Rich; seal: string };
  notFor: { num: string; title: string; intro: Rich; items: string[]; outro: Rich };
  next: { num: string; title: string; steps: { title: string; text: string }[] };
  sign: { closing: string; people: { name: string; role: string }[] };
  ps: Rich[];
};
