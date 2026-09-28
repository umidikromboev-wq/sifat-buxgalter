import type { CSSProperties, ReactNode } from "react";
import { Heading } from "@/components/motion/Heading";

/** The opening of an inner page: the hero's backdrop, a smaller headline. */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-[calc(var(--header-h)+64px)] md:pb-24 lg:pt-[calc(var(--header-h)+96px)]">
      <div aria-hidden="true" className="aurora absolute inset-0 -z-10">
        <span />
        <span />
        <span />
      </div>
      <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10" />
      <div className="shell">
        <p className="eyebrow intro" style={{ "--intro": 0 } as CSSProperties}>
          {eyebrow}
        </p>
        <Heading as="h1" text={title} className="display-1 mt-6 max-w-5xl text-ink" delay={120} />
        <p
          className="intro mt-8 max-w-2xl text-xl leading-relaxed text-ink-2"
          style={{ "--intro": 5 } as CSSProperties}
        >
          {lead}
        </p>
        {children}
      </div>
    </section>
  );
}
