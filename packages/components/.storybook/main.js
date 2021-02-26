const path = require("path");

const aliases = {
  "@sentrei/components": path.resolve(__dirname, "../src"),
  "@emotion/core": path.resolve("..", "..", "node_modules/@emotion/react"),
  "@emotion/styled": path.resolve("..", "..", "node_modules/@emotion/styled"),
  "emotion-theming": path.resolve("..", "..", "node_modules/@emotion/react"),
};

module.exports = {
  addons: ["@storybook/addon-essentials"],
  stories: ["../src/**/*.stories.tsx"],
  refs: { "@chakra-ui/react": { disable: true } },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases,
    };

    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
