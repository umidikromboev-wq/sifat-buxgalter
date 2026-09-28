/** Sections of the home page that the header links to, in page order. */
export const navSections = ["services", "promises", "pricing", "process", "faq", "contact"] as const;

export type NavSection = (typeof navSections)[number];
