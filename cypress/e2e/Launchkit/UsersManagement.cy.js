import Users from "../../PageObjectModel/UsersClass"
import AiContent from "../../PageObjectModel/Ai-content-Class"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)
it('Users Management',function(){
    cy.viewport(1200,600)
    const obj1 = new Users()
    const obj2 = new AiContent()
    obj2.Login()
    obj1.OpenUsers()
    obj1.CreateProjOwner()
    obj1.CreateProjUser()
    obj1.CreateGamingUser()
    obj1.SearchUser()
    obj1.EditUser()
    obj1.DeleteProjUser()
})