import configuration from ">_/configuration";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({ locales: configuration.locales || [], defaultLocale: configuration.localesFallback });
export const config = { matcher: [ `/`, `/([a-z]{2})-([A-Z]{2})/:path*` ] };