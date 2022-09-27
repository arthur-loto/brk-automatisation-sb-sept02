const custom = require("../webpack.config.js");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-addon-themes"
  ],
  "framework": "@storybook/vue3",
  staticDirs: ['../public'],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules} };
  }
}