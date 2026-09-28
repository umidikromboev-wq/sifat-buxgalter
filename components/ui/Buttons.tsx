"use client";

import type { ReactNode } from "react";
import { Button } from "flowbite-react";
import { ArrowSwap } from "@/components/icons";
import { useCallbackModal } from "@/components/lead/CallbackProvider";
import { Magnetic } from "@/components/motion/Magnetic";
import { Link } from "@/i18n/navigation";
import type { Lead } from "@/lib/lead";

type Color = "ink" | "gold" | "ghost" | "glass" | "paper";
type Size = "sm" | "md" | "lg" | "xl";

/** Opens the callback dialog. The primary action on almost every block. */
export function CallButton({
  children,
  color = "ink",
  size = "lg",
  source = "modal",
  magnetic = false,
  className,
  fullSized,
}: {
  children: ReactNode;
  color?: Color;
  size?: Size;
  source?: Lead["source"];
  magnetic?: boolean;
  className?: string;
  fullSized?: boolean;
}) {
  const { open } = useCallbackModal();
  const button = (
    <Button
      color={color}
      size={size}
      className={className}
      fullSized={fullSized}
      onClick={() => open(source)}
    >
      {children}
      <ArrowSwap />
    </Button>
  );
  return magnetic ? <Magnetic>{button}</Magnetic> : button;
}

/**
 * A Flowbite button that navigates inside the site, locale included. `href`
 * is a plain path ("/services"): Flowbite types the prop as a string even
 * when it renders next-intl's Link.
 */
export function ButtonLink({
  href,
  children,
  color = "ink",
  size = "lg",
  className,
  magnetic = false,
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  color?: Color;
  size?: Size;
  className?: string;
  magnetic?: boolean;
  arrow?: boolean;
}) {
  const button = (
    <Button as={Link} href={href} color={color} size={size} className={className}>
      {children}
      {arrow ? <ArrowSwap /> : null}
    </Button>
  );
  return magnetic ? <Magnetic>{button}</Magnetic> : button;
}
