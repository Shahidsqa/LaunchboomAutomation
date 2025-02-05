
class funnelTypes{
   StripeMethod()
             {
              cy.visit(Cypress.env('ProjectUrl')).wait(2000)
              cy.url().should('include','/edit')
              cy.get('body').should('have.css', 'font').and('include','Poppins')
              cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
              cy.get('body').should('have.css', 'font').and('include','Poppins')
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

             ProdStripeMethod()
             {
              cy.visit(Cypress.env('ProjectUrl')).wait(2000)
              cy.url().should('include','/edit')
              cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
              cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(1) > :nth-child(2) > div > .minh-label')
              .select('Stripe',{scrollBehavior:false,force:true}).wait(2000)
              cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(3)').scrollIntoView().wait(2000)
              cy.get(':nth-child(3) > :nth-child(2) > .toggle-button > .mt-2 > .toggle')
              .then(($toggle) => {
                // Get the background color of the toggle
                   const color = $toggle.css('background-color')
                     if(color === 'rgb(201, 201, 201)')
                       {
                        cy.get(':nth-child(3) > :nth-child(2) > .toggle-button > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)
      
                       }
                      else 
                        {
                          cy.log('Stripe Element Toggle is ON')
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

     ProdBillingAddress()
     {
      cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(7)').scrollIntoView().wait(2000)
      cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(7) > :nth-child(2) > .toggle-button > .mt-2 > .toggle')
      .then(($toggle) => {
        // Get the background color of the toggle
         const color = $toggle.css('background-color')
         if(color === 'rgb(201, 201, 201)')
         {
          cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(7) > :nth-child(2) > .toggle-button > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)

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
  
    classicFunnel()
    {
      cy.get('[data-tabs-target="#admin"]').click({scrollBehavior:false}).wait(2000)
      cy.get('body').should('have.css', 'font').and('include','Poppins')
      cy.get('#admin > .py-4 > :nth-child(2) > :nth-child(6)').scrollIntoView().wait(1000)
      cy.get(':nth-child(6) > :nth-child(2) > :nth-child(2) > .minh-label').select('Classic',{scrollBehavior:false,force:true}).wait(2000)
      cy.get('#admin').scrollIntoView().wait(1000)
      cy.get('#admin > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100)
      cy.wait(2000)
      cy.get('#alert-1').should('include.text','Project Successfully Updated')
    }

        classicFlow(){
            cy.visit(Cypress.env('CheckoutAppUrl2'))
             cy.wait(5000)
          cy.url().should('include','utm_campaign=customLink')
          cy.url().should('include','v=')
             const randomemail = 'ClassicFlow'+Math.floor(Math.random() * (999 - 100 + 1))+"@gmail.com"
          //   cy.url().then((currentUrl)=>{
          //  if (currentUrl.endsWith('v=A'))
          //  {
            //     cy.get('.IDM0XU5PNTON1JH1 > #top-cta-location').scrollIntoView()
            //     cy.wait(2000)
            //     cy.get('.IDM0XU5PNTON1JH1 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .email').type(randomemail)
            //     cy.wait(2000)
            //     cy.get('.IDM0XU5PNTON1JH1 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .cta-form-submit').click()
            // }
          //  else 
          //  {
                cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location').scrollIntoView().wait(2000)
                cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .email').type(randomemail,{scrollBehavior:false})
                cy.wait(2000)
                cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .cta-form-submit').click({scrollBehavior:false})
          //  }
        //})
    
    cy.wait(3000)
    cy.url().should('include','/reservation').wait(1000)
    cy.url().should('include','utm_campaign=customLink')
    cy.url().should('include','v=')
    cy.get('.btn').scrollIntoView().wait(1000)
    cy.get('.btn').realHover().wait(1000).click().realMouseMove(100,100).wait(8000)
    cy.url().should('include','/checkout').wait(1000)
    cy.url().should('include','utm_campaign=customLink')
    cy.frameLoaded("[title='Secure address input frame']")
    cy.get("[title='Secure address input frame']").scrollIntoView().wait(1000)
    cy.iframe("[title='Secure address input frame']").find('#Field-nameInput').type('Faisal Athar').wait(1000)
    cy.iframe("[title='Secure address input frame']").find('#Field-countryInput').select('United States').wait(1000)
    cy.iframe("[title='Secure address input frame']").find('#Field-addressLine1Input').type('134 Eldridge Street').wait(1000)
    cy.iframe("[title='Secure address input frame']").find('#Field-localityInput').type('New York').wait(1000)
    cy.iframe("[title='Secure address input frame']").find('#Field-administrativeAreaInput').select('Alaska').wait(1000)
    cy.iframe("[title='Secure address input frame']").find('#Field-postalCodeInput').type('99999').wait(1000)
    cy.iframe("[title='Secure address input frame']").find('#Field-phoneInput').type('(236) 555-5523').wait(1000)
    cy.frameLoaded("[title='Secure payment input frame']")
    cy.get("[title='Secure payment input frame']").scrollIntoView().wait(1000)
    cy.iframe("[title='Secure payment input frame']").find('#Field-numberInput').type('4111111111111111').wait(1000)
    cy.iframe("[title='Secure payment input frame']").find('#Field-expiryInput').type('04 / 27').wait(1000)
    cy.iframe("[title='Secure payment input frame']").find('#Field-cvcInput').type('111').wait(2000)
    cy.get('#card-button').click().wait(5000)
    cy.url().should('include','/reserved')
    cy.url().should('include','utm_campaign=customLink').wait(1000)

  }

  followerFunnel(){
    cy.visit(Cypress.env('ProjectUrl')).wait(2000)
    cy.url().should('include','/edit')
         cy.get('[data-tabs-target="#admin"]').click({scrollBehavior:false}).wait(2000)
        cy.get('#admin > .py-4 > :nth-child(2) > :nth-child(6)').scrollIntoView().wait(2000)
        cy.get(':nth-child(6) > :nth-child(2) > :nth-child(2) > .minh-label').select('Follower Funnel',{scrollBehavior:false,force:true}).wait(2000)
        cy.get('#admin').scrollIntoView().wait(2000)
        cy.get('#admin > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100)
        cy.wait(2000)
        cy.get('#alert-1').should('include.text','Project Successfully Updated')
  }

  followerFlow(){
    cy.visit(Cypress.env('CheckoutAppUrl2'))
    cy.wait(5000)
    cy.url().should('include','utm_campaign=customLink')
          cy.url().should('include','v=')
    const randomemail = 'FollowerFlow'+Math.floor(Math.random() * (999 - 100 + 1))+"@gmail.com"
        // cy.url().then((currentUrl)=>{
        //     if (currentUrl.endsWith('v=A'))
        //     {
                cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location').scrollIntoView().wait(2000)
                cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .email').type(randomemail,{scrollBehavior:false})
                cy.wait(2000)
                cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .cta-form-submit').click({scrollBehavior:false})
        //     }
        //     else 
        //     {
        //         cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location').scrollIntoView()
        //         cy.wait(2000)
        //         cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .email').type(randomemail)
        //         cy.wait(2000)
        //         cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .cta-form-submit').click()
        //    }
        // })
    
    cy.wait(3000)
    cy.url().should('include','/follower').wait(1000)
    cy.url().should('include','utm_campaign=customLink')
    cy.url().should('not.include','v=')
    cy.get('.btn').scrollIntoView().wait(1000)
    cy.get('.btn').realHover().wait(2000).click().wait(6000)
  }

  optoutFunnel(){
    cy.visit(Cypress.env('ProjectUrl')).wait(2000)
    cy.url().should('include','/edit')
    cy.get('[data-tabs-target="#admin"]').click({scrollBehavior:false}).wait(2000)
    cy.get('#admin > .py-4 > :nth-child(2) > :nth-child(6)').scrollIntoView().wait(2000)
    cy.get(':nth-child(6) > :nth-child(2) > :nth-child(2) > .minh-label').select('Classic + OptOut',{scrollBehavior:false,force:true}).wait(2000)
    cy.get('#admin').scrollIntoView().wait(2000)
    cy.get('#admin > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100)
    cy.wait(2000)
    cy.get('#alert-1').should('include.text','Project Successfully Updated')
    
  }

  optoutFlow(){
    cy.visit(Cypress.env('CheckoutAppUrl2'))
        cy.wait(5000)
        cy.url().should('include','utm_campaign=customLink')
          cy.url().should('include','v=')
        const randomemail = 'OptOutFlow'+Math.floor(Math.random() * (999 - 100 + 1))+"@gmail.com"
            // cy.url().then((currentUrl)=>{
            //     if (currentUrl.endsWith('v=A'))
            //     {
            //         cy.get('.IDM0XU5PNTON1JH1 > #top-cta-location').scrollIntoView()
            //         cy.wait(2000)
            //         cy.get('.IDM0XU5PNTON1JH1 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .email').type(randomemail)
            //         cy.wait(2000)
            //         cy.get('.IDM0XU5PNTON1JH1 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .cta-form-submit').click()
            //     }
            //     else 
            //     {
                    cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location').scrollIntoView().wait(2000)
                    cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .email').type(randomemail,{scrollBehavior:false})
                    cy.wait(2000)
                    cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > .cta-form-submit').click({scrollBehavior:false})
            //     }
            // })
        
        cy.wait(3000)
        cy.url().should('include','/reservation').wait(1000)
        cy.url().should('include','utm_campaign=customLink')
          cy.url().should('include','v=')
        cy.get('.btn').scrollIntoView().wait(1000)
        cy.get('.no-thanks-link').click({scrollBehavior:false}).wait(2000)
        cy.url().should('include','/thank-you').wait(1000)
        cy.url().should('include','utm_campaign=customLink')
        cy.document().then((doc) => {
          // Safely queries for the element using standard JavaScript without throwing an error if it doesn't exist.
          const instagramLink = doc.querySelector('[href="https://www.instagram.com"]');
          // if element exists then click on it
          if (instagramLink)
            {
            cy.wrap(instagramLink).click();
            }
         else 
          {
            cy.log('Instagram link is not available');
          }
        })

  }

  
}
export default funnelTypes
