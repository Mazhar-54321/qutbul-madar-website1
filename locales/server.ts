// locales/server.ts

import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    en: () => import("../messages/en.json"),
    ur: () => import("../messages/ur.json"),
    "ur-Latn": () => import("../messages/ur-Latn.json"),
    hi: () => import("../messages/hi.json"),
  });
