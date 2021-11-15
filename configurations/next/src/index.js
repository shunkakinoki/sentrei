const withBundleAnalyzer = require("@next/bundle-analyzer");
const { withSentryConfig } = require("@sentry/nextjs");
const withPlugins = require("next-compose-plugins");
const withTranslate = require("next-translate");

/**
 * @type {import('next').NextConfig}
 */
const defaultConfig = {
  compress: true,
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
  eslint: {
    ignoreDuringBuilds: true,
  },
  future: {
    excludeDefaultMomentLocales: true,
    strictPostcssConfiguration: true,
  },
  generateEtags: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja", "zh"],
  },
  poweredByHeader: true,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  target: "serverless",
  trailingSlash: false,
  typescript: {
    ignoreBuildErrors: false,
  },
};

const SentryWebpackPluginOptions = {
  include: [process.env.NEXT_OUTPUT_DIR + "/" + ".next"],
};

const plugins = [
  withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
  }),
  nextConfig => {
    return withSentryConfig(nextConfig, SentryWebpackPluginOptions);
  },
  withTranslate,
];

module.exports = { defaultConfig, plugins, withPlugins };
