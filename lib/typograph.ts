/**
 * Print-shop typography for every message, applied once when a locale's copy
 * is loaded. Russian and Uzbek both read badly when a line ends on «в», «и»,
 * «va» or a bare number, and a dash that wraps to the start of a line looks
 * like a list marker. Non-breaking spaces fix all three without anyone having
 * to type them into the JSON.
 */
const NBSP = " ";

// A one- or two-letter word sticks to the word after it: «в срок», «va yakshanba».
// `>` counts as a word boundary so «<em>в договоре</em>» is covered too.
const SHORT_WORD = /(^|[\s(«"„—>])([\p{L}ʻʼ]{1,2})\s+(?=\S)/gu;
// A number keeps its unit: «10 минут», «4 млрд», «5 nafar».
const NUMBER_UNIT = /(\d)\s+(?=[\p{L}%])/gu;
// A dash never starts a line.
const DASH = /\s+([—–])/g;

export function typograph(text: string): string {
  return text
    .replace(SHORT_WORD, `$1$2${NBSP}`)
    // A second pass catches runs like «и в» where the first match ate the space.
    .replace(SHORT_WORD, `$1$2${NBSP}`)
    .replace(NUMBER_UNIT, `$1${NBSP}`)
    .replace(DASH, `${NBSP}$1`);
}

export function typographAll<T>(value: T): T {
  if (typeof value === "string") return typograph(value) as T;
  if (Array.isArray(value)) return value.map(typographAll) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, typographAll(item)]),
    ) as T;
  }
  return value;
}
