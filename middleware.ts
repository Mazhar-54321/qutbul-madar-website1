// middleware.ts (in project root)

import { createI18nMiddleware } from "next-international/middleware";

const mmiddleware = createI18nMiddleware({
  locales: ["en", "ur", "ur-Latn", "hi"],
  defaultLocale: "en",
  urlMappingStrategy: "rewrite",
});

export default mmiddleware;

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
