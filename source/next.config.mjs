// Dependencies -------------------------------------------------------------------------------------------------------------------------------------------------------- [ IMPORTS ]
import { fileURLToPath } from "url";
import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";
// Configuration -------------------------------------------------------------------------------------------------------------------------------------------------- [ DECLARATIONS ]
const withNextInternationalization = createNextIntlPlugin(`./i18n.ts`);
// Configuration -------------------------------------------------------------------------------------------------------------------------------------------------- [ DECLARATIONS ]
const withAnalyze = withBundleAnalyzer({ enabled: process.env.ANALYZE === `true` });
// Variable ------------------------------------------------------------------------------------------------------------------------------------------------------- [ DECLARATIONS ]
const __filename = fileURLToPath(import.meta.url);
// Configuration -------------------------------------------------------------------------------------------------------------------------------------------------- [ DECLARATIONS ]
/** @type { import("next").NextConfig } */
const nextConfiguration = {
    experimental: {
        workerThreads: true // Multi-threading compilation
    },
    productionBrowserSourceMaps: false,
    swcMinify: true, // To be removed in NextJS 15
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
export default withNextInternationalization(withAnalyze(nextConfiguration));