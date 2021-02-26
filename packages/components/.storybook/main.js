module.exports = {
  addons: ["@storybook/addon-essentials"],
  stories: ["../src/**/*.stories.tsx"],
  webpackFinal: async config => {
    config.resolve.modules.push("src");
    return config;
  },
};
