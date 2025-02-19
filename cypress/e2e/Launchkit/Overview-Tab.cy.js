import OverviewTab from "../../PageObjectModel/OverviewTabClass"
import AiContent from "../../PageObjectModel/Ai-content-Class"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)
it('Overview Tab Testing',function(){
    cy.viewport(1200,600)
    const obj1 = new OverviewTab()
    const obj2 = new AiContent()
    obj2.Login()
    obj2.CreateProject('OverviewTabTest')
    obj1.UpdateProjectName()
    obj1.SEODescription()
    obj1.WrongFormatFileUpload()
    obj1.WrongFormatImageUpload()
    obj1.ValidFormatImageUpload()
    obj1.Redirection()
    obj1.RedirectionToggleOff()
    

})