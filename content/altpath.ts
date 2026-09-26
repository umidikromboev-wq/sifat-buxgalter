import { kindFromSection, sectionPath, serviceIdFromSlug, servicePath, homePath, type PageKind } from "./routes";
import type { Locale } from "./services";

/** Given the current pathname, return the equivalent path in the other locale. */
export function altPathFor(pathname: string, locale: Locale): string {
  const other: Locale = locale === "uz" ? "ru" : "uz";
  const parts = pathname.split("/").filter(Boolean); // [locale, section?, slug?]
  if (parts.length <= 1) return homePath(other);
  const kind: PageKind | null = kindFromSection(locale, parts[1]);
  if (!kind) return homePath(other);
  if (parts.length === 2) return sectionPath(other, kind);
  if (kind === "services") {
    const id = serviceIdFromSlug(locale, parts[2]);
    if (id) return servicePath(other, id);
  }
  return sectionPath(other, kind);
}
