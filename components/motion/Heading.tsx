"use client";

import { useRef, type CSSProperties } from "react";
import { cn } from "@/lib/cn";
import { useArmOnView } from "./inView";

type Token = { word: string; accent: boolean; space: boolean };

/**
 * Headings in the messages may mark an accent with <em>…</em>: «Что мы
 * <em>берём на себя</em>». The accent is set in gold italic, and every word
 * rises out of its own mask, one after another.
 *
 * Words are split on ordinary spaces only, so the non-breaking spaces the
 * typograph inserted («на себя») keep their words together here as well.
 */
function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  const segments = text.split(/(<em>.*?<\/em>)/).filter(Boolean);

  for (const segment of segments) {
    const accent = segment.startsWith("<em>");
    const parts = (accent ? segment.slice(4, -5) : segment).split(" ");
    parts.forEach((part, i) => {
      if (part) tokens.push({ word: part, accent, space: false });
      if (i < parts.length - 1 && tokens.length) tokens[tokens.length - 1].space = true;
    });
  }
  return tokens;
}

export function Heading({
  text,
  as: Tag = "h2",
  className,
  accentClassName = "text-gold italic",
  delay = 0,
  stagger = 55,
  id,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  accentClassName?: string;
  delay?: number;
  stagger?: number;
  id?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  useArmOnView(ref, "lines");

  return (
    <Tag
      ref={ref}
      id={id}
      className={className}
      style={{ "--reveal-delay": `${delay}ms`, "--stagger": `${stagger}ms` } as CSSProperties}
    >
      {tokenize(text).map((token, i) => (
        <span key={i}>
          <span className="word-mask">
            <span
              className={cn("line-inner", token.accent && accentClassName)}
              style={{ "--line": i } as CSSProperties}
            >
              {token.word}
            </span>
          </span>
          {token.space ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
