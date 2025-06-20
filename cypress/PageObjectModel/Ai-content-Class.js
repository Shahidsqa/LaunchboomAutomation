
class AiContent{
    Login()
    {
        cy.visit(Cypress.env('LaunchkitAppUrl')).wait(2000)
        cy.get('#email').type('syed@launchboom.com').wait(1000)
        cy.get('#password').type('12345678').wait(1000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('.button').realHover().click().wait(2000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.url().should('eq','https://release.launchboom.com/admin/projects')
        cy.get('nav.side-nav .top-nav-link .nav-link.active').realHover().wait(1000)
        cy.contains('Dashboard').should('have.css','font-weight','700').realMouseMove(500,500)
        cy.get('nav.side-nav .top-nav-link .nav-link.active')
        .then(($el) => {
           const after = window.getComputedStyle($el[0], 'after'); 
           expect(after.getPropertyValue('background-color')).to.eq('rgb(255, 194, 28)')}).wait(1000)
    }
  CreateProject(projName)
  {
    cy.get('.bkg-ylb').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
    cy.url().should('include','/create')
    const random = projName+Cypress._.random(1, 9999).toString()
    cy.get('#name').type(random,{scrollBehavior:false}).wait(2000)
    cy.get('body').should('have.css', 'font').and('include','Poppins')
    cy.get('#overview > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
    .click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
    cy.get('#alert-1').should('include.text','Project successfully created')
  }
  OpenAiGen()
  {
      cy.get('.divide-y > :nth-child(1) > :nth-child(1) > a').click({scrollBehavior:false}).wait(2000)
      cy.get('.projects-name').realHover({scrollBehavior:false}).wait(2000)
      cy.get('body').should('have.css', 'font').and('include','Poppins')
      cy.contains('Content Assistant').realHover({scrollBehavior:false}).wait(2000).should('have.css','background-color','rgba(255, 194, 28, 0.2)')
      .click({scrollBehavior:false,force:true}).wait(3000)
      cy.get('body').should('have.css', 'font').and('include','Poppins')
      cy.get('.projects-name').realHover({scrollBehavior:false}).wait(1000)
      cy.contains('Content').should('have.css','font-weight','700').realMouseMove(500,500)
      cy.get('nav.side-nav .top-nav-link .nav-link.active')
        .then(($el) => {
           const after = window.getComputedStyle($el[0], 'after'); 
           expect(after.getPropertyValue('background-color')).to.eq('rgb(255, 194, 28)');
         }).wait(1000)
  }
  SelectCategory()
  {
    cy.get('.inputs-wrap__inn > :nth-child(3)').click({scrollBehavior:false}).wait(2000)
    cy.get('#nex-btn').scrollIntoView().wait(1000)
    cy.get('#nex-btn').realHover().wait(500).click().realMouseMove(100,100)
  }
  DesignExample()
  {
    cy.get('.top-steps-wrap').scrollIntoView().wait(2000)
    cy.get('#nex-btn').scrollIntoView().wait(1000)
    cy.get('#nex-btn').realHover().wait(500).click().realMouseMove(100,100)
  }
  ColorPalette()
  {
    cy.get('.top-steps-wrap').scrollIntoView().wait(2000)
    cy.get("[src='https://release.launchboom.com/AiGen/ColorPalette/pal-1.svg']").realHover({scrollBehavior:false}).wait(500).click({scrollBehavior:false}).wait(1000)
    cy.get('#nex-btn').scrollIntoView().wait(1000)
    cy.get('#nex-btn').realHover().wait(500).click().realMouseMove(100,100)
  }
  ProductName()
  {
    cy.get('.top-steps-wrap').scrollIntoView().wait(2000)
    cy.get('#productName').type('Lomi Smart Composter',{scrollBehavior:false}).wait(2000)
    cy.get('body').should('have.css', 'font').and('include','Poppins')
    cy.get('#nex-btn').scrollIntoView().wait(1000)
    cy.get('#nex-btn').realHover().wait(500).click().realMouseMove(100,100)
  }
  ProductFeatures()
  {
    cy.get('.top-steps-wrap').scrollIntoView().wait(2000)
    cy.get('#feature0').type('Fits 1.3 ft of countertop space and operates without emitting any odors.').wait(1000)
    cy.get('.mt-6').click().wait(1000)
    cy.get('#feature1').scrollIntoView()
    cy.get('#feature1').type('Dramatically cuts down kitchen waste volume through dehydration and pulverization, slashing landfill contributions by up to 75% and promoting a greener, cleaner environment.').wait(1000)
    cy.get('.mt-6').click().wait(1000)
    cy.get('#feature2').scrollIntoView()
    cy.get('#feature2').type('Transforms waste into nutrient-rich fertilizer in three simple steps.').wait(1000)
    cy.get('.mt-6').click().wait(1000)
    cy.get('#feature3').scrollIntoView()
    cy.get('#feature3').type('Reduces methane emissions and captures carbon').wait(1000)
    cy.get('.mt-6').click().wait(1000)
    cy.get('#feature4').scrollIntoView()
    cy.get('#feature4').type('Bioplastic Decomposition').wait(1000)
    cy.get('body').should('have.css', 'font').and('include','Poppins')
    cy.get('#nex-btn').scrollIntoView().wait(1000)
    cy.get('#nex-btn').realHover().wait(500).click().realMouseMove(100,100)
  }
  TargetAudience()
  {
    cy.get('.top-steps-wrap').scrollIntoView().wait(2000)
    cy.get('#targetAudience').type('Eco-conscious households and individuals, particularly those in urban settings with limited space, who are interested in sustainability and reducing their carbon footprint. They are likely to be technology-savvy consumers who appreciate smart home devices',{scrollBehavior:false}).wait(1000)
    cy.get('body').should('have.css', 'font').and('include','Poppins')
    cy.get('#nex-btn').scrollIntoView().wait(1000)
    cy.get('#nex-btn').realHover().wait(500).click().realMouseMove(100,100)
  }
  USP()
  {
    cy.get('.top-steps-wrap').scrollIntoView().wait(2000)
    cy.get('#uniqueSellingProposition').type('This kitchen composter is a revolutionary device designed for the eco-conscious consumer looking to make a significant impact on their waste footprint without sacrificing convenience or space. It stands out by being the first of its kind to break down bio',{scrollBehavior:false}).wait(1000)
    cy.get('body').should('have.css', 'font').and('include','Poppins')
    //cy.get('.ml-2').click().wait(1000)
    cy.get('#submit-btn').scrollIntoView().wait(1000)
   // cy.intercept("POST","https://release.launchboom.com/livewire/message/projects.ai-gen.ai-ads-gen").as('contentPage')
    cy.get('#submit-btn').realHover().wait(500).click().realMouseMove(100,100).wait(60000)
   // cy.wait('@contentPage',{timeout:70000})
    
  }
  SubmittingFormAgain()
  {
    cy.wait(2000)
    cy.get(':nth-child(2) > .card-content-wrap > :nth-child(1) > .edit-btn').should('be.visible').wait(1000)
    cy.get('body').should('have.css', 'font').and('include','Poppins')
    cy.get('.in-active').click({scrollBehavior:false}).wait(3000)
    cy.get('body').should('have.css', 'font').and('include','Poppins')
    cy.get('.projects-name').realHover({scrollBehavior:false}).wait(2000)
    cy.contains('Content Assistant').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false,force:true}).wait(2000)
    cy.get('.top-steps-wrap > ul > :nth-child(2)').click({scrollBehavior:false}).wait(2000)
    cy.get('.top-steps-wrap > ul > :nth-child(3)').click({scrollBehavior:false}).wait(2000)
    cy.get('.top-steps-wrap > ul > :nth-child(4)').click({scrollBehavior:false}).wait(2000)
    cy.get('#productName').clear({scrollBehavior:false}).type('E-Scooter',{scrollBehavior:false}).wait(1000)
    cy.get('.top-steps-wrap > ul > :nth-child(5)').click({scrollBehavior:false}).wait(1000)
    cy.get(':nth-child(5) > .remove-feature-btn').scrollIntoView().click().wait(1000)
    cy.get(':nth-child(4) > .remove-feature-btn').scrollIntoView().click().wait(1000)
    cy.get(':nth-child(3) > .remove-feature-btn').scrollIntoView().click().wait(1000)
    cy.get(':nth-child(2) > .remove-feature-btn').click().wait(1000)
    cy.get('.remove-feature-btn').click().wait(1000)
    cy.get('#feature0').type('Fast Battery Charging').wait(1000)
    cy.get('.mt-6').click().wait(1000)
    cy.get('#feature1').scrollIntoView()
    cy.get('#feature1').type('Long Lasting Battery').wait(1000)
    cy.get('.mt-6').click().wait(1000)
    cy.get('#feature2').scrollIntoView()
    cy.get('#feature2').type('Durable').wait(1000)
    cy.get('.top-steps-wrap').scrollIntoView().wait(1000)
    cy.get('.top-steps-wrap > ul > :nth-child(6)').click({scrollBehavior:false}).wait(1000)
    cy.get('#targetAudience').clear({scrollBehavior:false}).type('Short distance travellers',{scrollBehavior:false}).wait(1000)
    cy.get('.top-steps-wrap > ul > :nth-child(7)').click({scrollBehavior:false}).wait(1000)
    cy.get('#uniqueSellingProposition').clear({scrollBehavior:false}).type('Less Cost',{scrollBehavior:false}).wait(1000)
   // cy.get('.ml-2').scrollIntoView()
   // cy.get('.ml-2').click().wait(1000)
    cy.get('#submit-btn').scrollIntoView().wait(1000)
    cy.get('#submit-btn').realHover().wait(500).click().realMouseMove(100,100).wait(3000)
   // cy.intercept("POST","https://release.launchboom.com/livewire/message/projects.ai-gen.ai-ads-gen").as('pageLoad')
    cy.get('.swal2-confirm').realHover().wait(1000).click().wait(60000)
   // cy.wait('@pageLoad',{timeout:70000})
    
  }
  AiAdsContent()
  {
    cy.get(':nth-child(2) > .card-content-wrap > :nth-child(1) > .edit-btn').should('be.visible').wait(1000)
    cy.get(':nth-child(2) > .card-content-wrap > :nth-child(1) > .edit-btn').click({scrollBehavior:false}).wait(2000) 
    cy.get('.card-content_text-input').type("  "+'**'+'E-Scooter the best in world'+'**',{scrollBehavior:false}).wait(2000)
    cy.get('.save-btn').click({scrollBehavior:false}).wait(3000)
    cy.get('.in-active').click({scrollBehavior:false}).wait(2000)
    cy.get(':nth-child(2) > .card-content-wrap > :nth-child(1) > .edit-btn').click({scrollBehavior:false}).wait(1000)
    cy.get('.card-content_text-input').type("  "+'**'+'E-Scooter the best in world'+'**',{scrollBehavior:false}).wait(2000)
    cy.get('.save-btn').click({scrollBehavior:false}).wait(3000)
    cy.get('.projects-name').realHover({scrollBehavior:false}).wait(2000)
    cy.contains('Funnel Builder').realHover({scrollBehavior:false}).wait(2000).should('have.css','background-color','rgba(255, 194, 28, 0.2)')
    .click({scrollBehavior:false,force:true}).wait(3000)
    cy.frameLoaded("[title='Page Builder']")
      cy.iframe("[title='Page Builder']").find("#view-page-link")
      .should('have.attr', 'href')  // Ensure the button has an href attribute
      .then((href) => {
        // Visit the extracted link in the same tab
        cy.visit(href);
      })
      cy.wait(1000)
      cy.get('body').then(($body) => {
        if ($body.find('h2:contains("Lomi")').length > 0 || 
            $body.find('p:contains("Lomi")').length > 0) 
            {
          // The condition is satisfied, so you can log or proceed
              cy.log('Condition satisfied: One or both elements contain "Lomi"');
            } 
            else
             {
               throw new Error('Neither h2 nor p contains "Lomi"');
             }
      })
      cy.wait(1000)
      cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location').scrollIntoView().wait(2000)
      cy.get('.IDL5I64BAI9W9TJ0').should('have.css','background-color','rgb(68, 68, 68)')
      cy.get('.IDL5I64BAI9W9TJ0 > #top-cta-location > .v4-n--inner > .v4-n--inn-align > .v4-n--bottom-content-wrap > .v4-n--cta-inputs-wrap > .sign-up-form > button')
      .should('have.css','background-color','rgb(255, 34, 48)')
      cy.get('.foot-wrap').scrollIntoView({duration:12000})
   }
  

}
export default AiContent