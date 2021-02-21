const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const withTranslate = require("next-translate");

const config = {
  experimental: {
    reactMode: "concurrent",
  },
  future: { webpack5: true },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja", "zh"],
  },
  poweredByHeader: true,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
};

const plugins = [
  [
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === "true",
    }),
    withTranslate,
  ],
];

module.exports = withPlugins(plugins, config);
