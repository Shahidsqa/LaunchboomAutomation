
class ABTesting{

    OpenABTesting()
    {
        cy.get('.divide-y > :nth-child(1) > :nth-child(1) > a').click({scrollBehavior:false}).wait(2000)
        cy.get('.projects-name').realHover({scrollBehavior:false}).wait(2000)
        cy.contains('A/B Testing').realHover().wait(2000).click({force:true}).wait(3000)
    }
    MakeLPvariants()
    {
        cy.get('.bkg-ylb').scrollIntoView().wait(2000).realHover().wait(1000).click().wait(4000)
        cy.get('.selectBtn').click().wait(3000)
        cy.get('#duplicate-A').click().wait(2000)
        cy.get('.swal2-confirm').realHover().wait(2000).click().wait(4000)
        cy.get('#back-to-dashboard > .lpb-md').click().realMouseMove(200,200).wait(3000)
    }
    CreateABTest()
    {
        cy.get('.bkg-ylb').scrollIntoView().wait(2000).realHover().wait(1000).click().wait(2000)
        cy.get('#ab_test_title').type('AB Test 01').wait(2000)
        cy.get('.bg-teal-500').realHover().wait(1000).click().wait(8000)
    }
    EndTest()
    {
        cy.get('.inline-flex').scrollIntoView().wait(2000).realHover().wait(1000).click().wait(7000)
    }
    PreviousTests()
    {
        cy.get('[data-tabs-target="#configuration"]').realHover({scrollBehavior:false}).click({scrollBehavior:false}).wait(3000)
        cy.get(':nth-child(1) > :nth-child(5) > .bg-white').click().wait(7000)
        cy.get(':nth-child(3) > .bg-white').scrollIntoView().wait(2000).realHover().wait(1000).click().wait(5000)

    }
}
export default ABTesting