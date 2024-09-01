// Dependencies -------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
// Validators ---------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import { isSupported } from ">_/utilities/validators";
// Default Export ------------------------------------------------------------------------------------------------------------------------------------------------------ [ EXPORTS ]
export default getRequestConfig(async ({ locale }) => {
    if(!isSupported(`locale`, locale)) { notFound() };
    return { messages: (await import(`./translations/${ locale }.json`)).default };
});