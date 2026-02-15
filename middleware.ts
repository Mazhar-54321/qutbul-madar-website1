// middleware.ts (in project root)

import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing"; // ← Changed to src/i18n/routing

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(en|ur|ur-Latn|hi)/:path*"],
};
