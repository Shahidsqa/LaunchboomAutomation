import OverviewTab from "../../PageObjectModel/OverviewTabClass"
import AiContent from "../../PageObjectModel/Ai-content-Class"
import funnelTypes from "../../PageObjectModel/FunnelClass"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)
it('Overview Tab Testing',function(){
    cy.viewport(1200,600)
    const obj1 = new OverviewTab()
    const obj2 = new AiContent()
    const obj3 = new funnelTypes()
    obj2.Login()
    obj2.CreateProject('OverviewTab Test')
    obj1.UpdateProjectName()
    obj1.SEODescription()
    obj1.WrongFormatImageUpload()
    obj1.ValidFormatImageUpload()
    obj1.Redirection()
    obj1.RedirectionToggle()
    obj1.FontsSelection()
    obj3.StripeMethod()
    obj3.BillingAddress()
    obj3.optoutFunnel()
    obj1.OptoutFlowFontsChecking()
    obj3.followerFunnel()
    obj1.FollowerFlowFontsChecking()

})