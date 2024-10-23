
class Dashboard{
    ProjectTypes()
    {
        // Project Types
        cy.get('#user_type').select('SAAS',{scrollBehavior:false,force:true}).wait(4000)
        cy.get('#user_type').select('Accelerator',{scrollBehavior:false,force:true}).wait(4000)
        cy.get('#user_type').select('All Project Types',{scrollBehavior:false,force:true}).wait(4000)
        // Search and Reset
        cy.get('#search').type('Testing Project',{scrollBehavior:false}).wait(2000)
        cy.get('.basis-1\\/12 > :nth-child(2) > .flex-shrink-0').realHover({scrollBehavior:false})
        .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)
        cy.get('.ml-2').click().wait(2000)
        cy.get('#search').type('syed@launchboom.com',{scrollBehavior:false}).wait(2000)
        cy.get('.basis-1\\/12 > :nth-child(2) > .flex-shrink-0').realHover({scrollBehavior:false})
        .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.get(':nth-child(15) > :nth-child(1)').scrollIntoView({duration:4000}).wait(1000)
        cy.get('.ml-2').click({scrollBehavior:false,force:true}).wait(3000)
        // Create Project
        cy.get('.bkg-ylb').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)
        cy.go(-1).wait(3000)
    }

    OpenModules()
    {
        // Project Settings
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(2000)
        cy.contains('Project Settings').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(3000)
        cy.go(-1).wait(3000)
        // Funnel Builder
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(2000)
        cy.contains('Funnel Builder').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(5000)
        cy.go(-1).wait(3000)
        // Analytics dashboard
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(2000)
        cy.contains('Analytics Dashboard').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(4000)
        cy.go(-1).wait(3000)
        // Ad Analytics
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(2000)
        cy.contains('Ad Analytics').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(4000)
        cy.go(-1).wait(3000)
        // Funnel Analytics
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(2000)
        cy.contains('Funnel Analytics').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(4000)
        cy.go(-1).wait(3000)
        // A/B testing
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(2000)
        cy.contains('A/B Testing').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(3000)
        cy.go(-1).wait(3000)
        // Link Builder
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(2000)
        cy.contains('Link Builder').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(3000)
        cy.go(-1).wait(3000)
        // Duplicate project
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(2000)
        cy.contains('Duplicate Project').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(3000)
        cy.get('.swal2-confirm').realHover().wait(2000).click().wait(4000)
        cy.get('.ml-2').click({scrollBehavior:false}).wait(2000)
        // Delete project
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(2000)
        cy.contains('Delete Project').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(3000)
        cy.get('.swal2-confirm').realHover().wait(2000).click().wait(1000)
        cy.get('#alert-1').scrollIntoView().wait(3000)
        cy.get('.ml-2').click({scrollBehavior:false}).wait(2000)
        // Project user Access
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(500)
        cy.get(':nth-child(1) > .text-right > .relative > .absolute > .rounded-md').scrollIntoView().wait(2000)
        cy.contains('Project User Access').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(3000)
        cy.go(-1).wait(3000)
          
    }
 
    StatusMessages()
    {
        // Disable Facebook/Mailchimp and check status
        cy.get('#search').type('Testing Project',{scrollBehavior:false}).wait(2000)
        cy.get('.basis-1\\/12 > :nth-child(2) > .flex-shrink-0').realHover({scrollBehavior:false})
        .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)
        cy.get('.project-row > :nth-child(1) > a').click({scrollBehavior:false}).wait(2000)
        cy.get('[data-tabs-target="#admin"]').click({scrollBehavior:false}).wait(2000)
        cy.get('.py-4 > :nth-child(2) > :nth-child(12)').scrollIntoView().wait(2000)
        cy.get(':nth-child(12) > :nth-child(2) > :nth-child(2) > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)
        cy.get(':nth-child(12) > :nth-child(2) > :nth-child(3) > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)
        cy.get('#admin').scrollIntoView().wait(2000)
        cy.get('#admin > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)
        cy.get('.h-full > :nth-child(1) > :nth-child(2)').click().wait(3000)
        cy.get('#search').type('Testing Project',{scrollBehavior:false}).wait(2000)
        cy.get('.basis-1\\/12 > :nth-child(2) > .flex-shrink-0').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)
        cy.get('.text-right').click({scrollBehavior:false}).wait(500)
        cy.get(':nth-child(1) > .text-right > .relative > .absolute > .rounded-md').scrollIntoView().wait(2000)
        cy.contains('Status Messages').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(6000)
        cy.go(-1).wait(3000)

        // Enable Facebook/Mailchimp and check status again
           cy.get('.project-row > :nth-child(1) > a').click({scrollBehavior:false}).wait(2000)
           cy.get('[data-tabs-target="#admin"]').click({scrollBehavior:false}).wait(2000)
           cy.get('.py-4 > :nth-child(2) > :nth-child(12)').scrollIntoView().wait(2000)
           cy.get(':nth-child(12) > :nth-child(2) > :nth-child(2) > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)
           cy.get(':nth-child(12) > :nth-child(2) > :nth-child(3) > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)
           cy.get('#admin').scrollIntoView().wait(2000)
           cy.get('#admin > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)
           cy.get('.h-full > :nth-child(1) > :nth-child(2)').click().wait(3000)
           cy.get('#search').type('Testing Project',{scrollBehavior:false}).wait(2000)
           cy.get('.basis-1\\/12 > :nth-child(2) > .flex-shrink-0').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)
           cy.get('.text-right').click({scrollBehavior:false}).wait(500)
           cy.get(':nth-child(1) > .text-right > .relative > .absolute > .rounded-md').scrollIntoView().wait(2000)
           cy.contains('Status Messages').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(6000)
           cy.go(-2).wait(3000)
    }

    RefreshData()
    {
        cy.get('.basis-1\\/12 > :nth-child(2) > .flex-shrink-0').realHover({scrollBehavior:false})
         .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)
        cy.get('.text-right').click({scrollBehavior:false}).wait(500)
        cy.get(':nth-child(1) > .text-right > .relative > .absolute > .rounded-md').scrollIntoView().wait(2000)
        cy.contains('Refresh Data').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(3000)
        cy.get(':nth-child(3) > :nth-child(2) > .bg-blue-500').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(100,100)
        cy.get(':nth-child(3) > :nth-child(1) > .text-xl').scrollIntoView().wait(5000)
    }

    


}
export default Dashboard