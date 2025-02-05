import { realHover } from "cypress-real-events/commands/realHover"

class McStripeOauth{
    mcOAuth()
    {
        cy.get('.divide-y > :nth-child(1) > :nth-child(1) > a').click({scrollBehavior:false}).wait(2000)
        cy.get('[data-tabs-target="#email"]').click({scrollBehavior:false}).wait(2000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('.flex > [style="align-self:flex-end;"] > .mc-btn-wrap > .bg-white').should('include.text','Connect My Account')
        .realHover({scrollBehavior:false})
        .wait(1000).click().realMouseMove(100,100).wait(5000)
        cy.url().should('include','login.mailchimp.com')
        cy.get('#username').scrollIntoView().type('FaisalSqa',{force:true})
        cy.get('#password').type('Asdf@1234',{force:true})
        cy.get('.button-wide').realHover().wait(1000).click({force:true}).realMouseMove(100,100).wait(3000)
        cy.get('#\\30  > .block').click()
        cy.get('#submitButton').scrollIntoView().realHover().wait(1000).click().wait(4000)
        cy.url().should('include','edit?mailchimp_list_id')
        cy.get('.swal2-select').select('LaunchKit').wait(2000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('.swal2-confirm').realHover().wait(1000).click().wait(1000)
        cy.get('[data-tabs-target="#email"]').click({scrollBehavior:false}).wait(1000)
        cy.get('#alert-1').should('include.text','Project Successfully Updated').wait(1000)
        cy.get('#change-list').should('include.text','Change Mailchimp List')
   }

    ChangeList()
    {
        cy.get('#change-list').realHover({scrollBehavior:false})
        .wait(1000).click().realMouseMove(100,100).wait(3000)
        cy.get('.swal2-select').select('LaunchKit').wait(2000)
        cy.get('.swal2-confirm').realHover().wait(1000).click().wait(2000)
        cy.get('#alert-1').should('include.text','Project Successfully Updated').wait(1000)
    }

    ResetmcOauth()
    {
        cy.get('[data-tabs-target="#email"]').click({scrollBehavior:false}).wait(1000)
        cy.get('.underline > span').realHover({scrollBehavior:false}).wait(1000).click().realMouseMove(100,100).wait(2000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('.swal2-cancel').realHover().wait(1000).click().wait(2000)
        cy.get('p').should('include.text','Mailchimp is connected!').wait(1000)
        cy.get('.underline > span').realHover({scrollBehavior:false}).wait(1000).click().realMouseMove(100,100).wait(2000)
        cy.get('.swal2-confirm').realHover().wait(1000).click().wait(2000)
        cy.get('#alert-1').should('include.text','Mailchimp Oauth reset successfully').wait(1000)

    }

    stripeOauth()
   {
       cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
       cy.get('body').should('have.css', 'font').and('include','Poppins')
       cy.get('#stripe-settings > .flex').scrollIntoView().wait(2000)
       cy.get('#stripe-settings > .flex > :nth-child(2) > [style="align-self:flex-end;"] > .mc-btn-wrap > .bg-white')
       .realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(5000)
       cy.url().should('include','connect.stripe.com/oauth')
       cy.get('.Button-label > span').realHover({scrollBehavior:false}).wait(1000).click().realMouseMove(100,100).wait(5000)
       cy.get('#alert-1').should('include.text','Successfully connected to stripe').wait(1000)
   }

   ResetstripeOauth()
   {
    cy.get('#stripe-settings > .flex').scrollIntoView().wait(2000)
    cy.get('#stripe-settings > .flex > :nth-child(2) > :nth-child(2) > .underline > span')
    .realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
    cy.get('body').should('have.css', 'font').and('include','Poppins')
    cy.get('.swal2-cancel').realHover().wait(1000).click()
    cy.get('#stripe-settings > .flex').scrollIntoView().wait(2000)
    cy.get('p').should('include.text','Success! Your Stripe account is now connected').wait(1000)
    cy.get('#stripe-settings > .flex > :nth-child(2) > :nth-child(2) > .underline > span')
    .realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
    cy.get('.swal2-confirm').realHover().wait(1000).click().wait(4000)
    cy.get('#alert-1').should('include.text','Stripe Oauth reset successfully').wait(1000)

   }

}
export default McStripeOauth
