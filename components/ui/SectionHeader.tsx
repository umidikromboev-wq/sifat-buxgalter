import { Heading } from "@/components/motion/Heading";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/** Eyebrow, serif title with its gold accent, and an optional lead line. */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "ink",
  as = "h2",
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "ink" | "night";
  as?: "h1" | "h2";
  className?: string;
}) {
  const night = tone === "night";
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Reveal variant="fade">
        <p className={cn("eyebrow", night && "text-gold-light", align === "center" && "justify-center")}>
          {eyebrow}
        </p>
      </Reveal>
      <Heading
        as={as}
        text={title}
        className={cn(as === "h1" ? "display-1" : "display-2", "mt-6", night ? "text-on-night" : "text-ink")}
      />
      {subtitle ? (
        <Reveal delay={220}>
          <p
            className={cn(
              "mt-6 max-w-2xl text-lg leading-relaxed",
              night ? "text-on-night-2" : "text-ink-2",
              align === "center" && "mx-auto",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
