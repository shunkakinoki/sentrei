const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const aliases = require("./aliases");
const reactJsxPlugin = require("vite-react-jsx").default;

module.exports = {
  stories: ["../apps/**/*.stories.tsx", "../components/**/*.stories.tsx"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: false,
      },
    },
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    {
      name: "@storybook/addon-storysource",
      options: {
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: true,
        },
      },
    },
    "storybook-addon-designs",
    "storybook-addon-next-router",
    "storybook-dark-mode",
  ],
  core: {
    builder: "webpack5",
    //   builder: "storybook-builder-vite",
  },
  webpackFinal: async config => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
  async viteFinal(config) {
    config.plugins.push(new reactJsxPlugin());
    config.resolve.alias = aliases;
    return config;
  },
};
