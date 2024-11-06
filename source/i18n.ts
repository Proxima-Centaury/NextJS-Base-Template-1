import { getRequestConfig } from "next-intl/server";
import { isSupported } from ">_/utilities/validators";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
    if(!isSupported(`locale`, locale)) { notFound() };
    return { messages: (await import(`./translations/${ locale }.json`)).default };
});