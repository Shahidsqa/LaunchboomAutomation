class Permissions {
    Roles()
    {
        cy.visit('https://release.launchboom.com/admin/roles')
        cy.wait(2000)
    }
    BasicAccess()
    {
        cy.get('#myTab > :nth-child(2)').click({scrollBehavior:false}).wait(2000)
        cy.get("[href='https://release.launchboom.com/admin/roles/6/edit']").realHover({scrollBehavior:false})
        .wait(1000).click({scrollBehavior:false}).wait(2000)
        cy.get('#name').should('be.visible').and('have.value','Basic Access')
        cy.get('.bkg-ylb').scrollIntoView().wait(2000)
        // Making Analytics permissions Off
        cy.get(':nth-child(6) > label > .form-checkbox')
        .then(($checkbox) => {
            // Get the background color of the checkbox
             const color = $checkbox.css('background-color')
             if(color === 'rgb(63, 131, 248)')
             {
                cy.get(':nth-child(6) > label > .form-checkbox').click({scrollBehavior:false}).wait(2000)
             }
             else 
             {
              cy.log('Permission is OFF')
             }
           })

           cy.get(':nth-child(7) > label > .form-checkbox')
           .then(($checkbox) => {
            // Get the background color of the checkbox
             const color = $checkbox.css('background-color')
             if(color === 'rgb(63, 131, 248)')
             {
                cy.get(':nth-child(7) > label > .form-checkbox').click({scrollBehavior:false}).wait(2000)
             }
             else 
             {
              cy.log('Permission is OFF')
             }
           })
           // Making Ai-Generator ON
           cy.get(':nth-child(9) > label > .form-checkbox')
           .then(($checkbox) => {
               // Get the background color of the checkbox
                const color = $checkbox.css('background-color')
                if(color === 'rgb(63, 131, 248)')
                {
                  cy.log('Permission is ON') 
                }
                else 
                {
                 cy.get(':nth-child(9) > label > .form-checkbox').click({scrollBehavior:false}).wait(2000)
                }
              })
           cy.get('.bkg-ylb').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
           cy.get('#alert-1').should('include.text','Role updated successfully')
    }
    
    GamingUserAccess()
    {
        cy.get('#myTab > :nth-child(3)').click({scrollBehavior:false}).wait(2000)
        cy.get("[href='https://release.launchboom.com/admin/roles/8/edit']").realHover({scrollBehavior:false})
        .wait(1000).click({scrollBehavior:false}).wait(2000)
        cy.get('#name').should('be.visible').and('have.value','Launchboom Gaming User')
    }

    SettingPermissionsOff()
    {
        cy.get('.bkg-ylb').scrollIntoView().wait(2000)
        // Making Analytics ON
        cy.get(':nth-child(20) > label > .form-checkbox')
        .then(($checkbox) => {
            // Get the background color of the checkbox
             const color = $checkbox.css('background-color')
             if(color === 'rgb(63, 131, 248)')
             {
               cy.log('Permission is ON') 
             }
             else 
             {
              cy.get(':nth-child(20) > label > .form-checkbox').click({scrollBehavior:false}).wait(2000)
             }
           })
           cy.get(':nth-child(21) > label > .form-checkbox')
        .then(($checkbox) => {
            // Get the background color of the checkbox
             const color = $checkbox.css('background-color')
             if(color === 'rgb(63, 131, 248)')
             {
               cy.log('Permission is ON') 
             }
             else 
             {
              cy.get(':nth-child(21) > label > .form-checkbox').click({scrollBehavior:false}).wait(2000)
             }
           })
           // Making Ai-Generator ON
           cy.get(':nth-child(30) > label > .form-checkbox')
        .then(($checkbox) => {
            // Get the background color of the checkbox
             const color = $checkbox.css('background-color')
             if(color === 'rgb(63, 131, 248)')
             {
               cy.log('Permission is ON') 
             }
             else 
             {
              cy.get(':nth-child(30) > label > .form-checkbox').click({scrollBehavior:false}).wait(2000)
             }
           })
           // Making Link Builder and Post Campaign Off
        cy.get(':nth-child(31) > label > .form-checkbox')
        .then(($checkbox) => {
            // Get the background color of the checkbox
             const color = $checkbox.css('background-color')
             if(color === 'rgb(63, 131, 248)')
             {
              cy.get(':nth-child(31) > label > .form-checkbox').click({scrollBehavior:false}).wait(2000)
             }
             else 
             {
              cy.log('Permission is OFF')
             }
           })

           cy.get(':nth-child(32) > label > .form-checkbox')
           .then(($checkbox) => {
            // Get the background color of the checkbox
             const color = $checkbox.css('background-color')
             if(color === 'rgb(63, 131, 248)')
             {
               cy.get(':nth-child(32) > label > .form-checkbox').click({scrollBehavior:false}).wait(2000)
             }
             else 
             {
              cy.log('Permission is OFF')
             }
           })

           cy.get('.bkg-ylb').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
           cy.get('#alert-1').should('include.text','Role updated successfully')
       }
       Logout()
       {
        cy.get('.h-full > :nth-child(1) > :nth-child(2)').realHover().wait(2000)
        cy.contains('Logout').realHover().wait(1000).click().realMouseMove(500,500).wait(2000)
       }
       GameUserLogin()
       {
        cy.get('#email').type('f.faisalathar+gameuser@gmail.com').wait(1000)
        cy.get('#password').type('Asdf@1234').wait(1000)
        cy.get('.button').realHover().click().wait(2000)
       }
       CheckingPermissionsOff()
       {
        cy.get(':nth-child(1) > .projects-name').realHover({scrollBehavior:false}).wait(1000)
        cy.contains('Analytics').scrollIntoView().wait(1000)
        cy.contains('Link Builder').should('not.exist')
        cy.contains('Post Campaign').should('not.exist').wait(1000)
        cy.get(':nth-child(2) > .projects-name').click().wait(1000)
        cy.contains('Overview').scrollIntoView().wait(2000)
        cy.contains('Link Builder').should('not.exist')
        cy.contains('Post Campaign').should('not.exist').wait(1000)
        cy.contains('Content').scrollIntoView().wait(1000)
        cy.contains('Content Assistant').realHover({scrollBehavior:false}).wait(2000).should('have.css','background-color','rgba(255, 194, 28, 0.2)')
        .click({scrollBehavior:false,force:true}).wait(2000)
        cy.url().should('include','/2576/content')
        cy.visit('https://release.launchboom.com/admin/projects/1766/content').wait(2000)
        cy.url().should('include','/1766/content')
        cy.visit('https://release.launchboom.com/admin/projects/1773/content').wait(2000)
        cy.url().should('include','/1773/content')
        cy.visit('https://release.launchboom.com/admin/analytics-dashboard/1773').wait(3000)
        cy.url().should('include','/analytics-dashboard/1773')
        cy.visit('https://release.launchboom.com/admin/analytics-dashboard/2576',{failOnStatusCode: false}).wait(3000)
        cy.get('.mb-4').should('include.text','Forbidden')
        cy.visit('https://release.launchboom.com/admin/projects/1510/content',{failOnStatusCode: false}).wait(3000)
        cy.get('.mb-4').should('include.text','Forbidden')
        cy.get('.button').realHover({scrollBehavior:false}).click({scrollBehavior:false,force:true}).realMouseMove(100,100).wait(2000)

     }

     SettingPermissionsOn()
    {
        cy.get('.bkg-ylb').scrollIntoView().wait(2000)
       // Making Link Builder and Post Campaign ON
        cy.get(':nth-child(31) > label > .form-checkbox')
        .then(($checkbox) => {
            // Get the background color of the checkbox
             const color = $checkbox.css('background-color')
             if(color === 'rgb(63, 131, 248)')
             {
               cy.log('Permission is ON') 
             }
             else 
             {
              cy.get(':nth-child(31) > label > .form-checkbox').click({scrollBehavior:false}).wait(2000)
             }
           })

           cy.get(':nth-child(32) > label > .form-checkbox')
           .then(($checkbox) => {
            // Get the background color of the checkbox
             const color = $checkbox.css('background-color')
             if(color === 'rgb(63, 131, 248)')
             {
               cy.log('Permission is ON')  
             }
             else 
             {
               cy.get(':nth-child(32) > label > .form-checkbox').click({scrollBehavior:false}).wait(2000)
             }
           })

           cy.get('.bkg-ylb').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
           cy.get('#alert-1').should('include.text','Role updated successfully')
       }

       CheckingPermissionsOn()
       {
        cy.get(':nth-child(1) > .projects-name').realHover({scrollBehavior:false}).wait(1000)
        cy.contains('Analytics').scrollIntoView().wait(1000)
        cy.contains('Link Builder').should('not.be.visible')
        cy.contains('Post Campaign').should('not.be.visible').wait(1000)
        cy.get(':nth-child(2) > .projects-name').click().wait(1000)
        cy.contains('Overview').scrollIntoView().wait(2000)
        cy.contains('Link Builder').should('be.visible')
        cy.contains('Post Campaign').should('be.visible').wait(1000)
        cy.contains('Link Builder').realHover({scrollBehavior:false}).wait(2000).should('have.css','background-color','rgba(255, 194, 28, 0.2)')
        .click({force:true}).wait(2000)
        cy.get('.bold').should('include.text','Link Builder')
        cy.get(':nth-child(1) > .projects-name').click().wait(1000)
        cy.get(':nth-child(2) > .projects-name').realHover().wait(1000).click().wait(1000)
        cy.contains('Overview').scrollIntoView().wait(1000)
        cy.contains('Post Campaign').realHover({scrollBehavior:false}).wait(2000).should('have.css','background-color','rgba(255, 194, 28, 0.2)')
        .click({force:true}).wait(2000)
        cy.get('.bold').should('include.text','Post Campaign Analysis')
        cy.visit('https://release.launchboom.com/admin/projects/1766/campaign-ad-analysis').wait(2000)
        cy.url().should('include','/1766/campaign-ad-analysis')
        cy.visit('https://release.launchboom.com/admin/projects/1510/campaign-ad-analysis',{failOnStatusCode: false}).wait(3000)
        cy.get('.mb-4').should('include.text','Forbidden')
        cy.visit('https://release.launchboom.com/admin/projects/2576/campaign-ad-analysis',{failOnStatusCode: false}).wait(3000)
        cy.get('.mb-4').should('include.text','Forbidden')
        
     }

}
export default Permissions