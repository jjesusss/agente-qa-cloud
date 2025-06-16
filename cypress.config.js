const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://bidtv.stage.superbid.net',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
