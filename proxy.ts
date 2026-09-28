import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next 16 renamed `middleware.ts` to `proxy.ts`; next-intl's handler is the
// same function either way. It only picks the locale — there is no backend.
export default createMiddleware(routing);

export const config = {
  // Everything except Next internals and files with an extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
