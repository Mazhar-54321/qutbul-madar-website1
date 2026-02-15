// middleware.ts (in project root)

import { createI18nMiddleware } from "next-international/middleware";

const middleware = createI18nMiddleware({
  locales: ["en", "ur", "ur-Latn", "hi"],
  defaultLocale: "en",
});

export default middleware;

export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico|.*\\..*).*)"],
};
