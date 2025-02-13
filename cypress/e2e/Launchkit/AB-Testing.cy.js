import ABTesting from "../../PageObjectModel/ABTestingClass"
import AiContent from "../../PageObjectModel/Ai-content-Class"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)
it('A/B Testing',function(){
    cy.viewport(1200,600)
    const obj1 = new ABTesting()
    const obj2 = new AiContent()
    //obj2.Login()
    // obj2.CreateProject('ABTesting')
    // obj1.OpenABTesting()
    // obj1.MakeLPvariants()
    // obj1.OpenABTesting()
    // obj1.CreateABTestWithoutTitle()
    // obj1.CreateABTest()
    // obj1.EndTest()
    // obj1.PreviousTests()
    // obj1.CreateDuplicateABTest()
})