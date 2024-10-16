const { defineConfig } = require('cypress');

module.exports = defineConfig({
  defaultCommandTimeout:6000,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    watchForFileChanges:false,
    chromeWebSecurity: false,
    defaultCommandTimeout:10000,
    pageLoadTimeout:120000,
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on)
      
      chromeWebSecurity: false
      
    },
  },
});
