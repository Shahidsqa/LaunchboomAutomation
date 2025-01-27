
class OverviewTab
{
   UpdateProjectName()
   {
    cy.get('.divide-y > :nth-child(1) > :nth-child(1) > a').click({scrollBehavior:false}).wait(2000)
    cy.get('#name').clear({scrollBehavior:false}).wait(1000).type('Testing Project',{scrollBehavior:false}).wait(1000)
    cy.get('#overview > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
    .click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)
    cy.get('.mt-1\\.5 > li').should('include.text','The name has already been taken.').wait(1000)
    const random = 'Updated Project'+Math.floor(Math.random() * (999 - 100 + 1))
    cy.get('#name').clear({scrollBehavior:false}).wait(1000).type(random,{scrollBehavior:false}).wait(1000)
    cy.get('#overview > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
    .click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
    cy.get('#alert-1').should('include.text', 'Project Successfully Updated.').wait(1000)

   }

   SEODescription()
    {
    cy.get('#myTab > .active').scrollIntoView()
    cy.get('#description').type("Testing SEO Description",{scrollBehavior:false}).wait(1000)
    cy.get('#overview > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
    .click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
    cy.get('#description').should('include.text','Testing SEO Description').wait(1000)
    }

    WrongFormatImageUpload()
    {
        cy.get('#overview > .py-4 > :nth-child(2) > :nth-child(2)').scrollIntoView().wait(2000)
        const path = require('path')
        const filePath = path.join('cypress', 'fixtures', 'fire.pdf')
        cy.get('.file-label').realHover({scrollBehavior:false}).wait(1000).selectFile(filePath,{scrollBehavior:false}).wait(2000)
        cy.get('#image-error').should('include.text','Invalid file type. Please upload a JPG or PNG.').wait(1000)
    }

    ValidFormatImageUpload()
    {
        const path = require('path')
        const filePath = path.join('cypress', 'fixtures', 'images.jpg')
        cy.get('.file-label').realHover({scrollBehavior:false}).wait(1000).selectFile(filePath,{scrollBehavior:false}).wait(2000)
        cy.get('#myTab > .active').scrollIntoView().wait(2000)
        cy.get('#overview > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
        .click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.get('#overview > .py-4 > :nth-child(2) > :nth-child(2)').scrollIntoView().wait(1000)
        cy.get('.thumbnail').should('be.visible') // Ensure the image is visible
        .and(($img) => {
          // Assert the src attribute is not empty or undefined
          expect($img).to.have.attr('src').not.empty})
    }

    Redirection()
    {
        cy.visit(Cypress.env('ProjectUrl')).wait(2000)
        cy.url().should('include','/edit')
        cy.get('#overview > .py-4 > :nth-child(2) > :nth-child(4)').scrollIntoView().wait(2000)
        cy.get('#redirect_url').clear({scrollBehavior:false}).type('https://www.gokollab.com/discovery',{scrollBehavior:false}).wait(2000)
        cy.get('#overview > .py-4 > :nth-child(2) > :nth-child(4) > :nth-child(2) > .toggle-button > .mt-2 > .toggle')
        .then(($toggle) => {
            // Get the background color of the toggle
             const color = $toggle.css('background-color')
             if(color === 'rgb(201, 201, 201)')
             {
                cy.get('#overview > .py-4 > :nth-child(2) > :nth-child(4) > :nth-child(2) > .toggle-button > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)
             }
             else 
             {
                cy.log('Redirection Toggle is ON')
             }
           })
        cy.get('#myTab > .active').scrollIntoView().wait(2000)
        cy.get('#overview > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
        .click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.visit(Cypress.env('CheckoutAppUrl1')).wait(5000)
        cy.url().should('eq','https://www.gokollab.com/discovery').wait(1000)
    }

    RedirectionToggle()
    {
        cy.visit(Cypress.env('ProjectUrl')).wait(2000)
        cy.url().should('include','/edit')
        // Making Redirection Toggle Off
        cy.get('#overview > .py-4 > :nth-child(2) > :nth-child(4)').scrollIntoView().wait(2000)
        cy.get('#overview > .py-4 > :nth-child(2) > :nth-child(4) > :nth-child(2) > .toggle-button > .mt-2 > .toggle')
        .then(($toggle) => {
            // Get the background color of the toggle
             const color = $toggle.css('background-color')
             if(color === 'rgb(201, 201, 201)')
             {
                cy.log('Redirection Toggle is OFF')
             }
             else 
             {
                cy.get('#overview > .py-4 > :nth-child(2) > :nth-child(4) > :nth-child(2) > .toggle-button > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)
             }
           })
    }  
    
     FontsSelection()
       {
           // Setting fonts
        cy.get('#overview > .py-4 > :nth-child(2) > :nth-child(7)').scrollIntoView().wait(2000)
        cy.get('#select2-headline_font-container').click({scrollBehavior:false}).wait(1000)
        cy.get('.select2-search__field').type('Iceberg{enter}',{scrollBehavior:false}).wait(2000)
        cy.get('#select2-copy_font-container').click({scrollBehavior:false}).wait(1000)
        cy.get('.select2-search__field').type('Playwrite IS{enter}',{scrollBehavior:false}).wait(2000)
        cy.get('#myTab > .active').scrollIntoView().wait(2000)
        cy.get('#overview > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
        .click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.get('#alert-1').should('include.text', 'Project Successfully Updated.').wait(1000)
     }
      
        OptoutFlowFontsChecking()
        { 
        cy.visit(Cypress.env('CheckoutAppUrl1')).wait(5000)
         // Verifying fonts on LP
        cy.get('h1, h2, h3, h4, h5, h6').each(($heading) => {
        cy.wrap($heading).should('have.css', 'font-family', 'Iceberg')}).wait(1000)
        cy.get('p').not('.foot-wrap p').each(($paragraph) => {
        cy.wrap($paragraph).should('have.css', 'font-family', '"Playwrite IS"')}).wait(1000)
        cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location').scrollIntoView().wait(2000)
        cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .email').type('f.faisalathar@gmail.com',{scrollBehavior:false})
        cy.wait(2000)
        cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .cta-form-submit').click({scrollBehavior:false}).wait(4000)
        // Verifying fonts on Reservation page
        cy.get('h1, h2, h3, h4, h5, h6').each(($heading) => {
        cy.wrap($heading).should('have.css', 'font-family', 'Iceberg')}).wait(1000)
        cy.get('p').not('.foot-wrap p').each(($paragraph) => {
        cy.wrap($paragraph).should('have.css', 'font-family', '"Playwrite IS"')}).wait(1000)
        cy.get('.btn').scrollIntoView().wait(1000)
        cy.get('.no-thanks-link').click({scrollBehavior:false}).wait(3000)
        // Verifying fonts on Thank-you page
        cy.get('h1, h2, h3, h4, h5, h6').each(($heading) => {
        cy.wrap($heading).should('have.css', 'font-family', 'Iceberg')}).wait(1000)
        cy.get('p').not('.foot-wrap p').each(($paragraph) => {
        cy.wrap($paragraph).should('have.css', 'font-family', '"Playwrite IS"')}).wait(1000)
        cy.go(-1).wait(2000)
        cy.get('.btn').scrollIntoView().wait(1000).click().wait(7000)
        cy.url().should('include','/checkout').wait(1000)
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
         cy.get('#card-button').click().wait(5000)
        cy.url().should('include','/reserved')
        // Verifying fonts on Reserved page
        cy.get('h1, h2, h3, h4, h5, h6').each(($heading) => {
        cy.wrap($heading).should('have.css', 'font-family', 'Iceberg')}).wait(1000)
        cy.get('p').not('.foot-wrap p').each(($paragraph) => {
        cy.wrap($paragraph).should('have.css', 'font-family', '"Playwrite IS"')}).wait(1000)
    }

     FollowerFlowFontsChecking()
     {
        cy.visit(Cypress.env('CheckoutAppUrl1')).wait(5000)
        // Verifying fonts on LP
        cy.get('h1, h2, h3, h4, h5, h6').each(($heading) => {
        cy.wrap($heading).should('have.css', 'font-family', 'Iceberg')}).wait(1000)
        cy.get('p').not('.foot-wrap p').each(($paragraph) => {
        cy.wrap($paragraph).should('have.css', 'font-family', '"Playwrite IS"')}).wait(1000)
        cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location').scrollIntoView().wait(2000)
        cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .email')
        .type('f.faisalathar@gmail.com',{scrollBehavior:false})
        cy.wait(2000)
        cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .cta-form-submit')
        .click({scrollBehavior:false}).wait(3000)
        cy.url().should('include','/follower').wait(1000)
        // Verifying fonts on Follower page
        cy.get('h1, h2, h3, h4, h5, h6').each(($heading) => {
        cy.wrap($heading).should('have.css', 'font-family', 'Iceberg')}).wait(1000)
        cy.get('p').not('.foot-wrap p').each(($paragraph) => {
        cy.wrap($paragraph).should('have.css', 'font-family', '"Playwrite IS"')}).wait(4000)
     }

    
}
export default OverviewTab