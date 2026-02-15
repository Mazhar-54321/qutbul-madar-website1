// locales/client.ts

import { createI18nClient } from "next-international/client";

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useCurrentLocale,
  useChangeLocale,
} = createI18nClient({
  en: () => import("../messages/en.json"),
  ur: () => import("../messages/ur.json"),
  "ur-Latn": () => import("../messages/ur-Latn.json"),
  hi: () => import("../messages/hi.json"),
});
