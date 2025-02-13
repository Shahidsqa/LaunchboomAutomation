
class ProjUserAccess{
    
    OpenProjUserAccess()
    {
        cy.get(':nth-child(1) > .text-right').click({scrollBehavior:false}).wait(500)
        cy.get(':nth-child(1) > .text-right > .relative > .absolute > .rounded-md').scrollIntoView().wait(2000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.contains('Project User Access').realHover({scrollBehavior:false}).wait(2000).should('have.css','background-color','rgb(244, 245, 247)')
        .click({scrollBehavior:false}).wait(3000)
        cy.url().should('include','/user-access')
        cy.get('body').should('have.css', 'font').and('include','Poppins')
    }
    AddUser()
    {
        // Add User
        cy.get('.m-4').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).wait(3000)
        cy.url().should('include','/user-access/create')
        cy.get('.select2-selection').click().wait(2000)
        cy.get('.select2-search__field').type('Proj-User{enter}').wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(2000)
        cy.get('.field_radio > :nth-child(1) > input').click().wait(2000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('.bkg-ylb').realHover().wait(1000).click().wait(3000)
        cy.get('#alert-1').should('include.text','User successfully added')
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        // Add one more user
        cy.get('.m-4').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).wait(3000)
        cy.url().should('include','/user-access/create')
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(2000)
        cy.get('.field_radio > :nth-child(2) > input').click().wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().wait(3000)
        cy.get('#alert-1').should('include.text','User successfully added')
        // Add one more user
        cy.get('.m-4').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).wait(3000)
        cy.url().should('include','/user-access/create')
        cy.get('.select2-selection').click().wait(2000)
        cy.get('.select2-search__field').type('Mahsam{enter}').wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(2000)
        cy.get('.field_radio > :nth-child(1) > input').click().wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().wait(3000)
        cy.get('#alert-1').should('include.text','User successfully added')
        // Try to add Duplicate User
        cy.get('.m-4').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).wait(3000)
        cy.url().should('include','/user-access/create')
        cy.get('.select2-selection').click().wait(2000)
        cy.get('.select2-search__field').type('Proj-User{enter}').wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(2000)
        cy.get('.field_radio > :nth-child(2) > input').click().wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(3000)
        cy.get('.text-red-500').should('include.text','User has already been given access to this project')
        cy.go(-2).wait(3000)
    }
    SearchUser()
    {
        // Search and Reset results
        cy.get('#search').type('Mahsam',{scrollBehavior:false}).wait(2000)
        cy.get(':nth-child(3) > .flex-shrink-0').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.url().should('include','/user-access?search=Mahsam')
        cy.get('.ml-2').click({scrollBehavior:false}).wait(3000)
        cy.url().should('include','/user-access')
    }
    EditUser()
    {
        cy.get(':nth-child(1) > .text-right').click().wait(2000)
        cy.contains('Edit User').realHover().wait(2000).click().wait(3000)
        cy.url().should('match', /\/user-access\/\d+\/edit/)
        cy.get('.field_radio > :nth-child(2) > input').click().wait(2000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('.bkg-ylb').realHover().wait(2000).click().wait(3000)
        cy.get('#alert-1').should('include.text','User Successfully Updated')

    }
    DeleteUser()
    {
        cy.get(':nth-child(2) > .text-right').click().wait(3000)
        cy.get(':nth-child(2) > .text-right > .relative > .absolute > .rounded-md > [title="delete this project"]')
        .realHover({force:true}).wait(2000).click({force:true}).wait(2000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('.swal2-confirm').realHover().wait(2000).click().wait(5000)
        cy.get('#alert-1').should('include.text','User successfully deleted')

    }
}
export default ProjUserAccess