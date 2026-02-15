"use client";

import { useState } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentLocale, useChangeLocale } from "@/locales/client";
import { usePathname } from "next/navigation";
import { languages } from "@/lib/languages";

export default function LanguageSwitcher() {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const pathname = usePathname();

  // Show current language in button
  const activeLang =
    languages.find((l) => l.code === currentLocale)?.label ?? "Language";

  const switchLanguage = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    // Extract path without locale
    const segments = pathname.split("/").filter(Boolean);
    let pathWithoutLocale = pathname;

    // Remove current locale from path if present
    if (segments.length > 0 && languages.some((l) => l.code === segments[0])) {
      pathWithoutLocale = "/" + segments.slice(1).join("/");
    }

    // Change locale (next-international handles routing automatically)
    changeLocale(newLocale as any);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          {activeLang}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className="cursor-pointer"
            disabled={lang.code === currentLocale}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
