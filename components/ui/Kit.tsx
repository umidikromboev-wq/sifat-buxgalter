import { Glyph, Marker } from "./Glyph";

// Две стрелки в одной ячейке: при наведении первая уходит вверх-вправо, вторая прилетает снизу-слева.
export function PillDot() {
  return (
    <span className="pill-dot">
      <Glyph name="arrow" />
      <Glyph name="arrow" />
    </span>
  );
}

// Составная пилюля — единственная форма главного действия на сайте.
export function Pill({ label, href, ink, external }: { label: string; href: string; ink?: boolean; external?: boolean }) {
  return (
    <a
      className={`pill${ink ? " pill-ink" : ""}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{label}</span>
      <PillDot />
    </a>
  );
}

type HeadProps = { id: string; kicker?: string; title: string | readonly string[]; lead?: string };

// Заголовок секции: маркер в служебной колонке, H2 с 3-й колонки, пояснение справа.
export function SectionHead({ id, kicker, title, lead }: HeadProps) {
  const lines = typeof title === "string" ? [title] : title;
  return (
    <div className="wrap">
      <div className="grid12 shead" data-anim>
        <Marker />
        <div className="shead-main">
          {kicker && <p className="kicker">{kicker}</p>}
          <h2 id={id} className="h2">
            {lines.map((l, i) => (
              <span key={l} className="ln" style={{ "--l": i } as React.CSSProperties}>
                <span>{l}</span>
              </span>
            ))}
          </h2>
        </div>
        {lead && <p className="shead-lead">{lead}</p>}
      </div>
    </div>
  );
}
