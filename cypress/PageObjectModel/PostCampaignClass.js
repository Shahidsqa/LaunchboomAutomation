
class PostCampaign{
      
        OpenPostCampaign()
          {
            cy.get('.divide-y > :nth-child(1) > :nth-child(1) > a').click({scrollBehavior:false,force:true}).wait(2000)
            cy.get('body').should('have.css', 'font').and('include','Poppins')
            cy.get('.projects-name').realHover({scrollBehavior:false}).wait(2000)
            cy.contains('Overview').scrollIntoView().wait(1000)
            cy.get('body').should('have.css', 'font').and('include','Poppins')
            cy.contains('Post Campaign').realHover({scrollBehavior:false}).wait(2000).should('have.css','background-color','rgba(255, 194, 28, 0.2)')
            .click({force:true}).wait(2000)
            cy.url().should('include','/campaign-ad-analysis')
            cy.get('body').should('have.css', 'font').and('include','Poppins')
            cy.get('.projects-name').realHover({scrollBehavior:false}).wait(1000)
            cy.contains('Analytics').should('have.css','font-weight','700').realMouseMove(500,500)
            cy.get('nav.side-nav .top-nav-link .nav-link.active')
           .then(($el) => {
             const after = window.getComputedStyle($el[0], 'after'); 
             expect(after.getPropertyValue('background-color')).to.eq('rgb(255, 194, 28)')}).wait(1000)
          }

          EnterProjectLink()
          {
            cy.get('.igg-btn').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
            const link = "https://www.indiegogo.com/projects/reliq-the-world-s-first-hybrid-control-surface--2#/"          
            cy.get('#project_ks_url').click()
            cy.intercept('POST','https://release.launchboom.com/livewire/message/campaign-ad-analysis.index').as('campPage')    
            cy.get('#project_ks_url').invoke('val', link).trigger('input').type('{ctrl}')
             cy.wait('@campPage',{timeout:60000}).then((interception) => {
               const Name = interception.response.body.effects?.dispatches[0]?.data?.project_info?.name
               expect(Name).equals("Reliq: The World's First Hybrid Control Surface");
             })
             cy.get('body').should('have.css', 'font').and('include','Poppins')
            cy.get('#confirmation__info > p').scrollIntoView().wait(2000)
            cy.get('#confirmation__wrap > .confirmation__buttons-wrap > #conf-button__yes').click({force:true}).wait(1000)
              
         }

         UploadFile()
         {
            cy.get(':nth-child(2) > .block > li').scrollIntoView().wait(2000)
            cy.get('.file-input').invoke('css','display','block')
            const path = require('path');
            const filePath = path.join('cypress', 'fixtures', 'Indiegogo.csv')
            cy.get('.file-input').selectFile(filePath).wait(4000)
            cy.get('#file-name-wrap > p').should('include.text','Indiegogo.csv')
            cy.get('#file-name-wrap > p').scrollIntoView().wait(2000)
            cy.get('#file-upload-button').realHover({force:true}).wait(1000).click({force:true}).realMouseMove(100,100).wait(5000)
            cy.get('.font-extrabold').should('include.text','Your results will be ready soon...')
            cy.get('body').should('have.css', 'font').and('include','Poppins')
         }

           
}
export default PostCampaign
