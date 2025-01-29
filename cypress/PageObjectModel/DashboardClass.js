
class Dashboard{
    ProjectTypes()
    {
        // Project Types
        cy.get('#user_type').select('Accelerator',{scrollBehavior:false,force:true}).wait(3000)
        cy.url().should('include','userType=0').wait(1000)
        cy.get('#user_type').select('Gaming',{scrollBehavior:false,force:true}).wait(3000)
        cy.url().should('include','userType=1').wait(1000)
        cy.get('#user_type').select('Academy',{scrollBehavior:false,force:true}).wait(3000)
        cy.url().should('include','userType=2').wait(1000)
        cy.get('#user_type').select('SAAS',{scrollBehavior:false,force:true}).wait(3000)
        cy.url().should('include','userType=4').wait(1000)
        cy.get('#user_type').select('All Project Types',{scrollBehavior:false,force:true}).wait(3000)
        cy.url().should('eq','https://release.launchboom.com/admin/projects').wait(1000)
        // Search and Reset
        cy.get('#search').type('Testing Project',{scrollBehavior:false}).wait(2000)
        cy.get('.basis-1\\/12 > :nth-child(2) > .flex-shrink-0').realHover({scrollBehavior:false})
        .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.get('.project-row > :nth-child(1) > a').should('include.text','Testing Project').wait(1000)
        cy.get('.ml-2').click().wait(2000)
        cy.url().should('eq','https://release.launchboom.com/admin/projects').wait(1000)
        cy.get('#search').type('syed@launchboom.com',{scrollBehavior:false}).wait(2000)
        cy.get('.basis-1\\/12 > :nth-child(2) > .flex-shrink-0').realHover({scrollBehavior:false})
        .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.get('.min-w-full > .divide-y > :last-child').scrollIntoView({duration:5000}).wait(1000)
        cy.get('.ml-2').click({scrollBehavior:false,force:true}).wait(2000)
        cy.url().should('eq','https://release.launchboom.com/admin/projects').wait(1000)
        // Create Project
        cy.get('.bkg-ylb').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.url().should('eq','https://release.launchboom.com/admin/projects/create').wait(1000)
        cy.go(-1).wait(3000)
    }

    OpenModules()
    {
        // Project Settings
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(2000)
        cy.contains('Project Settings').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(2000)
        cy.url().should('include','/edit').wait(1000)
        cy.go(-1).wait(3000)
        // Funnel Builder
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(2000)
        cy.contains('Funnel Builder').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(4000)
        cy.url().should('include','/ui-editor').wait(1000)
        cy.go(-1).wait(3000)
        // Analytics dashboard
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(2000)
        cy.contains('Analytics Dashboard').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(3000)
        cy.url().should('include','/analytics-dashboard').wait(1000)
        cy.go(-1).wait(3000)
        // Ad Analytics
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(2000)
        cy.contains('Ad Analytics').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(3000)
        cy.url().should('include','/ad-analytics').wait(1000)
        cy.go(-1).wait(3000)
        // Funnel Analytics
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(2000)
        cy.contains('Funnel Analytics').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(3000)
        cy.url().should('include','/funnel-analytics').wait(1000)
        cy.go(-1).wait(3000)
        // A/B testing
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(2000)
        cy.contains('A/B Testing').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(3000)
        cy.url().should('include','/ab-testing').wait(1000)
        cy.go(-1).wait(3000)
        // A/B testing - Res
        // cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(2000)
        // cy.contains('A/B Testing - Res').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(3000)
        // cy.url().should('include','/reservation-ab-testing').wait(1000)
        // cy.go(-1).wait(3000)
        // Link Builder
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(2000)
        cy.contains('Link Builder').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(3000)
        cy.url().should('include','/link-builder').wait(1000)
        cy.go(-1).wait(3000)
        // Duplicate project
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(2000)
        cy.contains('Duplicate Project').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(3000)
        cy.get('.swal2-confirm').realHover().wait(1000).click().wait(3000)
        cy.get('#alert-1').should('include.text','Project successfully duplicated').wait(1000)
        cy.get('.ml-2').click({scrollBehavior:false}).wait(2000)
        // Delete project
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(2000)
        cy.contains('Delete Project').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(3000)
        cy.get('.swal2-confirm').realHover().wait(1000).click().wait(1000)
        cy.get('#alert-1').scrollIntoView().wait(2000)
        cy.get('#alert-1').should('include.text','Project successfully deleted').wait(1000)
        cy.get('.ml-2').click({scrollBehavior:false}).wait(2000)
        // Project user Access
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(500)
        cy.get(':nth-child(1) > .text-right > .relative > .absolute > .rounded-md').scrollIntoView().wait(2000)
        cy.contains('Project User Access').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(3000)
        cy.url().should('include','/user-access').wait(1000)
        cy.go(-1).wait(3000)
      }

