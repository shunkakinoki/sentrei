module.exports = {
  addons: [
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  stories: ["../src/**/*.stories.tsx"],
  webpackFinal: async config => {
    config.resolve.modules.push("src");

    return config;
  },
};
