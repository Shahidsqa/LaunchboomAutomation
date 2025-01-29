const { defineConfig } = require('cypress');

module.exports = defineConfig({
  watchForFileChanges:false,
  env: {
    LaunchkitAppUrl: "https://release.launchboom.com/admin/app/login",
    CheckoutAppUrl1: "http://test.launchboomer.com",
    CheckoutAppUrl2: "http://test.launchboomer.com/1",
    CheckoutAppUrl3: "http://test.launchboomer.com/checkout",
    ProjectUrl: "https://release.launchboom.com/admin/projects/1510/edit",
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    chromeWebSecurity: false,
    pageLoadTimeout:120000,
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on)
      
      chromeWebSecurity: false
      
    },
  },
  
});
