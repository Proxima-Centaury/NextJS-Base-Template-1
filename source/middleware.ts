// Dependencies -------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import createMiddleware from "next-intl/middleware";
import configuration from ">_/configuration";
// Default Export ------------------------------------------------------------------------------------------------------------------------------------------------------ [ EXPORTS ]
export default createMiddleware({ locales: configuration.locales || [], defaultLocale: configuration.localesFallback });
// Exports ------------------------------------------------------------------------------------------------------------------------------------------------------------- [ EXPORTS ]
export const config = { matcher: [ `/`, `/([a-z]{2})/:path*` ] };