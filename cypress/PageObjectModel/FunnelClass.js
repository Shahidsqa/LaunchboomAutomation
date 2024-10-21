
class funnelTypes{
   StripeMethod()
             {
              cy.get('#search').type('Testing Project',{scrollBehavior:false}).wait(2000)
              cy.get('.basis-1\\/12 > :nth-child(2) > .flex-shrink-0').realHover({scrollBehavior:false})
              .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
              cy.get('.project-row > :nth-child(1) > a').click({scrollBehavior:false}).wait(2000)
              cy.get('[data-tabs-target="#payment"]').click({scrollBehavior:false}).wait(2000)
              cy.get('#payment_method').select('Stripe',{scrollBehavior:false,force:true}).wait(2000)
             }

     BillingAddress()
        {
           cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(7)').scrollIntoView().wait(2000)
           cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(7) > :nth-child(2) > .toggle-button > .mt-2 > .toggle')
          .then(($toggle) => {
          // Get the background color of the toggle
           const color = $toggle.css('background-color')
           if(color === 'rgb(201, 201, 201)')
           {
            cy.get('#payment > .py-4 > :nth-child(2) > :nth-child(7) > :nth-child(2) > .toggle-button > .mt-2 > .toggle').click().wait(2000)

           }
           else 
           {
            cy.log('Toggle is ON')
           }
         })
         cy.get('#payment').scrollIntoView().wait(2000)
         cy.get('#payment > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
         .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)
     }
  
    classicFunnel(){

      cy.get('[data-tabs-target="#admin"]').click({scrollBehavior:false}).wait(2000)
      cy.get('#admin > .py-4 > :nth-child(2) > :nth-child(6)').scrollIntoView().wait(1000)
      cy.get(':nth-child(6) > :nth-child(2) > :nth-child(2) > .minh-label').select('Classic',{scrollBehavior:false,force:true}).wait(2000)
      cy.get('#admin').scrollIntoView().wait(1000)
      cy.get('#admin > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100)
      cy.wait(3000)
        }

        classicFlow(){
            cy.visit("https://test.launchboomer.com/1")
             cy.wait(5000)
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
    
    cy.wait(4000)
    cy.get('.btn').scrollIntoView().wait(1000)
    cy.get('.btn').realHover().wait(2000).click().realMouseMove(100,100).wait(6000)
    cy.get('#address-element').should('be.visible')
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
    cy.get('#card-button').click().wait(6000)
    cy.url().should('include','https://test.launchboomer.com/reserved')
  }

  optoutFunnel(){
    cy.visit("https://release.launchboom.com/admin/projects")
    cy.wait(2000)
    cy.get('#search').type('Testing Project',{scrollBehavior:false}).wait(2000)
    cy.get('.basis-1\\/12 > :nth-child(2) > .flex-shrink-0').realHover({scrollBehavior:false})
    .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
    cy.get('.project-row > :nth-child(1) > a').click({scrollBehavior:false}).wait(2000)
    cy.get('[data-tabs-target="#admin"]').click({scrollBehavior:false}).wait(2000)
    cy.get('#admin > .py-4 > :nth-child(2) > :nth-child(6)').scrollIntoView().wait(2000)
    cy.get(':nth-child(6) > :nth-child(2) > :nth-child(2) > .minh-label').select('Classic + OptOut',{scrollBehavior:false,force:true}).wait(2000)
    cy.get('#admin').scrollIntoView().wait(2000)
    cy.get('#admin > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100)
    cy.wait(3000)
    
  }

  optoutFlow(){
    cy.visit("https://test.launchboomer.com/1")
        cy.wait(5000)
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
        
        cy.wait(4000)
        cy.get('.btn').scrollIntoView().wait(1000)
        cy.get('.no-thanks-link').click().wait(3000)
        cy.get('[href="https://www.instagram.com"]').scrollIntoView().wait(2000)
        cy.get('[href="https://www.instagram.com"]').click().wait(3000)
  }

  followerFunnel(){
    cy.visit("https://release.launchboom.com/admin/projects")
        cy.wait(2000)
        cy.get('#search').type('Testing Project',{scrollBehavior:false}).wait(2000)
        cy.get('.basis-1\\/12 > :nth-child(2) > .flex-shrink-0').realHover({scrollBehavior:false})
        .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.get('.project-row > :nth-child(1) > a').click({scrollBehavior:false}).wait(2000)
        cy.get('[data-tabs-target="#admin"]').click({scrollBehavior:false}).wait(2000)
        cy.get('#admin > .py-4 > :nth-child(2) > :nth-child(6)').scrollIntoView().wait(2000)
        cy.get(':nth-child(6) > :nth-child(2) > :nth-child(2) > .minh-label').select('Follower Funnel',{scrollBehavior:false,force:true}).wait(2000)
        cy.get('#admin').scrollIntoView().wait(2000)
        cy.get('#admin > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100)
        cy.wait(3000)
  }

  followerFlow(){
    cy.visit("https://test.launchboomer.com/1")
    cy.wait(5000)
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
    
    cy.wait(4000)
    cy.get('#reservation-btn').scrollIntoView().wait(1000)
    cy.get('#reservation-btn').realHover().wait(2000).click()
  }
}
export default funnelTypes