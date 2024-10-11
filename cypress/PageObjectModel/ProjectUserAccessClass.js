
class ProjUserAccess{
    
    OpenProjUserAccess()
    {
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(500)
        cy.get(':nth-child(1) > .text-right > .relative > .absolute > .rounded-md').scrollIntoView().wait(2000)
        cy.contains('Project User Access').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false})
        cy.wait(3000)
    }
    AddUser()
    {
        // Add User
        cy.get('.m-4').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false})
        cy.wait(3000)
        cy.get('.select2-selection').click().wait(2000)
        cy.get('.select2-search__field').type('Proj-User{enter}')
        cy.wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(3000)
        cy.get('.field_radio > :nth-child(1) > input').click().wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().wait(3000)
        // Add one more user
        cy.get('.m-4').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false})
        cy.wait(3000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(3000)
        cy.get('.field_radio > :nth-child(2) > input').click().wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().wait(3000)
        // Add one more user
        cy.get('.m-4').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false})
        cy.wait(3000)
        cy.get('.select2-selection').click().wait(2000)
        cy.get('.select2-search__field').type('Mahsam{enter}')
        cy.wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(3000)
        cy.get('.field_radio > :nth-child(1) > input').click().wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().wait(3000)
        // Try to add Duplicate User
        cy.get('.m-4').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false})
        cy.wait(3000)
        cy.get('.select2-selection').click().wait(2000)
        cy.get('.select2-search__field').type('Proj-User{enter}')
        cy.wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(3000)
        cy.get('.field_radio > :nth-child(2) > input').click().wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(3000)
        cy.go(-2).wait(3000)

    }
    SearchUser()
    {
        // Search and Reset results
        cy.get('#search').type('Mahsam',{scrollBehavior:false})
        cy.wait(2000)
        cy.get(':nth-child(3) > .flex-shrink-0').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)
        cy.get('.ml-2').click({scrollBehavior:false}).wait(3000)
    }
    EditUser()
    {
        cy.get(':nth-child(1) > .text-right').click().wait(3000)
        cy.contains('Edit User').realHover().wait(2000).click().wait(3000)
        cy.get('.field_radio > :nth-child(2) > input').click().wait(2000)
        cy.get('.bkg-ylb').realHover().wait(2000).click().wait(3000)

    }
    DeleteUser()
    {
        cy.get(':nth-child(2) > .text-right').click().wait(3000)
        cy.get(':nth-child(2) > .text-right > .relative > .absolute > .rounded-md > [title="delete this project"]')
        .realHover({force:true}).wait(2000).click({force:true}).wait(3000)
        cy.get('.swal2-confirm').realHover().wait(2000).click()
    }
}
export default ProjUserAccess