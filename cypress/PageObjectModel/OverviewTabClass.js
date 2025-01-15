
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
    cy.get('.ml-3').should('include.text', 'Project Successfully Updated.').wait(1000)

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
    }

    Redirection()
    {
        cy.visit(Cypress.env('ProjectUrl')).wait(2000)
        cy.get('#overview > .py-4 > :nth-child(2) > :nth-child(4)').scrollIntoView().wait(2000)
        cy.get('#redirect_url').clear({scrollBehavior:false}).type('https://www.skool.com/launchboom/about',{scrollBehavior:false}).wait(1000)
        cy.get('.toggle-button > .block').click({scrollBehavior:false}).wait(2000)
        cy.get('#myTab > .active').scrollIntoView().wait(2000)
        cy.get('#overview > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
        .click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.visit(Cypress.env('CheckoutAppUrl1')).wait(5000)
        cy.url().should('eq','https://www.skool.com/launchboom/about').wait(1000)
    }

    CheckingFonts()
    {
        cy.visit(Cypress.env('ProjectUrl')).wait(2000)
        cy.get('#overview > .py-4 > :nth-child(2) > :nth-child(4)').scrollIntoView().wait(1000)
        cy.get('.toggle-button > .block').click({scrollBehavior:false}).wait(1000)
        cy.get('#overview > .py-4 > :nth-child(2) > :nth-child(7)').scrollIntoView().wait(2000)
        cy.get('#select2-headline_font-container').click({scrollBehavior:false}).wait(1000)
        cy.get('.select2-search__field').type('Iceberg{enter}',{scrollBehavior:false}).wait(2000)
        cy.get('#select2-copy_font-container').click({scrollBehavior:false}).wait(1000)
        cy.get('.select2-search__field').type('Playwrite IS{enter}',{scrollBehavior:false}).wait(2000)
        cy.get('#myTab > .active').scrollIntoView().wait(2000)
        cy.get('#overview > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
        .click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.visit(Cypress.env('CheckoutAppUrl1')).wait(5000)
        cy.get('h1, h2, h3, h4, h5, h6').each(($heading) => {
            cy.wrap($heading).should('have.css', 'font-family', 'Iceberg');
          })
          cy.wait(1000)
          cy.get('p').not('.foot-wrap p').each(($paragraph) => {
            cy.wrap($paragraph).should('have.css', 'font-family', '"Playwrite IS"');
          })
    }
}
export default OverviewTab