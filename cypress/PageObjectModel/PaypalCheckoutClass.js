
class PaypalCheckout{

    PaypalMethod()
    {
      cy.visit(Cypress.env('ProjectUrl'))
      cy.wait(2000)
      cy.url().should('include','/edit')
      cy.get('body').should('have.css', 'font').and('include','Poppins')
      cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
      cy.get('body').should('have.css', 'font').and('include','Poppins')
      cy.get('#payment_method').select('Paypal',{scrollBehavior:false,force:true}).wait(2000)

    }
    ShowAdvancePaypal()
    {
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

     BillingAddress()
     {
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
     }

    PaypalclassicFunnel(){

        cy.get('[data-tabs-target="#admin"]').click({scrollBehavior:false}).wait(2000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('#admin > .py-4 > :nth-child(2) > :nth-child(6)').scrollIntoView().wait(1000)
        cy.get(':nth-child(6) > :nth-child(2) > :nth-child(2) > .minh-label').select('Classic',{scrollBehavior:false,force:true}).wait(2000)
        cy.get('#admin').scrollIntoView().wait(1000)
        cy.get('#admin > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100)
        cy.wait(2000)
        cy.get('#alert-1').should('include.text','Project Successfully Updated')
      }
    
     CheckoutbyPaypal()
     {
        cy.visit(Cypress.env('CheckoutAppUrl2'))
        cy.wait(5000)
        cy.url().should('include','utm_campaign=customLink')
        const randomemail = 'PaypalCheckout'+Cypress._.random(1,9999).toString()+"@gmail.com"
           cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location').scrollIntoView().wait(2000)
           cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .email').type(randomemail,{scrollBehavior:false})
           cy.wait(2000)
           cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .cta-form-submit').click({scrollBehavior:false})
           cy.waitUntil(() => cy.url().then(url => url.includes('/reservation')),{timeout: 10000, interval: 500,})
          cy.url().should('include','/reservation').wait(1000)
          cy.url().should('include','utm_campaign=customLink')
          cy.get('.btn').scrollIntoView().wait(1000)
          cy.get('.btn').realHover().wait(2000).click().realMouseMove(100,100).wait(6000)
          cy.url().should('include','/checkout').wait(1000)
          cy.url().should('include','utm_campaign=customLink')
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
          cy.get('#card-field-submit-button').click()
          cy.waitUntil(() => cy.url().then(url => url.includes('/reserved')),{timeout: 10000, interval: 500,})
          cy.url().should('include','/reserved')
          cy.url().should('include','utm_campaign=customLink')
     }
}
export default PaypalCheckout
