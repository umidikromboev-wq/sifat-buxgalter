import { Fragment } from "react";

// Счётчик-барабан: каждая цифра — колонка 0–9, при появлении карточки (.in) прокручивается к своему значению.
// Двигается только transform, ширина числа не меняется, поэтому вёрстка не прыгает.
const DIGITS = "0123456789";

export function Odometer({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const groups = value.split(" ");
  let n = 0;
  return (
    <p className={className} aria-label={value}>
      {groups.map((g, gi) => (
        // Пробел между группами стоит снаружи неразрывного блока: число переносится только по разрядам
        <Fragment key={gi}>
          {gi > 0 && " "}
          <span className="odo-g" aria-hidden="true">
            {g.split("").map((ch, ci) => {
              if (!/\d/.test(ch)) return <span key={ci}>{ch}</span>;
              const i = n++;
              return (
                <span
                  key={ci}
                  className="odo"
                  style={
                    {
                      "--y": `${-Number(ch) * 10}%`,
                      "--o": i,
                    } as React.CSSProperties
                  }
                >
                  <span className="odo-col">
                    {DIGITS.split("").map((d) => (
                      <span key={d}>{d}</span>
                    ))}
                  </span>
                </span>
              );
            })}
          </span>
        </Fragment>
      ))}
    </p>
  );
}
