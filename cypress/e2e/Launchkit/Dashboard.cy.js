import AiContent from "../../PageObjectModel/Ai-content-Class"
import Dashboard from "../../PageObjectModel/DashboardClass"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)
it('Dashboard',function(){
    cy.viewport(1200,600)
    const obj1 = new Dashboard()
    const obj2 = new AiContent()
    obj2.Login()
    obj1.ProjectTypes()
    obj1.OpenModules()
    obj1.SortingPagination()
    obj1.StatusMessages()
    obj1.RefreshData()
    
})
