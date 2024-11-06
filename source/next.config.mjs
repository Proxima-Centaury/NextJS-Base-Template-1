import createNextIntlPlugin from "next-intl/plugin";
import { fileURLToPath } from "url";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withAnalyze = withBundleAnalyzer({ enabled: process.env.ANALYZE === `true` });
const withNextInternationalization = createNextIntlPlugin(`./i18n.ts`);
const __filename = fileURLToPath(import.meta.url);

/** @type { import("next").NextConfig } */
const nextConfiguration = {
    experimental: {
        workerThreads: true // Multi-threading work
    },
    productionBrowserSourceMaps: false,
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

export default withNextInternationalization(withAnalyze(nextConfiguration));