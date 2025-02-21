import Permissions from "../../PageObjectModel/PermissionsClass"
import AiContent from "../../PageObjectModel/Ai-content-Class"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)
it('Roles and Permissions',function(){
    cy.viewport(1200,600)
    const obj2 = new AiContent()
    const obj1 = new Permissions()
    // Disable Permissions
    obj2.Login()
    obj1.Roles()
    obj1.SettingPermissionsOff()
    obj1.Logout()
    obj1.GameUserLogin()
    obj1.CheckingPermissionsOff()
    obj1.Logout()
    // Enable Permissions
    obj2.Login()
    obj1.Roles()
    obj1.SettingPermissionsOn()
    obj1.Logout()
    obj1.GameUserLogin()
    obj1.CheckingPermissionsOn()
})