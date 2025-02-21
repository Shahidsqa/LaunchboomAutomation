import AiContent from "../../PageObjectModel/Ai-content-Class"
import Gaming from "../../PageObjectModel/GamingProjectClass"
import Users from "../../PageObjectModel/UsersClass"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)
it('Create Gaming User/Project',function(){
    cy.viewport(1200,600)
    const obj1 = new Gaming()
    const obj2 = new AiContent()
    const obj3 = new Users()
    obj2.Login()
    obj3.OpenUsers()
    obj1.CreateGameUser()
    obj1.CreateGameProject()
    
})