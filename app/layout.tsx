import type { Metadata, Viewport } from "next";
import { Geologica } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

// Один гротеск на весь сайт: крупное тонко (300), мелкое плотнее (500–600). Кириллица и oʻ/gʻ есть.
const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0c1219",
};

// lang корня — узбекский (основной рынок); для /ru HtmlLang правит атрибут на клиенте.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={geologica.variable} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
