const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const withTranslate = require("next-translate");
const withTM = require("next-transpile-modules")([
  "@sentrei/atoms",
  "@sentrei/const",
  "@sentrei/molecules",
  "@sentrei/organisms",
  "@sentrei/roots",
  "@sentrei/screens",
  "@sentrei/themes",
  "@sentrei/utils",
]);

const config = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja", "zh"],
  },
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
