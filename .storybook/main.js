const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const aliases = require("./aliases");
const reactJsxPlugin = require("vite-react-jsx").default;

module.exports = {
  stories: ["../components/**/*.stories.tsx"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: false,
      },
    },
    "@storybook/addon-controls",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    // "storybook-addon-next-router",
    "storybook-dark-mode",
  ],
  webpackFinal: async config => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
  async viteFinal(config) {
    config.plugins.push(new reactJsxPlugin());
    config.resolve.alias = aliases;
    return config;
  },
  core: {
    builder: "storybook-builder-vite",
  },
  typescript: {
    check: true,
  },
  // core: {
  //   builder: "webpack5",
  // },
};
