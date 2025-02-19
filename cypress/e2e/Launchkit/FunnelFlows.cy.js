import funnelTypes from "../../PageObjectModel/FunnelClass"
import AiContent from "../../PageObjectModel/Ai-content-Class"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)
it('Funnel Types/Flows',function(){
    cy.viewport(1200,600)
    const obj1 = new funnelTypes()
    const obj2 = new AiContent()
     obj2.Login()
     obj1.StripeMethod()
     obj1.BillingAddress()
     obj1.classicFunnel()
     obj1.classicFlow()
     obj1.followerFunnel()
     obj1.followerFlow()
     obj1.optoutFunnel()
     obj1.optoutFlow()
})
