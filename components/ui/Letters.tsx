import { Fragment, type CSSProperties } from "react";

type Props = { text: string; from?: number; className?: string };

// Побуквенное появление: слово не рвётся (.lw), каждая буква получает свой номер --i.
// from сдвигает нумерацию, чтобы вторая фраза заголовка продолжала волну первой.
export function Letters({ text, from = 0, className }: Props) {
  const words = text.split(" ");
  let i = from;
  return (
    <span className={className} aria-hidden="true">
      {words.map((word, w) => (
        <Fragment key={w}>
          <span className="lw">
            {Array.from(word).map((ch, c) => (
              <span key={c} className="lc" style={{ "--i": i++ } as CSSProperties}>
                {ch}
              </span>
            ))}
          </span>
          {w < words.length - 1 && " "}
        </Fragment>
      ))}
    </span>
  );
}

export const letterCount = (text: string) => Array.from(text.replace(/ /g, "")).length;
