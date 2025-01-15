///<reference types = "cypress"/>
import PostCampaign from "../../PageObjectModel/PostCampaignClass"
import AiContent from "../../PageObjectModel/Ai-content-Class"
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)
it("Post Campaign",function(){
    cy.viewport(1200,600)
    const obj1 = new PostCampaign()
    const obj2 = new AiContent()
     obj2.Login()
     obj2.CreateProject()
     obj1.OpenPostCampaign()
     obj1.EnterProjectLink()
     obj1.UploadFile()
})