/**
 * Reads a list or record from the messages — FAQ items, table rows, stats.
 *
 * next-intl types `t.raw` for string leaves only (and lets some arrays slip
 * through depending on TypeScript's recursion depth), so structured copy is
 * read here, with its shape named once at the call site.
 */
export function raw<T>(t: { raw(key: never): unknown }, key: string): T {
  return t.raw(key as never) as T;
}

/** A heading without its <em> accent markup, for labels and metadata. */
export function plainText(text: string): string {
  return text.replace(/<\/?em>/g, "");
}
