class paypalpaymentTab
{
    SelectPaymentMethod()
    {
      cy.visit(Cypress.env('ProjectUrl'))
      cy.wait(2000)
      cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
        cy.get('#payment_method').select('Paypal',{scrollBehavior:false,force:true}).wait(2000)
        cy.get('#paypal-settings').scrollIntoView().wait(2000)
        cy.get('#paypal-settings > :nth-child(2) > .toggle-button > .mt-2 > .toggle')
      .then(($toggle) => {
        // Get the background color of the toggle
        const color = $toggle.css('background-color')
        if(color === 'rgb(201, 201, 201)')
        {
          cy.get('#paypal-settings > :nth-child(2) > .toggle-button > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)
        }
        else 
        {
          cy.log('Advance Paypal Toggle is ON')
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
          // Checkout with EUR ccurrency
        cy.get('#payment').scrollIntoView().wait(2000)
        cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(2) > :nth-child(2) > div > .minh-label')
        .select('EUR',{scrollBehavior:false,force:true}).wait(2000)
        cy.get('#payment > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
         .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.visit(Cypress.env('CheckoutAppUrl3'))
        cy.wait(4000)
        cy.get('.blue').should('include.text','€').wait(2000)
        cy.get('#card-form').scrollIntoView().wait(2000)
          cy.frameLoaded("[title='paypal_card_name_field']")
          cy.iframe("[title='paypal_card_name_field']").find("[name='name']").type('Faisal Athar',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_number_field']")
          cy.iframe("[title='paypal_card_number_field']").find("[name='number']").type('4032034056550505',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_expiry_field']")
          cy.iframe("[title='paypal_card_expiry_field']").find("[name='expiry']").type('04 / 27',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_cvv_field']")
          cy.iframe("[title='paypal_card_cvv_field']").find("[name='cvv']").type('111',{scrollBehavior:false}).wait(2000)
          cy.get('#card-field-submit-button').should('include.text','€').wait(2000).click({scrollBehavior:false}).wait(5000)
             // Checkout with GBP ccurrency
        cy.visit(Cypress.env('ProjectUrl'))
        cy.wait(2000)
        cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
        cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(2) > :nth-child(2) > div > .minh-label')
        .select('GBP',{scrollBehavior:false,force:true}).wait(2000)
        cy.get('#payment > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
         .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.visit(Cypress.env('CheckoutAppUrl3'))
        cy.wait(4000)
        cy.get('.blue').should('include.text','£').wait(2000)
        cy.get('#card-form').scrollIntoView().wait(2000)
          cy.frameLoaded("[title='paypal_card_name_field']")
          cy.iframe("[title='paypal_card_name_field']").find("[name='name']").type('Faisal Athar',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_number_field']")
          cy.iframe("[title='paypal_card_number_field']").find("[name='number']").type('4032034056550505',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_expiry_field']")
          cy.iframe("[title='paypal_card_expiry_field']").find("[name='expiry']").type('04 / 27',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_cvv_field']")
          cy.iframe("[title='paypal_card_cvv_field']").find("[name='cvv']").type('111',{scrollBehavior:false}).wait(2000)
          cy.get('#card-field-submit-button').should('include.text','£').wait(2000).click({scrollBehavior:false}).wait(5000)
                  // Checkout with AUD ccurrency
        cy.visit(Cypress.env('ProjectUrl'))
        cy.wait(2000)
        cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
        cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(2) > :nth-child(2) > div > .minh-label')
        .select('AUD',{scrollBehavior:false,force:true}).wait(2000)
        cy.get('#payment > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
         .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.visit(Cypress.env('CheckoutAppUrl3'))
        cy.wait(4000)
        cy.get('.blue').should('include.text','A$').wait(2000)
        cy.get('#card-form').scrollIntoView().wait(2000)
          cy.frameLoaded("[title='paypal_card_name_field']")
          cy.iframe("[title='paypal_card_name_field']").find("[name='name']").type('Faisal Athar',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_number_field']")
          cy.iframe("[title='paypal_card_number_field']").find("[name='number']").type('4032034056550505',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_expiry_field']")
          cy.iframe("[title='paypal_card_expiry_field']").find("[name='expiry']").type('04 / 27',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_cvv_field']")
          cy.iframe("[title='paypal_card_cvv_field']").find("[name='cvv']").type('111',{scrollBehavior:false}).wait(2000)
          cy.get('#card-field-submit-button').should('include.text','A$').wait(2000).click({scrollBehavior:false}).wait(5000)
                    // Checkout with CAD ccurrency
        cy.visit(Cypress.env('ProjectUrl'))
        cy.wait(2000)
        cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
        cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(2) > :nth-child(2) > div > .minh-label')
        .select('CAD',{scrollBehavior:false,force:true}).wait(2000)
        cy.get('#payment > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
         .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.visit(Cypress.env('CheckoutAppUrl3'))
        cy.wait(4000)
        cy.get('.blue').should('include.text','CA$').wait(2000)
        cy.get('#card-form').scrollIntoView().wait(2000)
          cy.frameLoaded("[title='paypal_card_name_field']")
          cy.iframe("[title='paypal_card_name_field']").find("[name='name']").type('Faisal Athar',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_number_field']")
          cy.iframe("[title='paypal_card_number_field']").find("[name='number']").type('4032034056550505',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_expiry_field']")
          cy.iframe("[title='paypal_card_expiry_field']").find("[name='expiry']").type('04 / 27',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_cvv_field']")
          cy.iframe("[title='paypal_card_cvv_field']").find("[name='cvv']").type('111',{scrollBehavior:false}).wait(2000)
          cy.get('#card-field-submit-button').should('include.text','CA$').wait(2000).click({scrollBehavior:false}).wait(5000)
          // Checkout with USD ccurrency
        cy.visit(Cypress.env('ProjectUrl'))
        cy.wait(2000)
        cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
        cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(2) > :nth-child(2) > div > .minh-label')
        .select('USD',{scrollBehavior:false,force:true}).wait(2000)
        cy.get('#payment > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
         .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.visit(Cypress.env('CheckoutAppUrl3'))
        cy.wait(4000)
        cy.get('.blue').should('include.text','$').wait(2000)
        cy.get('#card-form').scrollIntoView().wait(2000)
          cy.frameLoaded("[title='paypal_card_name_field']")
          cy.iframe("[title='paypal_card_name_field']").find("[name='name']").type('Faisal Athar',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_number_field']")
          cy.iframe("[title='paypal_card_number_field']").find("[name='number']").type('4032034056550505',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_expiry_field']")
          cy.iframe("[title='paypal_card_expiry_field']").find("[name='expiry']").type('04 / 27',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_cvv_field']")
          cy.iframe("[title='paypal_card_cvv_field']").find("[name='cvv']").type('111',{scrollBehavior:false}).wait(2000)
          cy.get('#card-field-submit-button').should('include.text','$').wait(2000).click({scrollBehavior:false}).wait(5000)
    }

    CheckoutwithReservationCost()
   {
      cy.visit(Cypress.env('ProjectUrl'))
      cy.wait(2000)
      cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
      cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(6) > :nth-child(1)').scrollIntoView().wait(2000)
      cy.get('#reservation_cost').clear({scrollBehavior:false}).wait(1000).type('5.00',{scrollBehavior:false}).wait(2000)
      cy.get('#payment').scrollIntoView().wait(2000)
      cy.get('#payment > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
         .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.visit(Cypress.env('CheckoutAppUrl3'))
        cy.wait(4000)
        cy.get('.blue').should('include.text','5').wait(2000)
        cy.get('#card-form').scrollIntoView().wait(2000)
          cy.frameLoaded("[title='paypal_card_name_field']")
          cy.iframe("[title='paypal_card_name_field']").find("[name='name']").type('Faisal Athar',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_number_field']")
          cy.iframe("[title='paypal_card_number_field']").find("[name='number']").type('4032034056550505',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_expiry_field']")
          cy.iframe("[title='paypal_card_expiry_field']").find("[name='expiry']").type('04 / 27',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_cvv_field']")
          cy.iframe("[title='paypal_card_cvv_field']").find("[name='cvv']").type('111',{scrollBehavior:false}).wait(2000)
          cy.get('#card-field-submit-button').should('include.text','5').wait(2000).click({scrollBehavior:false}).wait(5000)
   }

    CheckoutwithPhoneNumber()
   {
      cy.visit(Cypress.env('ProjectUrl'))
      cy.wait(2000)
      cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
      cy.get('#payment > .py-4 > :nth-child(2) > .border-bottom-opacity.items-center').scrollIntoView().wait(2000)
      // Enabling Google pay 
        cy.get('.border-bottom-opacity.items-center > :nth-child(2) > :nth-child(1) > .mt-2 > .toggle')
        .then(($toggle) => {
            // Get the background color of the toggle
             const color = $toggle.css('background-color')
             if(color === 'rgb(201, 201, 201)')
             {
                cy.get('.border-bottom-opacity.items-center > :nth-child(2) > :nth-child(1) > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)
             }
             else 
             {
                cy.log('Apple/GooglePay Toggle is ON') 
             }
           })
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
        cy.visit(Cypress.env('CheckoutAppUrl3'))
        cy.wait(4000)
        cy.get('#phoneNumber').type('3214569876',{scrollBehavior:false}).wait(2000)
        // Checking that Google Pay option is available on checkout
        cy.get('.position-relative').scrollIntoView().wait(2000)
        cy.get('#gpay-button-online-api-id').should('be.visible').realHover({scrollBehavior:false}).wait(2000)
        cy.get('#card-form').scrollIntoView().wait(2000)
          cy.frameLoaded("[title='paypal_card_name_field']")
          cy.iframe("[title='paypal_card_name_field']").find("[name='name']").type('Faisal Athar',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_number_field']")
          cy.iframe("[title='paypal_card_number_field']").find("[name='number']").type('4032034056550505',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_expiry_field']")
          cy.iframe("[title='paypal_card_expiry_field']").find("[name='expiry']").type('04 / 27',{scrollBehavior:false}).wait(1000)
          cy.frameLoaded("[title='paypal_card_cvv_field']")
          cy.iframe("[title='paypal_card_cvv_field']").find("[name='cvv']").type('111',{scrollBehavior:false})
          cy.get('#card-field-submit-button').wait(1000).click({scrollBehavior:false}).wait(5000)
   }

   CheckoutwithBillingAddress()
   {
      cy.visit(Cypress.env('ProjectUrl'))
      cy.wait(2000)
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
        cy.visit(Cypress.env('CheckoutAppUrl3'))
        cy.wait(4000)
        cy.get('#phoneNumber').type('3214569876',{scrollBehavior:false}).wait(2000)
        cy.get('#line1').type('113 Eldridge Street').wait(1000)
        cy.get('#zipcode').type('99999',{scrollBehavior:false}).wait(1000)
        cy.get('#city').type('New York',{scrollBehavior:false}).wait(1000)
        cy.get('#country').select('United States',{scrollBehavior:false,force:true}).wait(1000)
        cy.get('#state').select('Alaska',{scrollBehavior:false,force:true}).wait(1000)
        cy.get('#card-form').scrollIntoView().wait(2000)
        cy.frameLoaded("[title='paypal_card_name_field']")
        cy.iframe("[title='paypal_card_name_field']").find("[name='name']").type('Faisal Athar',{scrollBehavior:false}).wait(1000)
        cy.frameLoaded("[title='paypal_card_number_field']")
        cy.iframe("[title='paypal_card_number_field']").find("[name='number']").type('4032034056550505',{scrollBehavior:false}).wait(1000)
        cy.frameLoaded("[title='paypal_card_expiry_field']")
        cy.iframe("[title='paypal_card_expiry_field']").find("[name='expiry']").type('04 / 27',{scrollBehavior:false}).wait(1000)
        cy.frameLoaded("[title='paypal_card_cvv_field']")
        cy.iframe("[title='paypal_card_cvv_field']").find("[name='cvv']").type('111',{scrollBehavior:false}).wait(2000)
        cy.get('#card-field-submit-button').click({scrollBehavior:false}).wait(5000)
    }

    DisableAdvancePaypal()
    {
        cy.visit(Cypress.env('ProjectUrl'))
        cy.wait(2000)
        cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
        cy.get('#paypal-settings').scrollIntoView().wait(2000)
        cy.get('#paypal-settings > :nth-child(2) > .toggle-button > .mt-2 > .toggle')
      .then(($toggle) => {
        // Get the background color of the toggle
        const color = $toggle.css('background-color')
        if(color === 'rgb(201, 201, 201)')
        {
          cy.log('Advance Paypal Toggle is OFF')
        }
        else 
        {
          cy.get('#paypal-settings > :nth-child(2) > .toggle-button > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)
        }
      })
    }

    CheckoutwithOldPaypal()
    {
        cy.get('#reservation_cost').clear({scrollBehavior:false}).type('1.00',{scrollBehavior:false})
        cy.get('#payment').scrollIntoView().wait(2000)
        cy.get('#payment > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
         .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.visit(Cypress.env('CheckoutAppUrl3'))
        cy.wait(4000)
        cy.get('.position-relative').scrollIntoView().wait(2000)
        cy.frameLoaded("[title='PayPal']")
        cy.iframe("[title='PayPal']").find("div[aria-label='Debit or Credit Card']")
        .realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).wait(5000)
        cy.iframe("[title='PayPal']").within(()=>{
            cy.frameLoaded("[title='paypal_card_form']")
            cy.iframe("[title='paypal_card_form']").within(()=>{
                cy.get("[name='cardnumber']").type('4032034056550505',{scrollBehavior:false}).wait(1000)
                cy.get("[name='expiry-date']").type('04 / 27',{scrollBehavior:false}).wait(1000)
                cy.get("[name='credit-card-security']").type('111',{scrollBehavior:false}).wait(1000).click()
                cy.get("[name='givenName']").type('Faisal',{scrollBehavior:false}).wait(1000)
                cy.get("[name='familyName']").type('Athar',{scrollBehavior:false}).wait(1000)
                cy.get("[name='postcode']").type('99999',{scrollBehavior:false}).wait(1000)
                cy.get("[name='phone']").type('(236) 555-5523',{scrollBehavior:false}).wait(1000)
                cy.get("[name='email']").type('f.faisalathar@gmail.com',{scrollBehavior:false}).wait(2000)
                cy.get("#submit-button").realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).wait(5000)

            })
            
        })
    }
}
export default paypalpaymentTab