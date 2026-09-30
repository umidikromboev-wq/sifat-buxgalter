import { redirect } from "next/navigation";

// Основной рынок узбекоязычный: корень ведёт на /uz.
export default function Home() {
  redirect("/uz");
}
