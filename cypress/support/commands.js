Cypress.Commands.add('getIframeBody', (iframeSelector) => {
    return cy
      .get('.__PrivateStripeElement > iframe') // Get the iframe
     // .its('0.contentDocument.body') // Get the document of the iframe
      .should('be.visible') // Ensure the iframe body is not empty
      .then(cy.wrap); // Wrap the body so Cypress can interact with it
  });

  import 'cypress-real-events/support'
  import { realHover } from "cypress-real-events/commands/realHover"
  import "cypress-wait-until"
  import "cypress-iframe"
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })