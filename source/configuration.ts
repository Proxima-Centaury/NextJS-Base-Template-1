// Types --------------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import type TConfiguration from ">_/types/TConfiguration";
// Configuration -------------------------------------------------------------------------------------------------------------------------------------------------- [ DECLARATIONS ]
const configuration: TConfiguration = {
    locales: [ `en-US`, `fr-FR` ],
    localesFallback: `en-US`,
    projectName: `NextJS Base Template I`,
    themes: [ `dark`, `light` ],
    themesFallback: `light`,
    version: `1.0`
};
// Property ------------------------------------------------------------------------------------------------------------------------------------------------------- [ DECLARATIONS ]
const locales: TConfiguration[`locales`] = configuration.locales;
// Property ------------------------------------------------------------------------------------------------------------------------------------------------------- [ DECLARATIONS ]
const localesFallback: TConfiguration[`localesFallback`] = configuration.localesFallback;
// Property ------------------------------------------------------------------------------------------------------------------------------------------------------- [ DECLARATIONS ]
const themes: TConfiguration[`themes`] = configuration.themes;
// Property ------------------------------------------------------------------------------------------------------------------------------------------------------- [ DECLARATIONS ]
const themesFallback: TConfiguration[`themesFallback`] = configuration.themesFallback;
// Default Export ------------------------------------------------------------------------------------------------------------------------------------------------------ [ EXPORTS ]
export default configuration;
// Exports ------------------------------------------------------------------------------------------------------------------------------------------------------------- [ EXPORTS ]
export { locales, localesFallback, themes, themesFallback };