import type { Metadata } from "next";
import { GlassHome } from "@/components/glass/GlassHome";

// Ветка glass: главная в дизайн-системе «glass + beige» (первые два экрана, RU).
export const metadata: Metadata = {
  title: "Sifat Buxgalter: бухгалтерский аутсорсинг для ООО в Ташкенте",
  description: "Ведём учёт и налоги ООО в Ташкенте. Штраф по нашей ошибке платим сами, ответ на вопрос за 10 минут.",
  robots: { index: false, follow: false },
};

export default function Home() {
  return <GlassHome />;
}
