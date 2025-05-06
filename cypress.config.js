const { defineConfig } = require('cypress');

const registerGmailTask = require('./cypress/support/gmail-task')

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
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    watchForFileChanges:false,
    pageLoadTimeout:120000,
    setupNodeEvents(on, config) {
      registerGmailTask(on, config);
      return config,

      require('cypress-mochawesome-reporter/plugin')(on)
      
    },
  },
  
});















