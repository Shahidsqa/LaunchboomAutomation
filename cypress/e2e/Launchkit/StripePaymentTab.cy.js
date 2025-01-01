import stripepaymentTab from "../../PageObjectModel/PaymentTabClass"
import AiContent from "../../PageObjectModel/Ai-content-Class"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)

it('Payment Tab Testing',function(){
    cy.viewport(1200,600)
    const obj2 = new AiContent()
    const obj1 = new stripepaymentTab()
    obj2.Login()
    obj1.SelectPaymentMethod()
    obj1.MakeAllTogglesOff()
    obj1.Currencies()
    obj1.CheckoutwithReservationCost()
    obj1.CheckoutwithPhoneNumber()
    obj1.CheckoutwithBillingAddress()
    obj1.StripeElement()
    

})