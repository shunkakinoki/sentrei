const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const withTranslate = require("next-translate");
const withTM = require("next-transpile-modules")(["@sentrei/components"]);

const config = {
  experimental: {
    optimizeCss: true,
    optimizeFonts: true,
    optimizeImages: true,
    pageEnv: true,
    plugins: true,
    profiling: true,
    reactMode: "concurrent",
    scriptLoader: true,
    scrollRestoration: true,
    sprFlushToDisk: true,
    stats: true,
    workerThreads: true,
  },
  future: {
    excludeDefaultMomentLocales: true,
    strictPostcssConfiguration: true,
    webpack5: false,
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja", "zh"],
  },
  poweredByHeader: true,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
};

const plugins = [
  withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
  }),
  withTranslate,
  withTM,
];

module.exports = withPlugins(plugins, config);
