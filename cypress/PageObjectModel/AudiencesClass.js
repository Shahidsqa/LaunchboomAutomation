
class audience{
 
    PreCampaignAudiences()
    {
        cy.get('.h-full > :nth-child(1) > :nth-child(2)').realHover().wait(2000)
        cy.contains('Audiences').realHover().wait(1000).click().wait(3000)
        cy.get('#audiences > .mb-8').scrollIntoView().wait(2000)
        cy.get('.flex-wrap > [data-category="Technology"]').click().wait(2000)
        cy.get('.flex-wrap > [data-category="Design"]').click().wait(2000)
        cy.get('.flex-wrap > [data-category="Games"]').click().wait(2000)
        cy.get('.flex-wrap > [data-category="Home"]').click().wait(2000)
        cy.get('.flex-wrap > [data-category="Health & Fitness"]').click().wait(2000)
        cy.get('.flex-wrap > [data-category="Pet"]').click().wait(2000)
        cy.get('.flex-wrap > [data-category="Children & Family"]').click().wait(2000)
        cy.get('.flex-wrap > [data-category="Publications"]').click().wait(2000)
        cy.get('.flex-wrap > [data-category="Green Tech"]').click().wait(2000)
        cy.get('.flex-wrap > [data-category="Outdoor & Travel"]').click().wait(2000)
        cy.get('.flex-wrap > [data-category="Other"]').click().wait(3000)
 }
    CreateAudienceDuplicateId()
    {
        cy.get('#audiences > .mb-8 > .mx-auto > .bkg-ylb').scrollIntoView().wait(2000).realHover().wait(1000).click().realMouseMove(100,100).wait(3000)
        cy.get('#facebook_audience_id').type('23854544333720614').wait(2000)
        cy.get('#name').type('Audience with Duplicate Id').wait(2000)
        cy.get('#description').type('Trying to create Audience with duplicate Audience Id').wait(2000)
        cy.get('#category_id').select('General',{scrollBehavior:false,force:true}).wait(2000)
        cy.get('.select2-selection').click().type('Faisal-Athar{enter}').wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(1000)
        cy.get('.max-w-7xl > .flex').scrollIntoView().wait(3000)
        cy.go(-2)

    }

    EditAudience()
    {
        cy.get('#audiences > .mb-8').scrollIntoView().wait(2000)
        cy.get('#audiences > :nth-child(4) > .shadow-xl > :nth-child(1) > .active_option > .min-w-full > .divide-y > tr > .text-right').click()
        cy.get('div > .absolute.z-50.mt-2.30.rounded-md.shadow-lg.origin-top-right.right-0').invoke('css', 'display', 'block').wait(2000)
        cy.contains('Edit Audience').realHover().wait(2000).click().realMouseMove(100,100).wait(3000)
        cy.get('#name').type('d').wait(2000)
       // cy.get('#category_id').select('General')
        cy.get('.select2-selection').click().type('Faisal-Athar{enter}').wait(2000)
        cy.get('.bkg-ylb').realHover().wait(2000).click().realMouseMove(100,100).wait(1000)
        cy.get('#alert-1').scrollIntoView().wait(3000)
    }
    
    ShareAudience()
    {
        cy.get('#audiences > .mb-8').scrollIntoView().wait(2000)
        cy.get('#audiences > :nth-child(4) > .shadow-xl > :nth-child(1) > .active_option > .min-w-full > .divide-y > tr > .w-72.px-3 > .w-72 > .button')
        .realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).wait(3000)
        cy.get('#select2-project-container').click()
        cy.get('.select2-search__field').type('418786{enter}').wait(1000)
        cy.get('.py-3 > .bkg-ylb').realHover().wait(1000).click().wait(4000)
        cy.get('#alert-1').scrollIntoView().wait(3000)
    }
    SharedAudiences()
    {
        cy.get('[data-tabs-target="#shared-audience"]').click({scrollBehavior:false}).wait(2000)
        cy.get('.minh-label').click({scrollBehavior:false}).type('Testing Project',{scrollBehavior:false}).wait(4000)
        cy.get('.minh-label').clear({scrollBehavior:false}).wait(4000)
        cy.get('.shadow-xl > .min-w-full > .bg-white > :nth-child(1) > .w-72 > .flex > .button')
        .realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(2000)
        cy.get('.swal2-confirm').realHover().wait(2000).click().wait(2000)
        cy.get('#alert-1').scrollIntoView().wait(3000)
        cy.get('[aria-current="page"] > .relative').scrollIntoView().wait(2000)
        cy.get(':nth-child(3) > .relative').click().wait(2000)
        cy.get('.z-0 > :nth-child(4) > .relative').click().wait(2000)
        cy.get(':nth-child(5) > .relative').click().wait(2000)
        cy.get(':nth-child(6) > .relative').click().wait(2000)
        cy.get(':nth-child(7) > .relative').click().wait(2000)
        cy.get(':nth-child(8) > .relative').click().wait(2000)
        cy.get(':nth-child(9) > .relative').click().wait(2000)
        cy.get(':nth-child(10) > .relative').click().wait(2000)
        cy.get(':nth-child(11) > .relative').click().wait(2000)
        cy.wait(5000)

    }
}
export default audience
