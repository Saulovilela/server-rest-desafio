const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "https://front.serverest.dev/login",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor",cucumber());
    },
  },
});
