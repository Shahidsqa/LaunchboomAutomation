import { realHover } from "cypress-real-events/commands/realHover"

class McStripeOauth{
    mcOAuth()
    {
        cy.get('.divide-y > :nth-child(1) > :nth-child(1) > a').click({scrollBehavior:false}).wait(2000)
        cy.get('[data-tabs-target="#email"]').click({scrollBehavior:false}).wait(2000)
        cy.get('.flex > [style="align-self:flex-end;"] > .mc-btn-wrap > .bg-white').realHover({scrollBehavior:false})
        .wait(1000).click().realMouseMove(100,100).wait(3000)
        cy.get('#username').type('FaisalSqa')
        cy.get('#password').type('Asdf@1234')
        cy.get('.button-wide').realHover({scrollBehavior:false}).wait(2000).click().realMouseMove(100,100).wait(3000)
        cy.get('#\\30  > .block').click()
        cy.get('#submitButton').scrollIntoView().realHover().wait(1000).click().wait(3000)
        cy.get('.swal2-select').select('LaunchKit').wait(2000)
        cy.get('.swal2-confirm').realHover().wait(1000).click().wait(1000)
        cy.get('[data-tabs-target="#email"]').click({scrollBehavior:false}).wait(2000)
   }

    stripeOauth()
   {
       cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
       cy.get('#stripe-settings > .flex').scrollIntoView().wait(2000)
       cy.get('#stripe-settings > .flex > :nth-child(2) > [style="align-self:flex-end;"] > .mc-btn-wrap > .bg-white')
       .realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)
       cy.get('.Button-label > span').realHover({scrollBehavior:false}).wait(1000).click().realMouseMove(100,100).wait(5000)
   }

}
export default McStripeOauth