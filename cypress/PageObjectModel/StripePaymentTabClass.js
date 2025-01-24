class stripepaymentTab{
    SelectPaymentMethod()
    {
      cy.visit(Cypress.env('ProjectUrl'))
      cy.wait(2000)
      cy.url().should('include','/edit')
      cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
        cy.get('#payment_method').select('Stripe',{scrollBehavior:false,force:true}).wait(2000)
        cy.get('#stripe-settings > .flex').scrollIntoView().wait(2000)
        cy.get('#stripe-settings > .flex > :nth-child(2) > .toggle-button > .mt-2 > .toggle')
        .then(($toggle) => {
            // Get the background color of the toggle
             const color = $toggle.css('background-color')
             if(color === 'rgb(201, 201, 201)')
             {
                cy.get('#stripe-settings > .flex > :nth-child(2) > .toggle-button > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)
  
             }
             else 
             {
              cy.log('Stripe Element Toggle is ON')
             }
           })
    }

    MakeAllTogglesOff()
    {
        cy.get('#payment > .py-4 > :nth-child(2) > .border-bottom-opacity.items-center').scrollIntoView().wait(2000)
        cy.get('.border-bottom-opacity.items-center > :nth-child(2) > :nth-child(1) > .mt-2 > .toggle')
        .then(($toggle) => {
            // Get the background color of the toggle
             const color = $toggle.css('background-color')
             if(color === 'rgb(201, 201, 201)')
             {
                cy.log('Apple/GooglePay Toggle is OFF')
  
             }
             else 
             {
                cy.get('.border-bottom-opacity.items-center > :nth-child(2) > :nth-child(1) > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)
              
             }
           })
           cy.get('#payment > .py-4 > :nth-child(2) > .border-bottom-opacity.items-center > :nth-child(2) > :nth-child(2) > .mt-2 > .toggle')
           .then(($toggle) => {
            // Get the background color of the toggle
             const color = $toggle.css('background-color')
             if(color === 'rgb(201, 201, 201)')
             {
                cy.log('Phone Number Toggle is OFF')
  
             }
             else 
             {
                cy.get('#payment > .py-4 > :nth-child(2) > .border-bottom-opacity.items-center > :nth-child(2) > :nth-child(2) > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)
              
             }
           })
           cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(8)').scrollIntoView().wait(2000)
           cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(8) > :nth-child(2) > .toggle-button > .mt-2 > .toggle')
           .then(($toggle) => {
            // Get the background color of the toggle
             const color = $toggle.css('background-color')
             if(color === 'rgb(201, 201, 201)')
             {
                cy.log('Billing Address Toggle is OFF')
              
             }
             else 
             {
                cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(8) > :nth-child(2) > .toggle-button > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)
              
             }
           })
        
    }
    Currencies()
    { 
        // Checkout with EUR currency
        cy.get('#payment').scrollIntoView().wait(2000)
        cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(2) > :nth-child(2) > div > .minh-label')
        .select('EUR',{scrollBehavior:false,force:true}).wait(2000)
        cy.get('#payment > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
         .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
         cy.get('#alert-1').should('include.text','Project Successfully Updated')
        cy.visit(Cypress.env('CheckoutAppUrl3'))
        cy.wait(4000)
        cy.url().should('include','/checkout')
        cy.get('#email').type('f.faisalathar@gmail.com',{scrollBehavior:false}).wait(1000)
        cy.get('#cc-name').type('Faisal',{scrollBehavior:false}).wait(1000)
        cy.get('.blue').should('include.text','€').wait(2000)
        cy.get('.position-relative').scrollIntoView().wait(1000)
        cy.frameLoaded("[title='Secure payment input frame']")
       // cy.iframe("[title='Secure payment input frame']").find("[aria-label='Close']").click().wait(2000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-numberInput').type('4111111111111111').wait(1000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-expiryInput').type('04 / 27').wait(1000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-cvcInput').type('111').wait(2000)
        cy.get('#card-button').scrollIntoView().should('include.text','€').wait(2000).click({scrollBehavior:false}).wait(5000)
        cy.url().should('include','/reserved')
         // Checkout with GBP currency
         cy.visit(Cypress.env('ProjectUrl'))
         cy.wait(2000)
         cy.url().should('include','/edit')
         cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
       cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(2) > :nth-child(2) > div > .minh-label')
        .select('GBP',{scrollBehavior:false,force:true}).wait(2000)
        cy.get('#payment > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
         .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
         cy.get('#alert-1').should('include.text','Project Successfully Updated')
        cy.visit(Cypress.env('CheckoutAppUrl3'))
        cy.wait(4000)
        cy.url().should('include','/checkout')
        cy.get('#email').type('f.faisalathar@gmail.com',{scrollBehavior:false}).wait(1000)
        cy.get('#cc-name').type('Faisal',{scrollBehavior:false}).wait(1000)
        cy.get('.blue').should('include.text','£').wait(2000)
        cy.get('.position-relative').scrollIntoView().wait(1000)
        cy.frameLoaded("[title='Secure payment input frame']")
       // cy.iframe("[title='Secure payment input frame']").find("[aria-label='Close']").click().wait(2000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-numberInput').type('4111111111111111').wait(1000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-expiryInput').type('04 / 27').wait(1000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-cvcInput').type('111').wait(2000)
        cy.get('#card-button').scrollIntoView().should('include.text','£').wait(2000).click({scrollBehavior:false}).wait(5000)
        cy.url().should('include','/reserved')
        // Checkout with AUD currency
        cy.visit(Cypress.env('ProjectUrl'))
        cy.wait(2000)
        cy.url().should('include','/edit')
        cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
       cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(2) > :nth-child(2) > div > .minh-label')
        .select('AUD',{scrollBehavior:false,force:true}).wait(2000)
        cy.get('#payment > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
         .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
         cy.get('#alert-1').should('include.text','Project Successfully Updated')
        cy.visit(Cypress.env('CheckoutAppUrl3'))
        cy.wait(4000)
        cy.url().should('include','/checkout')
        cy.get('#email').type('f.faisalathar@gmail.com',{scrollBehavior:false}).wait(1000)
        cy.get('#cc-name').type('Faisal',{scrollBehavior:false}).wait(1000)
        cy.get('.blue').should('include.text','A$').wait(2000)
        cy.get('.position-relative').scrollIntoView().wait(1000)
        cy.frameLoaded("[title='Secure payment input frame']")
       // cy.iframe("[title='Secure payment input frame']").find("[aria-label='Close']").click().wait(2000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-numberInput').type('4111111111111111').wait(1000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-expiryInput').type('04 / 27').wait(1000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-cvcInput').type('111').wait(2000)
        cy.get('#card-button').scrollIntoView().should('include.text','A$').wait(2000).click({scrollBehavior:false}).wait(5000)
        cy.url().should('include','/reserved')
        // Checkout with CAD currency
        cy.visit(Cypress.env('ProjectUrl'))
        cy.wait(2000)
        cy.url().should('include','/edit')
        cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
       cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(2) > :nth-child(2) > div > .minh-label')
        .select('CAD',{scrollBehavior:false,force:true}).wait(2000)
        cy.get('#payment > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
         .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
         cy.get('#alert-1').should('include.text','Project Successfully Updated')
        cy.visit(Cypress.env('CheckoutAppUrl3'))
        cy.wait(4000)
        cy.url().should('include','/checkout')
        cy.get('#email').type('f.faisalathar@gmail.com',{scrollBehavior:false}).wait(1000)
        cy.get('#cc-name').type('Faisal',{scrollBehavior:false}).wait(1000)
        cy.get('.blue').should('include.text','CA$').wait(2000)
        cy.get('.position-relative').scrollIntoView().wait(1000)
        cy.frameLoaded("[title='Secure payment input frame']")
       // cy.iframe("[title='Secure payment input frame']").find("[aria-label='Close']").click().wait(2000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-numberInput').type('4111111111111111').wait(1000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-expiryInput').type('04 / 27').wait(1000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-cvcInput').type('111').wait(2000)
        cy.get('#card-button').scrollIntoView().should('include.text','CA$').wait(2000).click({scrollBehavior:false}).wait(5000)
        cy.url().should('include','/reserved')
      // Checkout with INR currency
      cy.visit(Cypress.env('ProjectUrl'))
      cy.wait(2000)
      cy.url().should('include','/edit')
      cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
      cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(2) > :nth-child(2) > div > .minh-label')
      .select('INR',{scrollBehavior:false,force:true}).wait(2000)
      cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(6) > :nth-child(1)').scrollIntoView().wait(2000)
    cy.get('#reservation_cost').clear({scrollBehavior:false}).wait(1000).type('50.00',{scrollBehavior:false}).wait(2000)
    cy.get('#payment').scrollIntoView().wait(2000)
      cy.get('#payment > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
       .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
       cy.get('#alert-1').should('include.text','Project Successfully Updated')
      cy.visit(Cypress.env('CheckoutAppUrl3'))
      cy.wait(4000)
      cy.url().should('include','/checkout')
      cy.get('#email').type('f.faisalathar@gmail.com',{scrollBehavior:false}).wait(1000)
      cy.get('#cc-name').type('Faisal',{scrollBehavior:false}).wait(1000)
      cy.get('.blue').should('include.text','₹50').wait(2000)
      cy.get('.position-relative').scrollIntoView().wait(1000)
      cy.frameLoaded("[title='Secure payment input frame']")
     // cy.iframe("[title='Secure payment input frame']").find("[aria-label='Close']").click().wait(2000)
      cy.iframe("[title='Secure payment input frame']").find('#Field-numberInput').type('4111111111111111').wait(1000)
      cy.iframe("[title='Secure payment input frame']").find('#Field-expiryInput').type('04 / 27').wait(1000)
      cy.iframe("[title='Secure payment input frame']").find('#Field-cvcInput').type('111').wait(2000)
      cy.get('#card-button').scrollIntoView().should('include.text','₹50').wait(2000).click({scrollBehavior:false}).wait(5000)
      cy.url().should('include','/reserved')
      //   // Checkout with USD currency
        cy.visit(Cypress.env('ProjectUrl'))
        cy.wait(2000)
        cy.url().should('include','/edit')
        cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
        cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(2) > :nth-child(2) > div > .minh-label')
        .select('USD',{scrollBehavior:false,force:true}).wait(2000)
        cy.get('#payment > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
         .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
         cy.get('#alert-1').should('include.text','Project Successfully Updated')
        cy.visit(Cypress.env('CheckoutAppUrl3'))
        cy.wait(4000)
        cy.url().should('include','/checkout')
        cy.get('#email').type('f.faisalathar@gmail.com',{scrollBehavior:false}).wait(1000)
        cy.get('#cc-name').type('Faisal',{scrollBehavior:false}).wait(1000)
        cy.get('.blue').should('include.text','$').wait(2000)
        cy.get('.position-relative').scrollIntoView().wait(1000)
        cy.frameLoaded("[title='Secure payment input frame']")
       // cy.iframe("[title='Secure payment input frame']").find("[aria-label='Close']").click().wait(2000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-numberInput').type('4111111111111111').wait(1000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-expiryInput').type('04 / 27').wait(1000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-cvcInput').type('111').wait(2000)
        cy.get('#card-button').scrollIntoView().should('include.text','$').wait(2000).click({scrollBehavior:false}).wait(5000)
        cy.url().should('include','/reserved')
        
   }

   CheckoutwithReservationCost()
   {
      cy.visit(Cypress.env('ProjectUrl'))
      cy.wait(2000)
      cy.url().should('include','/edit')
      cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
      cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(6) > :nth-child(1)').scrollIntoView().wait(2000)
      cy.get('#reservation_cost').clear({scrollBehavior:false}).wait(1000).type('5.00',{scrollBehavior:false}).wait(2000)
      cy.get('#payment').scrollIntoView().wait(2000)
      cy.get('#payment > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
         .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
         cy.get('#alert-1').should('include.text','Project Successfully Updated')
        cy.visit(Cypress.env('CheckoutAppUrl3'))
        cy.wait(4000)
        cy.url().should('include','/checkout')
        cy.get('#email').type('f.faisalathar@gmail.com',{scrollBehavior:false}).wait(1000)
        cy.get('#cc-name').type('Faisal',{scrollBehavior:false}).wait(1000)
        cy.get('.blue').should('include.text','5').wait(2000)
        cy.get('.position-relative').scrollIntoView().wait(1000)
        cy.frameLoaded("[title='Secure payment input frame']")
       // cy.iframe("[title='Secure payment input frame']").find("[aria-label='Close']").click().wait(2000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-numberInput').type('4111111111111111').wait(1000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-expiryInput').type('04 / 27').wait(1000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-cvcInput').type('111').wait(2000)
        cy.get('#card-button').scrollIntoView().should('include.text','5').wait(2000).click({scrollBehavior:false}).wait(5000)
        cy.url().should('include','/reserved')
   }

   CheckoutwithPhoneNumber()
   {
      cy.visit(Cypress.env('ProjectUrl'))
        cy.wait(2000)
        cy.url().should('include','/edit')
        cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
      cy.get('#payment > .py-4 > :nth-child(2) > .border-bottom-opacity.items-center').scrollIntoView().wait(2000)
      cy.get('#payment > .py-4 > :nth-child(2) > .border-bottom-opacity.items-center > :nth-child(2) > :nth-child(2) > .mt-2 > .toggle')
      .then(($toggle) => {
       // Get the background color of the toggle
        const color = $toggle.css('background-color')
        if(color === 'rgb(201, 201, 201)')
        {
         cy.get('#payment > .py-4 > :nth-child(2) > .border-bottom-opacity.items-center > :nth-child(2) > :nth-child(2) > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)
        }
        else 
        {
         cy.log('Phone Number Toggle is ON')         
        }
      })
      cy.get('#payment').scrollIntoView().wait(2000)
      cy.get('#payment > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
         .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
         cy.get('#alert-1').should('include.text','Project Successfully Updated')
        cy.visit(Cypress.env('CheckoutAppUrl3'))
        cy.wait(4000)
        cy.url().should('include','/checkout')
        cy.get('#email').type('f.faisalathar@gmail.com',{scrollBehavior:false}).wait(1000)
        cy.get('#cc-name').type('Faisal',{scrollBehavior:false}).wait(1000)
        cy.get('#phoneNumber').should('be.visible')
        cy.get('#phoneNumber').type('3214569876',{scrollBehavior:false}).wait(1000)
        cy.get('.position-relative').scrollIntoView().wait(1000)
        cy.frameLoaded("[title='Secure payment input frame']")
      //  cy.iframe("[title='Secure payment input frame']").find("[aria-label='Close']").click().wait(2000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-numberInput').type('4111111111111111').wait(1000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-expiryInput').type('04 / 27').wait(1000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-cvcInput').type('111').wait(2000)
        cy.get('#card-button').scrollIntoView().click({scrollBehavior:false}).wait(5000)
        cy.url().should('include','/reserved')
   }

   CheckoutwithBillingAddress()
   {
      cy.visit(Cypress.env('ProjectUrl'))
        cy.wait(2000)
        cy.url().should('include','/edit')
        cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
      cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(8)').scrollIntoView().wait(2000)
      cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(8) > :nth-child(2) > .toggle-button > .mt-2 > .toggle')
      .then(($toggle) => {
       // Get the background color of the toggle
        const color = $toggle.css('background-color')
        if(color === 'rgb(201, 201, 201)')
        {
         cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(8) > :nth-child(2) > .toggle-button > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)
        }
        else 
        {
         cy.log('Billing Address Toggle is ON')
        }
      })
      cy.get('#payment').scrollIntoView().wait(2000)
      cy.get('#payment > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
         .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
         cy.get('#alert-1').should('include.text','Project Successfully Updated')
        cy.visit(Cypress.env('CheckoutAppUrl3'))
        cy.wait(4000)
        cy.url().should('include','/checkout')
        cy.get('#email').type('f.faisalathar@gmail.com',{scrollBehavior:false}).wait(1000)
        cy.frameLoaded("[title='Secure address input frame']")
        cy.get("[title='Secure address input frame']").scrollIntoView().wait(1000)
        cy.iframe("[title='Secure address input frame']").find('#Field-nameInput').type('Faisal Athar').wait(1000)
        cy.iframe("[title='Secure address input frame']").find('#Field-countryInput').select('United States').wait(1000)
        cy.iframe("[title='Secure address input frame']").find('#Field-addressLine1Input').type('134 Eldridge Street').wait(1000)
        cy.iframe("[title='Secure address input frame']").find('#Field-localityInput').type('New York').wait(1000)
        cy.iframe("[title='Secure address input frame']").find('#Field-administrativeAreaInput').select('Alaska').wait(1000)
        cy.iframe("[title='Secure address input frame']").find('#Field-postalCodeInput').type('99999').wait(1000)
        cy.iframe("[title='Secure address input frame']").find('#Field-phoneInput').type('(236) 555-5523').wait(2000)
        cy.get('.position-relative').scrollIntoView().wait(1000)
        cy.frameLoaded("[title='Secure payment input frame']")
       // cy.iframe("[title='Secure payment input frame']").find("[aria-label='Close']").click().wait(2000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-numberInput').type('4111111111111111').wait(1000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-expiryInput').type('04 / 27').wait(1000)
        cy.iframe("[title='Secure payment input frame']").find('#Field-cvcInput').type('111').wait(2000)
        cy.get('#card-button').scrollIntoView().click({scrollBehavior:false}).wait(5000)
        cy.url().should('include','/reserved')
   }

   DisableStripeElement()
      {
         cy.visit(Cypress.env('ProjectUrl'))
         cy.wait(2000)
         cy.url().should('include','/edit')
         cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
        cy.get('#stripe-settings > .flex').scrollIntoView().wait(2000)
        cy.get('#stripe-settings > .flex > :nth-child(2) > .toggle-button > .mt-2 > .toggle')
        .then(($toggle) => {
            // Get the background color of the toggle
             const color = $toggle.css('background-color')
             if(color === 'rgb(201, 201, 201)')
             {
                cy.log('Stripe Element Toggle is OFF')
  
             }
             else 
             {
                cy.get('#stripe-settings > .flex > :nth-child(2) > .toggle-button > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)
             }
           })
      }
         CheckoutwithoutStripeElement()
         {
           cy.get('#reservation_cost').clear({scrollBehavior:false}).type('1.00',{scrollBehavior:false})
           cy.get('#payment').scrollIntoView().wait(2000)
           cy.get('#payment > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
           .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
           cy.get('#alert-1').should('include.text','Project Successfully Updated')
           cy.visit(Cypress.env('CheckoutAppUrl3'))
           cy.wait(4000)
           cy.url().should('include','/checkout')
           cy.get('#email').type('f.faisalathar@gmail.com',{scrollBehavior:false}).wait(1000)
           cy.get('.credit-card-button').scrollIntoView().wait(2000).realHover().wait(1000).click().wait(2000)
           cy.get('.header-inside-form-group').scrollIntoView().wait(2000)
           cy.frameLoaded("[title='Secure card number input frame']")
           cy.iframe("[title='Secure card number input frame']").find("[name='cardnumber']").type('4111 1111 1111 1111',{scrollBehavior:false}).wait(1000)
           cy.get("#cc-name").type('Faisal',{scrollBehavior:false}).wait(1000)
           cy.frameLoaded("[title='Secure expiration date input frame']")
           cy.iframe("[title='Secure expiration date input frame']").find("[name='exp-date']").type('04/28',{scrollBehavior:false}).wait(1000)
           cy.frameLoaded("[title='Secure CVC input frame']")
           cy.iframe("[title='Secure CVC input frame']").find("[name='cvc']").type('111',{scrollBehavior:false}).wait(2000)
           cy.get('#card-button').scrollIntoView().click({scrollBehavior:false}).wait(5000)
           cy.url().should('include','/reserved')
          
         }


}
export default stripepaymentTab