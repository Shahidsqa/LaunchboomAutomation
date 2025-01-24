import AiContent from "../../PageObjectModel/Ai-content-Class"
import LinkBuilder from "../../PageObjectModel/LinkBuilderClass"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)
it('Link Builder',function(){
    cy.viewport(1200,600)
    const obj1 = new LinkBuilder()
    const obj2 = new AiContent()
    obj2.Login()
    obj1.OpenLinkBuilder()
    obj1.CreateLink()
    obj1.CheckDatePicker()
   // obj1.CopyLink()
})