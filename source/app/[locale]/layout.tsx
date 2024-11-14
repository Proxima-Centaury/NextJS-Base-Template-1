const Theme = dynamic(() => import(">_/helpers/theme"), { ssr: false });

import { cookies } from "next/headers";
import dynamic from "next/dynamic";
import { getMessages, getTranslations } from "next-intl/server";
import { isSupported } from ">_/utilities/validators";
import { themesFallback } from ">_/configuration";
import Navbar from ">_/containers/navbar";
import { NextIntlClientProvider } from "next-intl";
import ">_/app/root.css";
import ">_/public/fontawesome/css/brands.min.css";
import ">_/public/fontawesome/css/fontawesome.min.css";
import ">_/public/fontawesome/css/solid.min.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import type { AbstractIntlMessages } from "next-intl";
import type TLayout from ">_/types/TLayout";

export async function generateMetadata(props: TLayout) {
    const { params } = props;
    const { locale } = params || {};
    const translateMetadata = await getTranslations({ locale, namespace: `00 - Metadata` });
    return { title: translateMetadata(`title`), description: translateMetadata(`description`) };
};

const RootLayout = async (props: TLayout): Promise<React.JSX.Element> => {
    const { children, params } = props;
    const { locale } = params || {};

    const cookie: string | undefined = cookies().get(`theme`)?.value;
    const messages: AbstractIntlMessages = await getMessages();
    const theme: string | undefined = (isSupported(`theme`, cookie)) ? cookie : themesFallback;

    return <html lang={ locale } style={ { colorScheme: theme } }>
        <body className="w-fullViewport h-fullViewport overflow-hidden">
            <Theme attribute="class" defaultTheme={ theme }>
                <NextIntlClientProvider messages={ messages }>
                    <Navbar locale={ locale }/>
                    { children }    
                    { /* Your footer could go here */ }
                </NextIntlClientProvider>
            </Theme>
        </body>
    </html>;
};

export default RootLayout;