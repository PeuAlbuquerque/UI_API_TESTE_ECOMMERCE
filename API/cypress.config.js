const { defineConfig } = require("cypress");

const {
  configureAllureAdapterPlugins,
} = require("@mmisty/cypress-allure-adapter/plugins");

module.exports = defineConfig({
  screenshotsFolder: "cypress/screenshots",
  e2e: {
    baseUrl: "https://www.advantageonlineshopping.com/",
    defaultCommandTimeout: 30000,
    trashAssetsBeforeRuns: true,
    env: {
      allure: true,
      allureCleanResults: true,
      allureSkipCommands: "wrap",
      allureResults: "allure-results",
    },
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);

      return config;
    },
  },
});
