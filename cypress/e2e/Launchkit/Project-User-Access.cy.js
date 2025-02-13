import ProjUserAccess from "../../PageObjectModel/ProjectUserAccessClass"
import AiContent from "../../PageObjectModel/Ai-content-Class"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)
it('Project User Access',function(){
    cy.viewport(1200,600)
    const obj1 = new ProjUserAccess()
    const obj2 = new AiContent()
    //  obj2.Login()
    //  obj2.CreateProject('ProjUserAccess')
    //  obj1.OpenProjUserAccess()
    //  obj1.AddUser()
    //  obj1.SearchUser()
    //  obj1.EditUser()
    //  obj1.DeleteUser()
})