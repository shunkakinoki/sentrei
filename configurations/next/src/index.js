const withBundleAnalyzer = require("@next/bundle-analyzer");
const withNx = require("@nrwl/next/plugins/with-nx");
const withPlugins = require("next-compose-plugins");
const withTranslate = require("next-translate");

/**
 * @type {import('next').NextConfig}
 */
const defaultConfig = {
  experimental: {
    optimizeCss: true,
    optimizeFonts: true,
    optimizeImages: true,
    pageEnv: true,
    plugins: true,
    profiling: true,
    scriptLoader: true,
    scrollRestoration: true,
    sprFlushToDisk: true,
    stats: true,
    workerThreads: true,
  },
  future: {
    excludeDefaultMomentLocales: true,
    strictPostcssConfiguration: true,
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja", "zh"],
  },
  poweredByHeader: true,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  trailingSlash: false,
};

const plugins = [
  withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
  }),
  withNx,
  withTranslate,
];

module.exports = { defaultConfig, plugins, withPlugins };