      SortingPagination()
      {
        cy.get('thead > tr > :nth-child(1)').click({scrollBehavior:false}).wait(3000)
        cy.url().should('include','sortField=name&sortDirection=asc')
        cy.get('.sm\\:flex-1').scrollIntoView().wait(1000)
        cy.get('[aria-label="Go to page 2"]').click().wait(3000)
        cy.url().should('include','page=2&sortField=name&sortDirection=asc')
        cy.get('.sm\\:flex-1').scrollIntoView().wait(1000)
        cy.get('[aria-label="Go to page 3"]').click().wait(3000)
        cy.url().should('include','sortField=name&sortDirection=asc&page=3')
        cy.get('.sm\\:flex-1').scrollIntoView().wait(1000)
        cy.get('[aria-label="Go to page 4"]').click().wait(3000)
        cy.url().should('include','sortField=name&sortDirection=asc&page=4')
        cy.get('.sm\\:flex-1').scrollIntoView().wait(1000)
        cy.get('[aria-label="Go to page 5"]').click().wait(3000)
        cy.url().should('include','sortField=name&sortDirection=asc&page=5')
        cy.get('.sm\\:flex-1').scrollIntoView().wait(1000)
        cy.get('[aria-label="Go to page 6"]').click().wait(3000)
        cy.url().should('include','sortField=name&sortDirection=asc&page=6')
        cy.get('.sm\\:flex-1').scrollIntoView().wait(1000)
        cy.get('[aria-label="Go to page 7"]').click().wait(3000)
        cy.url().should('include','sortField=name&sortDirection=asc&page=7')
        cy.get('.sm\\:flex-1').scrollIntoView().wait(1000)
        cy.get('[aria-label="Go to page 8"]').click().wait(3000)
        cy.url().should('include','sortField=name&sortDirection=asc&page=8')
        cy.get('.sm\\:flex-1').scrollIntoView().wait(1000)
        cy.get('[aria-label="Go to page 9"]').click().wait(3000)
        cy.url().should('include','sortField=name&sortDirection=asc&page=9')
        cy.get('.ml-2').click({scrollBehavior:false}).wait(2000)
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
        cy.get('#admin > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.get('#alert-1').should('include.text','Project Successfully Updated').wait(1000)
        cy.get('.h-full > :nth-child(1) > :nth-child(2)').click().wait(2000)
        cy.get('#search').type('Testing Project',{scrollBehavior:false}).wait(2000)
        cy.get('.basis-1\\/12 > :nth-child(2) > .flex-shrink-0').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)
        cy.get('.text-right').click({scrollBehavior:false}).wait(500)
        cy.get(':nth-child(1) > .text-right > .relative > .absolute > .rounded-md').scrollIntoView().wait(2000)
        cy.contains('Status Messages').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(2000)
        cy.url().should('include','/update-messages').wait(1000)
        cy.get('.overflow-y-auto > :nth-child(1)').should('include.text','p_mcDisabled:true p_fbDisabled:true, by admin input').wait(2000)
        cy.go(-1).wait(3000)

        // Enable Facebook/Mailchimp and check status again
           cy.get('.project-row > :nth-child(1) > a').click({scrollBehavior:false}).wait(2000)
           cy.get('[data-tabs-target="#admin"]').click({scrollBehavior:false}).wait(2000)
           cy.get('.py-4 > :nth-child(2) > :nth-child(12)').scrollIntoView().wait(2000)
           cy.get(':nth-child(12) > :nth-child(2) > :nth-child(2) > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)
           cy.get(':nth-child(12) > :nth-child(2) > :nth-child(3) > .mt-2 > .toggle').click({scrollBehavior:false}).wait(2000)
           cy.get('#admin').scrollIntoView().wait(2000)
           cy.get('#admin > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
           cy.get('#alert-1').should('include.text','Project Successfully Updated').wait(1000)
           cy.get('.h-full > :nth-child(1) > :nth-child(2)').click().wait(2000)
           cy.get('#search').type('Testing Project',{scrollBehavior:false}).wait(2000)
           cy.get('.basis-1\\/12 > :nth-child(2) > .flex-shrink-0').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)
           cy.get('.text-right').click({scrollBehavior:false}).wait(500)
           cy.get(':nth-child(1) > .text-right > .relative > .absolute > .rounded-md').scrollIntoView().wait(2000)
           cy.contains('Status Messages').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(2000)
           cy.url().should('include','/update-messages').wait(1000)
           cy.get('.overflow-y-auto > :nth-child(1)').should('include.text','fbErrorCount reset, by admin input enable').wait(1000)
           cy.get('.overflow-y-auto > :nth-child(2)').should('include.text','mcErrorCount reset, by admin input enable').wait(1000)
           cy.go(-2).wait(3000)
    }

    RefreshData()
    {
        cy.get('.basis-1\\/12 > :nth-child(2) > .flex-shrink-0').realHover({scrollBehavior:false})
        .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100)
        cy.get('.text-right').click({scrollBehavior:false}).wait(500)
        cy.get(':nth-child(1) > .text-right > .relative > .absolute > .rounded-md').scrollIntoView().wait(2000)
        cy.contains('Refresh Data').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(2000)
        cy.url().should('include','/refresh').wait(1000)
        cy.get(':nth-child(3) > :nth-child(2) > .bg-blue-500').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100)
        cy.get('.overflow-y-auto').scrollIntoView().wait(8000)
        cy.get('.overflow-y-auto > :nth-child(1)').then(($el) => {
            const text = $el.text();
          // Custom OR condition
            expect(
              text.includes('Updating Facebook Data data for Testing Project') ||
              text.includes('Updating Facebook Data itteration 1...') ||
              text.includes('Updating Facebook Data itteration 2...') ||
              text.includes('Updating Facebook Data itteration 3...') ||
              text.includes('Updating Facebook Data itteration 4...') ||
              text.includes('Updating Facebook Data itteration 5...')
            ).to.be.true;
          })
    }

}
export default Dashboard
