import AiContent from "../../PageObjectModel/Ai-content-Class"
import McStripeOauth from "../../PageObjectModel/MC-StripeOauthClass"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)
it('Mailchimp Oauth',function(){
    cy.viewport(1200,600)
    const obj2 = new AiContent()
    const obj1 = new McStripeOauth()
    obj2.Login()
    obj2.CreateProject()
    obj1.mcOAuth()
    obj1.stripeOauth()
    

})