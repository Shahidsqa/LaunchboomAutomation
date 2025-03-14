///<reference types = "cypress"/>
import audience from "../../PageObjectModel/AudiencesClass"
import AiContent from "../../PageObjectModel/Ai-content-Class"
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)
it("Audiences",function(){
    cy.viewport(1200,600)
    const obj1 = new audience()
    const obj2 = new AiContent()
     obj2.Login()
     obj1.Audiences()
     obj1.CreateAudienceDuplicateId()
     obj1.EditAudience()
     obj1.ShareAudienceTablets()
     obj1.CheckAudienceTablets()
     obj1.ShareAudienceTugWar()
     obj1.CheckAudienceTugWar()
     obj1.ShareAudience4Health()
     obj1.SharedAudiences()
     obj1.RemoveProjOwner()

})