
class Users{

    OpenUsers()
    {
        cy.get('.h-full > :nth-child(1) > :nth-child(2)').realHover().wait(2000)
        cy.contains('Users Management').realHover().wait(1000).click().wait(3000)

    }
    CreateProjOwner()
    {
        cy.get('[data-role="Project Owner"]').click({scrollBehavior:false}).wait(3000)
        cy.get('.mx-auto > .inline-flex').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).wait(2000)
        cy.get('#name').type('Faisal Proj Owner',{scrollBehavior:false}).wait(1000)
        const randomowner = 'f.faisalathar'+'+owner'+Math.floor(Math.random() * (999 - 100 + 1))+'@gmail.com'
        cy.get('#email').type(randomowner,{scrollBehavior:false}).wait(1000)
        cy.get('#password').type('Asdf@1234',{scrollBehavior:false}).wait(1000)
        cy.get('#confirm-password').type('Asdf@1234',{scrollBehavior:false}).wait(1000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(3000)
        cy.get(':nth-child(4) > .form-checkbox').scrollIntoView().click({force:true}).wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(2000)
        cy.get('#password').type('Asdf@1234',{scrollBehavior:false}).wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().wait(3000)

    }
    CreateProjUser()
    {
        cy.get('[data-role="Project User"]').click({scrollBehavior:false}).wait(3000)
        cy.get('.mx-auto > .inline-flex').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).wait(2000)
        cy.get('#name').type('Faisal Proj User',{scrollBehavior:false}).wait(1000)
        const randomuser = 'f.faisalathar'+'+projuser'+Math.floor(Math.random() * (999 - 100 + 1))+'@gmail.com'
        cy.get('#email').type(randomuser,{scrollBehavior:false}).wait(1000)
        cy.get('#password').type('Asdf@1234',{scrollBehavior:false}).wait(1000)
        cy.get('#confirm-password').type('Asdf@1234',{scrollBehavior:false}).wait(1000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(3000)
        cy.get(':nth-child(5) > .form-checkbox').scrollIntoView().click({force:true}).wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(2000)
        cy.get('#password').type('Asdf@1234',{scrollBehavior:false}).wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().wait(3000)
    }
    CreateGamingUser()
    {
        cy.get('[data-role="Launchboom Gaming User"]').click({scrollBehavior:false}).wait(3000)
        cy.get('.mx-auto > .inline-flex').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).wait(2000)
        cy.get('#name').type('Faisal Gaming User',{scrollBehavior:false}).wait(1000)
        const randomgamer = 'f.faisalathar'+'+gaminguser'+Math.floor(Math.random() * (999 - 100 + 1))+'@gmail.com'
        cy.get('#email').type(randomgamer,{scrollBehavior:false}).wait(1000)
        cy.get('#password').type('Asdf@1234',{scrollBehavior:false}).wait(1000)
        cy.get('#confirm-password').type('Asdf@1234',{scrollBehavior:false}).wait(1000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(3000)
        cy.get(':nth-child(6) > .form-checkbox').scrollIntoView().click({force:true}).wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(2000)
        cy.get('#password').type('Asdf@1234',{scrollBehavior:false}).wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().wait(3000)
    }
    SearchUser()
    {      // Search results and Reset results
        cy.get('[data-role="Project Owner"]').click({scrollBehavior:false}).wait(3000)
        cy.get('#search').type('Faisal',{scrollBehavior:false}).wait(2000)
        cy.get(':nth-child(3) > .flex-shrink-0').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100)
        cy.get('thead > tr > :nth-child(1)').scrollIntoView().wait(3000)
        cy.get('#reset').click({scrollBehavior:false,force:true}).wait(3000)
        cy.get('.sm\\:flex-1').scrollIntoView({duration:5000})
        cy.get('[aria-label="Go to page 2"]').click().wait(2000)
        cy.get('[aria-label="Go to page 3"]').click().wait(2000)
        cy.get('[aria-label="Go to page 4"]').click().wait(2000)
        cy.get('[aria-label="Go to page 5"]').click().wait(2000)
        cy.get('[aria-label="Go to page 6"]').click().wait(2000)
        cy.get('[aria-label="Go to page 7"]').click().wait(2000)
        cy.get('[aria-label="Go to page 8"]').click().wait(2000)
        cy.get('#myTab > .active').scrollIntoView({duration:4000})
        cy.get('#reset').click({scrollBehavior:false,force:true}).wait(3000)
        
    }
    EditUser()
    {
        cy.get('[data-role="Project Owner"]').click({scrollBehavior:false}).wait(3000)
        cy.get(':nth-child(1) > .px-6 > .text-indigo-600 > .inline-block > path').
        realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).wait(3000)
        cy.get('#name').type('Test',{scrollBehavior:false}).wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().wait(500)
        cy.get('[data-role="Project Owner"]').click({scrollBehavior:false}).wait(3000)
        
    }
    DeleteProjUser()
    {
        cy.get('[data-role="Project User"]').click({scrollBehavior:false}).wait(3000)
        cy.get(':nth-child(1) > .px-6 > #deleteForm > .text-red-700 > .inline-block > path')
        .realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).wait(2000)
        cy.get('.swal2-confirm').realHover().wait(2000).click().wait(5000)
    
    }
}
export default Users
