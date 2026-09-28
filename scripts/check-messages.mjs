// Every language must have exactly the keys — and list lengths — of ru.json,
// which is the reference copy the TypeScript types are generated from. Uzbek
// text must also use the typographic ʻ ʼ, never the ASCII apostrophe, which
// ICU message syntax treats as an escape character.
import { readFileSync } from "node:fs";

const load = (locale) =>
  JSON.parse(readFileSync(new URL(`../messages/${locale}.json`, import.meta.url), "utf8"));

const reference = load("ru");
const problems = [];

function compare(a, b, path) {
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) return problems.push(`${path}: expected a list`);
    if (a.length !== b.length)
      problems.push(`${path}: ${b.length} items, ru.json has ${a.length}`);
    a.forEach((item, i) => b[i] !== undefined && compare(item, b[i], `${path}[${i}]`));
    return;
  }
  if (a && typeof a === "object") {
    if (!b || typeof b !== "object") return problems.push(`${path}: expected an object`);
    for (const key of Object.keys(a)) {
      if (key in b) compare(a[key], b[key], `${path}.${key}`);
      else problems.push(`${path}.${key}: missing`);
    }
    for (const key of Object.keys(b))
      if (!(key in a)) problems.push(`${path}.${key}: not in ru.json`);
    return;
  }
  if (typeof b !== "string") return problems.push(`${path}: expected text`);
  // A stat's prefix or suffix may be empty: Uzbek puts «gacha» after the
  // number where Russian puts «до» before it.
  if (!b.trim() && !/\.(prefix|suffix)$/.test(path)) problems.push(`${path}: empty`);
  if (b.includes("'")) problems.push(`${path}: ASCII apostrophe — use ʻ or ʼ`);
}

for (const locale of ["uz"]) compare(reference, load(locale), locale);

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log("messages: uz matches ru");
