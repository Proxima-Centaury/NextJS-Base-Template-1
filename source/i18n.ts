// Dependencies -------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
// Validators ---------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import { isLocale } from ">_/validators/custom";
// Default Export ------------------------------------------------------------------------------------------------------------------------------------------------------ [ EXPORTS ]
export default getRequestConfig(async ({ locale }) => {
    if(!isLocale(locale)) { notFound() };
    return { messages: (await import(`./translations/${ locale }.json`)).default };
});