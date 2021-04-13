module.exports = {
  "stories": [
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "storybook-addon-performance/register",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}