
class PaypalOauth{
    Oauth()
    {
        cy.get('.divide-y > :nth-child(1) > :nth-child(1) > a').click({scrollBehavior:false}).wait(2000)
        cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
        cy.get('#payment_method').select('Paypal',{scrollBehavior:false,force:true}).wait(2000)
        cy.get('#paypal-settings').scrollIntoView().wait(2000)
        cy.get('#paypal-settings > :nth-child(2) > [style="align-self:flex-end;"] > .mc-btn-wrap > .bg-white')
        .realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)
        cy.url().should('include','https://www.sandbox.paypal.com/signin')
        cy.get('#email').type('sb-zann330851954@business.example.com').wait(2000)
        cy.get('#btnNext').realHover({scrollBehavior:false}).click({scrollBehavior:false,force:true}).realMouseMove(100,100).wait(2000)
        cy.get('#password').type('12345678',{scrollBehavior:false}).wait(2000)
        cy.get('#btnLogin').realHover({scrollBehavior:false}).click({scrollBehavior:false,force:true}).realMouseMove(100,100).wait(3000)
        cy.get('#alert-1').should('include.text','Successfully connected to Paypal').wait(3000)

    }

    ResetOauth()
    {
        cy.get('#paypal-settings').scrollIntoView().wait(2000)
        cy.get('.underline > span').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.get('.swal2-cancel').realHover().wait(1000).click()
        cy.get('#paypal-settings').scrollIntoView().wait(2000)
        cy.get('p').should('include.text','Success! Your Paypal account is now connected')
        cy.get('.underline > span').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.get('.swal2-confirm').realHover().wait(1000).click().wait(4000)
        cy.get('#alert-1').should('include.text','Paypal Oauth reset successfully').wait(1000)
    }
    
}
export default PaypalOauth
