const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const withTranslate = require("next-translate");

const isProduction = process.env.VERCEL_ENV === "production";

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
    webpack5: true,
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja", "zh"],
  },
  poweredByHeader: true,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  webpack: config => {
    config.resolve.symlinks = isProduction ? true : false;
    return config;
  },
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
