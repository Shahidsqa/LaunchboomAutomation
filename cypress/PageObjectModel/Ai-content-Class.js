
class AiContent{
    Login()
    {
        cy.visit('https://release.launchboom.com/admin/app/login')
        cy.wait(3000)
        cy.get('#email').type('syed@launchboom.com')
        cy.wait(1000)
        cy.get('#password').type('12345678')
        cy.wait(1000)
        cy.get('.button').realHover().click()
        cy.wait(3000) 
    }
  CreateProject()
  {
    cy.get('.bkg-ylb').realHover({scrollBehavior:false}).click({scrollBehavior:false}).wait(2000)
    const random = 'Project'+Math.floor(Math.random() * (999 - 100 + 1))
    cy.get('#name').type(random,{scrollBehavior:false}).wait(2000)
    cy.get('#overview > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false})
    .click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)
  }
  OpenAiGen()
  {
      cy.get('.divide-y > :nth-child(1) > :nth-child(1) > a').click({scrollBehavior:false}).wait(2000)
      cy.get('.projects-name').realHover({scrollBehavior:false}).wait(2000)
      cy.contains('AI Generator').realHover({scrollBehavior:false}).wait(2000)
      .click({scrollBehavior:false,force:true}).wait(3000)
  }
  SelectCategory()
  {
    cy.get('.inputs-wrap__inn > :nth-child(2)').click({scrollBehavior:false}).wait(2000)
    cy.get('#nex-btn').scrollIntoView().wait(2000)
    cy.get('#nex-btn').realHover().wait(1000).click().realMouseMove(100,100)
  }
  ProductName()
  {
    cy.get('.top-steps-wrap').scrollIntoView().wait(2000)
    cy.get('#productName').type('Lomi Smart Composter',{scrollBehavior:false}).wait(2000)
    cy.get('#nex-btn').scrollIntoView().wait(2000)
    cy.get('#nex-btn').realHover().wait(1000).click().realMouseMove(100,100)
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
    cy.get('#nex-btn').scrollIntoView().wait(2000)
    cy.get('#nex-btn').realHover().wait(500).click().realMouseMove(100,100)
  }
  TargetAudience()
  {
    cy.get('.top-steps-wrap').scrollIntoView().wait(2000)
    cy.get('#targetAudience').type('Eco-conscious households and individuals, particularly those in urban settings with limited space, who are interested in sustainability and reducing their carbon footprint. They are likely to be technology-savvy consumers who appreciate smart home devices',{scrollBehavior:false}).wait(1000)
    cy.get('#nex-btn').scrollIntoView().wait(2000)
    cy.get('#nex-btn').realHover().wait(1000).click().realMouseMove(100,100)
  }
  USP()
  {
    cy.get('.top-steps-wrap').scrollIntoView().wait(2000)
    cy.get('#uniqueSellingProposition').type('This kitchen composter is a revolutionary device designed for the eco-conscious consumer looking to make a significant impact on their waste footprint without sacrificing convenience or space. It stands out by being the first of its kind to break down bio',{scrollBehavior:false}).wait(1000)
    cy.get('.ml-2').click().wait(1000)
    cy.get('#submit-btn').scrollIntoView().wait(2000)
    cy.get('#submit-btn').realHover().wait(1000).click().realMouseMove(100,100).wait(50000)
    
  }
AiAdsContentAgain()
  {
    cy.get('.in-active').click({scrollBehavior:false}).wait(3000)
    cy.get('.projects-name').realHover({scrollBehavior:false}).wait(2000)
    cy.contains('AI Generator').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false,force:true}).wait(2000)
    cy.get('.top-steps-wrap > ul > :nth-child(2)').click({scrollBehavior:false}).wait(2000)
    cy.get('.top-steps-wrap > ul > :nth-child(3)').click({scrollBehavior:false}).wait(2000)
    cy.get('.top-steps-wrap > ul > :nth-child(4)').click({scrollBehavior:false}).wait(2000)
    cy.get('.top-steps-wrap > ul > :nth-child(5)').click({scrollBehavior:false}).wait(2000)
    cy.get('.ml-2').scrollIntoView()
    cy.get('.ml-2').click().wait(1000)
    cy.get('#submit-btn').scrollIntoView().wait(2000)
    cy.get('#submit-btn').realHover().wait(1000).click().realMouseMove(100,100).wait(3000)
    cy.get('.swal2-confirm').realHover().wait(1000).click().wait(50000)
    
  }
  AiAdsContent()
  {
    cy.get(':nth-child(2) > .card-content-wrap > :nth-child(1) > .edit-btn').click({scrollBehavior:false}).wait(2000) 
    cy.get('.card-content_text-input').type("  "+'**'+'Lomi the best in world'+'**',{scrollBehavior:false}).wait(2000)
    cy.get('.save-btn').click({scrollBehavior:false}).wait(3000)
    cy.get('.in-active').click({scrollBehavior:false}).wait(2000)
    cy.get(':nth-child(2) > .card-content-wrap > :nth-child(1) > .edit-btn').click({scrollBehavior:false}).wait(1000)
    cy.get('.card-content_text-input').type("  "+'**'+'Lomi the best in world'+'**',{scrollBehavior:false}).wait(2000)
    cy.get('.save-btn').click({scrollBehavior:false}).wait(3000)
    cy.get('.projects-name').realHover({scrollBehavior:false}).wait(2000)
    cy.contains('Funnel Builder').realHover({scrollBehavior:false}).wait(2000)
    .click({scrollBehavior:false,force:true}).wait(5000)
    cy.frameLoaded("[title='Page Builder']")
      cy.iframe("[title='Page Builder']").find("#view-page-link")
      .should('have.attr', 'href')  // Ensure the button has an href attribute
      .then((href) => {
        // Visit the extracted link in the same tab
        cy.visit(href);
      })
      cy.wait(2000)
      cy.get('.foot-wrap').scrollIntoView({duration:12000})
  }

}
export default AiContent
