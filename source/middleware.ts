// Dependencies -------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import createMiddleware from "next-intl/middleware";
import configuration from ">_/configuration";
// Default Export ------------------------------------------------------------------------------------------------------------------------------------------------------ [ EXPORTS ]
export default createMiddleware({ locales: configuration.locales || [], defaultLocale: `en` });
export const config = { matcher: [ `/`, `/(en|fr)/:path*` ] };