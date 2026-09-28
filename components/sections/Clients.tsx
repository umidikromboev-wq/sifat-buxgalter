import type { CSSProperties } from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { CallButton } from "@/components/ui/Buttons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { clients, type Client } from "@/lib/clients";
import { cn } from "@/lib/cn";

function Tile({ client, echo }: { client: Client; echo: boolean }) {
  return (
    <li aria-hidden={echo || undefined} className="group/tile shrink-0 px-2 py-3 sm:px-3">
      <div
        className={cn(
          "flex h-20 w-36 items-center justify-center overflow-hidden rounded-2xl border shadow-soft transition-[transform,box-shadow,border-color] duration-500 ease-out group-hover/tile:-translate-y-1 group-hover/tile:border-gold/60 group-hover/tile:shadow-lift sm:h-24 sm:w-44",
          client.bg ? "border-transparent px-2 py-1.5" : "border-line bg-white px-5 py-3 dark:border-white/10",
        )}
        style={client.bg ? { backgroundColor: client.bg } : undefined}
      >
        <Image
          src={client.logo}
          // The echo copy exists only to make the loop seamless; it is hidden
          // from assistive tech, so each client is announced once.
          alt={echo ? "" : client.name}
          width={client.width}
          height={client.height}
          sizes="176px"
          className="h-auto max-h-full w-auto max-w-full object-contain transition-transform duration-500 ease-out group-hover/tile:scale-105"
        />
      </div>
    </li>
  );
}

/**
 * One row of the marquee. The full list is rendered twice and the track moves
 * by exactly one copy, so it loops without a seam. Every row carries all
 * twelve logos — a copy has to be wider than the widest screen, or a gap
 * would show at the end of each lap.
 */
function Row({
  items,
  reverse,
  duration,
  decorative = false,
}: {
  items: Client[];
  reverse?: boolean;
  duration: string;
  /** A second row repeats the same clients; only one row is announced. */
  decorative?: boolean;
}) {
  return (
    <div
      className="marquee"
      data-reverse={reverse ? "true" : "false"}
      aria-hidden={decorative || undefined}
      style={{ "--marquee-duration": duration } as CSSProperties}
    >
      <ul className="marquee-track">
        {[false, true].map((echo) =>
          items.map((client) => (
            <Tile key={`${echo}-${client.logo}`} client={client} echo={echo || decorative} />
          )),
        )}
      </ul>
    </div>
  );
}

export async function Clients() {
  const t = await getTranslations("clients");
  const c = await getTranslations("cta");
  // The second row starts halfway through the list, so the two rows never
  // show the same logo one above the other.
  const shifted = [...clients.slice(6), ...clients.slice(0, 6)];

  return (
    <section aria-label={t("eyebrow")} className="relative overflow-hidden pb-24 pt-8 lg:pb-32">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeader eyebrow={t("eyebrow")} title={t.raw("title")} />
        <Reveal delay={200} className="shrink-0">
          <CallButton color="ghost" size="lg" source="modal">
            {c("call")}
          </CallButton>
        </Reveal>
      </div>
      <Reveal variant="fade" className="mt-12 space-y-1 sm:mt-14">
        <Row items={clients} duration="70s" />
        <Row items={shifted} reverse duration="80s" decorative />
      </Reveal>
    </section>
  );
}
