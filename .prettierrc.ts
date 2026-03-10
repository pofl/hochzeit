export default {
  // base config
  tabWidth: 2,
  useTabs: false,
  printWidth: 120,

  // astro
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      }
    }
  ]
}
