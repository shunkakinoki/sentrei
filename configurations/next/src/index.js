const withBundleAnalyzer = require("@next/bundle-analyzer");
const { withSentryConfig } = require("@sentry/nextjs");
const withPlugins = require("next-compose-plugins");
const withTranslate = require("next-translate");

/**
 * @type {import('next').NextConfig}
 */
const defaultConfig = {
  experimental: {
    concurrentFeatures: true,
    optimizeCss: true,
    serverComponents: true,
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
