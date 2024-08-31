// Components ---------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
const Theme = dynamic(() => import(">_/helpers/theme"), { ssr: false });
import { NextIntlClientProvider } from "next-intl";
import Switch from ">_/actions/switch";
// Dependencies -------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import { cookies } from "next/headers";
import dynamic from "next/dynamic";
import { getMessages, getTranslations } from "next-intl/server";
import { themesFallback } from ">_/configuration";
// Styles -------------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import ">_/app/variables.css";
import ">_/app/reset.css";
import ">_/public/fontawesome/css/brands.min.css";
import ">_/public/fontawesome/css/fontawesome.min.css";
import ">_/public/fontawesome/css/solid.min.css";
// Types --------------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import type TLayout from ">_/types/TLayout";
import type TSwitch from ">_/types/TSwitch";
import type TTheme from ">_/types/TTheme";
// Validators ---------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import { isTheme } from ">_/validators/custom";
// Meta ----------------------------------------------------------------------------------------------------------------------------------------------------------- [ DECLARATIONS ]
export async function generateMetadata({ params }: TLayout) {
    const { locale } = params || {};
    const translate = await getTranslations({ locale, namespace: `00 - Metadata` });
    return { title: translate(`title`), description: translate(`description`) };
};
// Root ------------------------------------------------------------------------------------------------------------------------------------------------------- [ LAYOUT COMPONENT ]
const RootLayout = async ({ children, params }: TLayout): Promise<React.JSX.Element> => {
    // Properties ---------------------------------------------------------------------------------------------------------------------------------------------------- [ COMPONENT ]
    const { locale } = params || {};
    const cookie: string | undefined = cookies().get(`theme`)?.value;
    const theme: TTheme = (isTheme(cookie)) ? cookie : themesFallback;
    const messages = await getMessages();
    // JSX Properties ------------------------------------------------------------------------------------------------------------------------------------------------ [ COMPONENT ]
    const switchIcons: TSwitch[`icons`] = { left: `sun`, right: `moon` };
    const switchValues: TSwitch[`icons`] = { left: `light`, right: `dark` };
    // JSX ----------------------------------------------------------------------------------------------------------------------------------------------------------- [ COMPONENT ]
    return <html lang={ locale } style={ { colorScheme: theme } }>
        <body className="">
            <Theme attribute="class" defaultTheme={ theme }>
                <NextIntlClientProvider messages={ messages }>
                    <Switch icons={ switchIcons } id="theme" name="theme" role="switch" themeSwitcher values={ switchValues }/>
                    { /* Your navbar could go here */ }
                    { children }    
                    { /* Your footer could go here */ }
                </NextIntlClientProvider>
            </Theme>
        </body>
    </html>;
};
// Default Export ------------------------------------------------------------------------------------------------------------------------------------------------------ [ EXPORTS ]
export default RootLayout;