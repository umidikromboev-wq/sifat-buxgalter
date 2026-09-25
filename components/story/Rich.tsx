import type { Rich as RichText } from "@/lib/content/story/types";

// `**фрагмент**` → выделение маркером. Без innerHTML: режем строку и собираем узлы.
export function Rich({ text }: { text: RichText }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) => (i % 2 === 1 ? <mark key={i}>{part}</mark> : part))}
    </>
  );
}
