const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    watchForFileChanges:false,
    chromeWebSecurity: false,
    pageLoadTimeout:120000,
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on)
      
      chromeWebSecurity: false
      
    },
  },
});
