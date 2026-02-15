// app/[locale]/layout.tsx

import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import AppBar from "@/components/layout/Appbar";
import { Providers } from "./providers";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const locales = ["en", "ur", "ur-Latn", "hi"] as const;

// Generate params for static rendering / build
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Optional: Metadata with translations
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return {
    title: "Qutbul Madar",
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as any)) {
    return null;
  }

  // RTL detection
  const isRtl = ["ur", "ur-Latn", "ar", "fa", "he"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={inter.variable}>
      <body>
        <Providers locale={locale}>
          <AppBar />
          <main className="pt-16">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
