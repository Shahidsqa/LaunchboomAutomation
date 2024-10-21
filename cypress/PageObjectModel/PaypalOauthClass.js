
class PaypalOauth{
    Oauth()
    {
        cy.get('.divide-y > :nth-child(1) > :nth-child(1) > a').click({scrollBehavior:false}).wait(2000)
        cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
        cy.get('#payment_method').select('Paypal',{scrollBehavior:false,force:true}).wait(2000)
        cy.get('#paypal-settings').scrollIntoView().wait(2000)
        cy.get('#paypal-settings > :nth-child(2) > [style="align-self:flex-end;"] > .mc-btn-wrap > .bg-white')
        .realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)
        cy.get('#email').type('sb-zann330851954@business.example.com').wait(2000)
        cy.get('#btnNext').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.get('#password').type('2,^e>GFh',{scrollBehavior:false}).wait(2000)
        cy.get('#btnLogin').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100)
    }
}
export default PaypalOauth