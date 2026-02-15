// src/i18n/request.ts

import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// Import all locales statically
import en from "@/messages/en.json";
import ur from "@/messages/ur.json";
import urLatn from "@/messages/ur-Latn.json";
import hi from "@/messages/hi.json";

const messages: Record<string, any> = {
  en,
  ur,
  "ur-Latn": urLatn,
  hi,
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Fallback if undefined or invalid
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messages[locale],
  };
});
