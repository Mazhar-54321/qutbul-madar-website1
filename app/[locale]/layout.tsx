import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import AppBar from "@/components/layout/Appbar";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const locales = ["en", "ur", "ur-Latn", "hi"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Load messages
  const messages = (await import(`@/messages/${locale}.json`)).default;

  const isRtl = ["ur", "ur-Latn"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={inter.variable}>
      <body>
        <div data-messages={JSON.stringify(messages)}>
          <AppBar />
          <main className="pt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
