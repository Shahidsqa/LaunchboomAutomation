import Fonts from "../../PageObjectModel/FontsClass"
import AiContent from "../../PageObjectModel/Ai-content-Class"
import funnelTypes from "../../PageObjectModel/FunnelClass"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)
it('Fonts Checking',function(){
    cy.viewport(1200,600)
    const obj1 = new Fonts()
    const obj2 = new AiContent()
    const obj3 = new funnelTypes()
    obj2.Login()
    obj1.FontsSelection()    
    // obj3.StripeMethod()
    // obj3.BillingAddress()
    // obj3.optoutFunnel()
    // obj1.OptoutFlowFontsChecking()
    // obj3.followerFunnel()
    // obj1.FollowerFlowFontsChecking()
})