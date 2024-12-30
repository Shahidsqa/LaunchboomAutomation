
class PostCampaign{
      
        OpenPostCampaign()
          {
            cy.get('.divide-y > :nth-child(1) > :nth-child(1) > a').click({scrollBehavior:false}).wait(2000)
            cy.get('.projects-name').realHover({scrollBehavior:false}).wait(2000)
            cy.contains('Overview').scrollIntoView().wait(1000)
            cy.contains('Post Campaign').realHover({scrollBehavior:false}).wait(2000).click({force:true}).wait(3000)
          }

          EnterProjectLink()
          {
            cy.get('.igg-btn').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
            const link = "https://www.indiegogo.com/projects/reliq-the-world-s-first-hybrid-control-surface--2#/"          
            cy.get('#project_ks_url').click()     
            cy.get('#project_ks_url').invoke('val', link).trigger('input').type('{ctrl}').wait(10000)
            cy.get('#confirmation__info > p').scrollIntoView().wait(2000)
            cy.get('#confirmation__wrap > .confirmation__buttons-wrap > #conf-button__yes').click({force:true).wait(1000)
               
         }

         UploadFile()
         {
            cy.get(':nth-child(2) > .block > li').scrollIntoView().wait(2000)
            cy.get('.file-input').invoke('css','display','block')
            const path = require('path');
            const filePath = path.join('cypress', 'fixtures', 'Indiegogo.csv')
            cy.get('.file-input').selectFile(filePath).wait(4000)
            cy.get('#file-name-wrap > p').scrollIntoView().wait(2000)
            cy.get('#file-upload-button').realHover({force:true}).wait(1000).click({force:true}).realMouseMove(100,100).wait(5000)
         }

           
}
export default PostCampaign
