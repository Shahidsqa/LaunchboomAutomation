
class ABTesting{

    OpenABTesting()
    {
        cy.get('.divide-y > :nth-child(1) > :nth-child(1) > a').click({scrollBehavior:false}).wait(2000)
        cy.get('.projects-name').realHover({scrollBehavior:false}).wait(2000)
      //  cy.contains('Overview').scrollIntoView({force:true}).wait(1000)
        cy.contains('A/B Testing').realHover({scrollBehavior:false}).wait(2000).click({force:true}).wait(3000)
        
    }
    MakeLPvariants()
    {
        cy.get('.bkg-ylb').scrollIntoView().wait(2000).realHover().wait(1000).click().wait(4000)
        cy.get('.selectBtn').click().wait(3000)
        cy.get('#duplicate-A').click().wait(2000)
        cy.get('.swal2-confirm').realHover().wait(2000).click().wait(4000)
        cy.get('.variant-wrap > .active').should('be.visible').wait(1000)
        cy.get('#back-to-dashboard > .lpb-md').click().realMouseMove(200,200).wait(2000)
    }
    CreateABTest()
    {
        cy.get('.bkg-ylb').scrollIntoView().wait(2000).realHover().wait(1000).click().wait(2000)
        cy.get('#ab_test_title').type('AB Test 01').wait(2000)
        cy.get('.bg-teal-500').realHover().wait(1000).click().wait(5000)
        cy.get('.status-dot').should('include.text','LIVE')
        cy.get('.justify-around > :nth-child(3) > :nth-child(2)').should('include.text','Running').wait(3000)
    }
    EndTest()
    {
        cy.get('.inline-flex').scrollIntoView().wait(2000).realHover().wait(1000).click().wait(5000)
        cy.get('.status-bar-ab-test').should('include.text','not running').wait(3000)
    }
    PreviousTests()
    {
        cy.get('[data-tabs-target="#configuration"]').realHover({scrollBehavior:false}).click({scrollBehavior:false}).wait(2000)
        cy.get('#configuration').should('be.visible').wait(1000)
        cy.get(':nth-child(1) > :nth-child(5) > .bg-white').click().wait(5000)
        cy.get('#stats').should('be.visible').wait(3000)
        cy.get(':nth-child(3) > .bg-white').scrollIntoView().wait(2000).realHover().wait(1000).click().wait(3000)
        cy.get('[data-tabs-target="#stats"]').should('be.visible').wait(2000)

    }
}
export default ABTesting
