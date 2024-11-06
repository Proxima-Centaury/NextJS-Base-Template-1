/** @type {import('next-sitemap').IConfig} */
module.exports = {
    changefreq: `daily`,
    exclude: [ `/server-sitemap-index.xml` ],
    generateRobotsTxt: false,
    i18n: {
        locales: [ `en-US`, `fr-FR` ],
        defaultLocale: `en-US`
    },
    robotsTxtOptions: {
        additionalSitemaps: [
            `${ (process.env.NODE_ENV === `production`) ? process.env.URLPROD : process.env.URLDEV }/en-US/server-sitemap-index.xml`,
            `${ (process.env.NODE_ENV === `production`) ? process.env.URLPROD : process.env.URLDEV }/fr-FR/server-sitemap-index.xml`
        ]
    },
    siteUrl: (process.env.NODE_ENV === `production`) ? process.env.URLPROD : process.env.URLDEV
};