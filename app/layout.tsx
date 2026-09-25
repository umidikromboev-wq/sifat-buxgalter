import type { Metadata, Viewport } from "next";
import { Literata, Wix_Madefor_Text } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";
import "./chrome.css";

// Literata — книжная антиква с кириллицей и oʻ/gʻ: тон «документа», которого нет у рынка (Montserrat/Gilroy).
const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

// Wix Madefor Text — спокойный гротеск для длинного текста и таблиц, держит кириллицу и табличные цифры.
const wix = Wix_Madefor_Text({
  variable: "--font-wix",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#f3efe4",
};

// lang корня — узбекский (основной рынок); для /ru HtmlLang правит атрибут на клиенте.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={`${literata.variable} ${wix.variable}`}>
      <body>{children}</body>
    </html>
  );
}
