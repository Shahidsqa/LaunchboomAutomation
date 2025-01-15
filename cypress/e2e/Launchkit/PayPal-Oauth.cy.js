import PaypalOauth from "../../PageObjectModel/PaypalOauthClass"
import AiContent from "../../PageObjectModel/Ai-content-Class"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)
it('PayPal Oauth',function(){
    cy.viewport(1200,600)
    const obj1 = new PaypalOauth()
    const obj2 = new AiContent()
    obj2.Login()
    obj2.CreateProject()
    obj1.Oauth()
})