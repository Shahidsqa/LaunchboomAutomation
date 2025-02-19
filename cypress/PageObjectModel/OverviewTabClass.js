
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
    cy.get('body').should('have.css', 'font').and('include','Poppins')
    }

    WrongFormatFileUpload()
    {
        cy.get('#overview > .py-4 > :nth-child(2) > :nth-child(2)').scrollIntoView().wait(2000)
        const path = require('path')
        const filePath = path.join('cypress', 'fixtures', 'fire.pdf')
        cy.get('.file-label').realHover({scrollBehavior:false}).wait(1000).selectFile(filePath,{scrollBehavior:false}).wait(2000)
        cy.get('#image-error').should('include.text','Invalid file type. Please upload a JPG or PNG.').wait(1000)
    }

    WrongFormatImageUpload()
    {
        cy.get('#overview > .py-4 > :nth-child(2) > :nth-child(2)').scrollIntoView().wait(2000)
        const path = require('path')
        const filePath = path.join('cypress', 'fixtures', 'light.gif')
        cy.get('.file-label').realHover({scrollBehavior:false}).wait(1000).selectFile(filePath,{scrollBehavior:false}).wait(2000)
        cy.get('#image-error').should('include.text','Invalid file type. Please upload a JPG or PNG.').wait(1000)
    }

    ValidFormatImageUpload()
    {
        const path = require('path')
        const filePath = path.join('cypress', 'fixtures', 'nature.jpg')
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

    RedirectionToggleOff()
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
        cy.get('#myTab > .active').scrollIntoView().wait(2000)
        cy.get('#overview > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
        .click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.get('#alert-1').should('include.text', 'Project Successfully Updated.')
    }  
    
}
export default OverviewTab