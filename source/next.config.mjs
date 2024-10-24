// Dependencies -------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import { fileURLToPath } from "url";
import createNextIntlPlugin from "next-intl/plugin";
// Configuration -------------------------------------------------------------------------------------------------------------------------------------------------- [ DECLARATIONS ]
const withNextInternationalization = createNextIntlPlugin(`./i18n.ts`);
// Variable ------------------------------------------------------------------------------------------------------------------------------------------------------- [ DECLARATIONS ]
const __filename = fileURLToPath(import.meta.url);
// Configuration -------------------------------------------------------------------------------------------------------------------------------------------------- [ DECLARATIONS ]
/** @type { import("next").NextConfig } */
const nextConfiguration = {
    webpack: (config, { isServer }) => {
        if(!isServer) {
            config.cache = {
                type: `filesystem`,
                buildDependencies: {
                    config: [ __filename ]
                }
            }
        };
        return config;
    }
};
// Default Export ------------------------------------------------------------------------------------------------------------------------------------------------------ [ EXPORTS ]
export default withNextInternationalization(nextConfiguration);