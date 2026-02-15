// middleware.ts (in project root, not in src/)

import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(en|ur|ur-Latn|hi)/:path*"],
};
