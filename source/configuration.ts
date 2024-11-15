import type TConfiguration from ">_/types/TConfiguration";

const configuration: TConfiguration = {
    locales: [ `en-US`, `fr-FR`, `jp-JP` ],
    localesFallback: `en-US`,
    projectName: `NextJS Base Template I`,
    themes: [ `dark`, `light` ],
    themesFallback: `light`,
    version: `1.0`
};

const locales: TConfiguration[`locales`] = configuration.locales;
const localesFallback: TConfiguration[`localesFallback`] = configuration.localesFallback;
const themes: TConfiguration[`themes`] = configuration.themes;
const themesFallback: TConfiguration[`themesFallback`] = configuration.themesFallback;

export default configuration;
export { locales, localesFallback, themes, themesFallback };