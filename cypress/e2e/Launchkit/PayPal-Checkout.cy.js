import PaypalCheckout from "../../PageObjectModel/PaypalCheckoutClass"
import AiContent from "../../PageObjectModel/Ai-content-Class"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)
it('PayPal Checkout',function(){
    cy.viewport(1200,600)
    const obj1 = new PaypalCheckout()
    const obj2 = new AiContent()
     obj2.Login()
     obj1.PaypalMethod()
     obj1.ShowAdvancePaypal()
     obj1.BillingAddress()
     obj1.PaypalclassicFunnel()
     obj1.CheckoutbyPaypal()
     
})