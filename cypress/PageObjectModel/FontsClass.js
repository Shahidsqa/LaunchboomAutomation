class Fonts {

    FontsSelection()
      {
        cy.visit('https://release.launchboom.com/admin/projects/1510/ui-editor').wait(3000)
        cy.url().should('include','/ui-editor')
           // Selecting fonts
        cy.get('#extra-settings').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).wait(2000)
        cy.get('#select2-headline_font-container').click({scrollBehavior:false}).wait(1000)
        cy.get('.select2-search__field').type('Alice{enter}',{scrollBehavior:false}).wait(2000)        
        cy.get('#select2-copy_font-container').click({scrollBehavior:false}).wait(1000)
        cy.get('.select2-search__field').type('Oswald{enter}',{scrollBehavior:false}).wait(2000)
        cy.get('.swal2-confirm').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).wait(1500)
        cy.get('.toast-message').should('include.text','Settings Saved Successfully').wait(1000)
      }
      
        OptoutFlowFontsChecking()
        { 
        cy.visit(Cypress.env('CheckoutAppUrl1')).wait(5000)
         // Verifying fonts on LP
        cy.get('h1, h2, h3, h4, h5, h6').each(($heading) => {
        cy.wrap($heading).should('have.css', 'font-family', 'Alice')}).wait(1000)
        cy.get('p').not('.foot-wrap p').each(($paragraph) => {
        cy.wrap($paragraph).should('have.css', 'font-family', 'Oswald')}).wait(1000)
        // Entering Email
        cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location').scrollIntoView().wait(2000)
        cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .email').type('f.faisalathar@gmail.com',{scrollBehavior:false})
        cy.wait(2000)
        cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .cta-form-submit').click({scrollBehavior:false}).wait(4000)
        // Verifying fonts on Reservation page
        cy.get('h1, h2, h3, h4, h5, h6').each(($heading) => {
        cy.wrap($heading).should('have.css', 'font-family', 'Alice')}).wait(1000)
        cy.get('p').not('.foot-wrap p').each(($paragraph) => {
        cy.wrap($paragraph).should('have.css', 'font-family', 'Oswald')}).wait(1000)
        cy.get('.btn').scrollIntoView().wait(1000)
        cy.get('.no-thanks-link').click({scrollBehavior:false}).wait(3000)
        // Verifying fonts on Thank-you page
        cy.get('h1, h2, h3, h4, h5, h6').each(($heading) => {
        cy.wrap($heading).should('have.css', 'font-family', 'Alice')}).wait(1000)
        cy.get('p').not('.foot-wrap p').each(($paragraph) => {
        cy.wrap($paragraph).should('have.css', 'font-family', 'Oswald')}).wait(1000)
        cy.go(-1).wait(2000)
        cy.get('.btn').scrollIntoView().wait(1000).click().wait(7000)
        // Filling checkout form
        cy.frameLoaded("[title='Secure address input frame']")
        cy.get("[title='Secure address input frame']").scrollIntoView().wait(1000)
        cy.iframe("[title='Secure address input frame']").find('#Field-nameInput').type('Faisal Athar').wait(1000)
        cy.iframe("[title='Secure address input frame']").find('#Field-countryInput').select('United States').wait(1000)
        cy.iframe("[title='Secure address input frame']").find('#Field-addressLine1Input').type('134 Eldridge Street').wait(1000)
        cy.iframe("[title='Secure address input frame']").find('#Field-localityInput').type('New York').wait(1000)
        cy.iframe("[title='Secure address input frame']").find('#Field-administrativeAreaInput').select('Alaska').wait(1000)
        cy.iframe("[title='Secure address input frame']").find('#Field-postalCodeInput').type('99999').wait(1000)
        cy.iframe("[title='Secure address input frame']").find('#Field-phoneInput').type('(236) 555-5523').wait(1000)
        cy.frameLoaded("[title='Secure payment input frame']")
        cy.get("[title='Secure payment input frame']").scrollIntoView().wait(1000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-numberInput').type('4111111111111111').wait(1000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-expiryInput').type('04 / 27').wait(1000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-cvcInput').type('111').wait(2000)
        // Verifying fonts on Checkout page
        cy.get('h1, h2, h3, h4, h5, h6').each(($heading) => {
         cy.wrap($heading).should('have.css', 'font-family', 'Montserrat, sans-serif')})
         cy.get('p').not('.foot-wrap p').each(($paragraph) => {
         cy.wrap($paragraph).should('have.css', 'font-family', 'Montserrat, sans-serif')})
         cy.get('input').each(($input) => {
         cy.wrap($input).should('have.css', 'font-family', 'Montserrat, sans-serif')})
         cy.get('button').each(($button) => {
         cy.wrap($button).should('have.css', 'font-family', 'Montserrat, sans-serif')})
         cy.get('label').each(($label) => {
         cy.wrap($label).should('have.css', 'font-family', 'Montserrat, sans-serif')})
         cy.get('#card-button').scrollIntoView().click({scrollBehavior:false}).invoke('text','Processing...').wait(5000)
         cy.url().should('include','/reserved')
        // Verifying fonts on Reserved page
        cy.get('h1, h2, h3, h4, h5, h6').each(($heading) => {
        cy.wrap($heading).should('have.css', 'font-family', 'Alice')}).wait(1000)
        cy.get('p').not('.foot-wrap p').each(($paragraph) => {
        cy.wrap($paragraph).should('have.css', 'font-family', 'Oswald')}).wait(1000)
    }

     FollowerFlowFontsChecking()
     {
        cy.visit(Cypress.env('CheckoutAppUrl1')).wait(5000)
        // Verifying fonts on LP
        cy.get('h1, h2, h3, h4, h5, h6').each(($heading) => {
        cy.wrap($heading).should('have.css', 'font-family', 'Alice')}).wait(1000)
        cy.get('p').not('.foot-wrap p').each(($paragraph) => {
        cy.wrap($paragraph).should('have.css', 'font-family', 'Oswald')}).wait(1000)
        // Entering Email
        cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location').scrollIntoView().wait(2000)
        cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .email')
        .type('f.faisalathar@gmail.com',{scrollBehavior:false})
        cy.wait(2000)
        cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .cta-form-submit')
        .click({scrollBehavior:false}).wait(4000)
        cy.url().should('include','/follower').wait(1000)
        // Verifying fonts on Follower page
        cy.get('h1, h2, h3, h4, h5, h6').each(($heading) => {
        cy.wrap($heading).should('have.css', 'font-family', 'Alice')}).wait(1000)
        cy.get('p').not('.foot-wrap p').each(($paragraph) => {
        cy.wrap($paragraph).should('have.css', 'font-family', 'Oswald')}).wait(4000)
     }
}
export default Fonts