import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Onest } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { ThemeInit } from "@/.flowbite-react/init";
import { Providers } from "@/components/Providers";
import { ScrollProgress } from "@/components/motion/Scroll";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MobileCallBar } from "@/components/site/MobileCallBar";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";
import "../globals.css";

// Both families were chosen for having Cyrillic *and* the Uzbek ʻ (U+02BB);
// Manrope, the obvious alternative, lacks the latter and falls back mid-word.
const onest = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-onest",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

// Only these namespaces are read by client components; the rest of the copy
// stays on the server instead of being serialised into every page.
const clientNamespaces = ["a11y", "nav", "cta", "lead", "callback"] as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  // Browser chrome follows the OS scheme; the page itself follows the toggle.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f1e8" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0e11" },
  ],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL(site.url),
    title: { default: t("title"), template: `%s — ${site.name}` },
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: { ru: "/ru", uz: "/uz", "x-default": "/ru" },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: locale === "uz" ? "uz_UZ" : "ru_RU",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const t = await getTranslations("a11y");
  const messages = await getMessages();
  const clientMessages = Object.fromEntries(clientNamespaces.map((key) => [key, messages[key]]));

  return (
    // next-themes sets the theme class on <html> before hydration; the warning
    // React would raise about that one attribute is expected.
    <html
      lang={locale}
      className={`${onest.variable} ${cormorant.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <ThemeInit />
        <NextIntlClientProvider messages={clientMessages}>
          <Providers>
            <a
              href="#main"
              className="sr-only z-80 rounded-full bg-ink px-5 py-3 text-paper focus:not-sr-only focus:fixed focus:inset-s-4 focus:top-4"
            >
              {t("skip")}
            </a>
            <ScrollProgress />
            <Header />
            <main id="main">{children}</main>
            <Footer />
            <MobileCallBar />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
