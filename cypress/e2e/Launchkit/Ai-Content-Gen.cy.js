// Enable auto suggestion
///<reference types = "cypress"/>
import AiContent from "../../PageObjectModel/Ai-content-Class"
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)
it('Ai-Content-Gen',function(){
    cy.viewport(1200,600)   
    const obj = new AiContent()
     obj.Login()
     obj.CreateProject()
     obj.OpenAiGen()
     obj.SelectCategory()
     obj.ProductName()
     obj.ProductFeatures()
     obj.TargetAudience()
     obj.USP()
     obj.AiAdsContentAgain()
     obj.AiAdsContent()
     

})


   
        
        
 



   

