
class ABTesting{

    OpenABTesting()
    {
        cy.get('.divide-y > :nth-child(1) > :nth-child(1) > a').click({scrollBehavior:false}).wait(2000)
        cy.get('.projects-name').realHover({scrollBehavior:false}).wait(2000)
        cy.contains('Overview').scrollIntoView().wait(1000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.contains('A/B Testing').realHover({scrollBehavior:false}).wait(2000).should('have.css','background-color','rgba(255, 194, 28, 0.2)')
        .click({force:true}).wait(3000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('.projects-name').realHover({scrollBehavior:false}).wait(1000)
        cy.contains('Analytics').should('have.css','font-weight','700').realMouseMove(500,500)
        cy.get('nav.side-nav .top-nav-link .nav-link.active')
        .then(($el) => {
           const after = window.getComputedStyle($el[0], 'after'); 
           expect(after.getPropertyValue('background-color')).to.eq('rgb(255, 194, 28)');
         }).wait(1000)
        
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
    CreateABTestWithoutTitle()
    {
        cy.get('.bkg-ylb').scrollIntoView().wait(2000).realHover().wait(1000).click().realMouseMove(100,100).wait(2000)
        cy.get('.bg-teal-500').realHover().wait(1000).click().wait(3000)
        cy.get('.py-8 > .mx-auto > :nth-child(1) > .flex').should('include.text','The ab test title field is required.').wait(1000)
    }
    CreateABTest()
    {
        cy.get('.bkg-ylb').scrollIntoView().wait(2000).realHover().wait(1000).click().realMouseMove(100,100).wait(2000)
        cy.get('#ab_test_title').type('AB Test 01').wait(2000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('.bg-teal-500').realHover().wait(1000).click().wait(5000)
        cy.get('#alert-1').should('include.text','New AB test successfully added.')
        cy.get('.status-dot').should('include.text','LIVE')
        cy.get('.justify-around > :nth-child(3) > :nth-child(2)').should('include.text','Running').wait(3000)
    }
    EndTest()
    {
        cy.get('.inline-flex').scrollIntoView().wait(2000).realHover().wait(1000).click().wait(5000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('#alert-1').should('include.text','Test completed successfully.')
        cy.get('.status-dot').should('include.text','not running').wait(3000)
    }
    PreviousTests()
    {
        cy.get('[data-tabs-target="#configuration"]').realHover({scrollBehavior:false}).click({scrollBehavior:false}).wait(2000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('#configuration').should('be.visible')
        cy.get('.font-extrabold').should('include.text','A/B Tests')
        cy.get('.project-row > :nth-child(4)').should('include.text','Completed').wait(1000)
        cy.get(':nth-child(1) > :nth-child(5) > .bg-white').click().wait(5000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('.text-3xl.text-center').should('include.text','AB Test 01')
        cy.get('#stats').should('be.visible').wait(3000)
        cy.get(':nth-child(3) > .bg-white').scrollIntoView().wait(2000).realHover().wait(1000).click().wait(3000)
        cy.get('[data-tabs-target="#stats"]').should('be.visible').wait(2000)

    }
    CreateDuplicateABTest()
    {
        cy.get('.bkg-ylb').scrollIntoView().wait(2000).realHover().wait(1000).click().realMouseMove(100,100).wait(2000)
        cy.get('#ab_test_title').type('AB Test 01').wait(2000)
        cy.get('.bg-teal-500').realHover().wait(1000).click().wait(4000)
        cy.get('.py-8 > .mx-auto > :nth-child(1) > .flex').should('include.text','The ab test title has already been taken.').wait(1000)
    }
}
export default ABTesting
