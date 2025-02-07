
class Users{

    OpenUsers()
    {
        cy.get('.h-full > :nth-child(1) > :nth-child(2)').realHover().wait(2000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.contains('Users Management').realHover().wait(1000).click().wait(3000)
        cy.url().should('include','/users')
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('nav.side-nav .top-nav-link .nav-link.active').realHover().wait(1000)
        cy.contains('Users Management').realHover().should('have.css','font-weight','700').realMouseMove(500,500)
        cy.get('nav.side-nav .top-nav-link .nav-link.active')
        .then(($el) => {
           const after = window.getComputedStyle($el[0], 'after'); 
           expect(after.getPropertyValue('background-color')).to.eq('rgb(255, 194, 28)');
         })
        
    }
    CreateProjOwner()
    {
        cy.get('[data-role="Project Owner"]').click({scrollBehavior:false}).wait(2000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('.mx-auto > .inline-flex').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).wait(2000)
        cy.url().should('include','/users/create')
        cy.get('#name').type('Faisal Proj Owner',{scrollBehavior:false}).wait(1000)
        const randomowner = 'f.faisalathar'+'+owner'+Math.floor(Math.random() * (999 - 100 + 1))+'@gmail.com'
        cy.get('#email').type(randomowner,{scrollBehavior:false}).wait(1000)
        cy.get('#password').type('Asdf@1234',{scrollBehavior:false}).wait(1000)
        cy.get('#confirm-password').type('Asdf@1234',{scrollBehavior:false}).wait(1000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(2000)
        cy.get('.p-4').should('include.text','The role field is required')
        cy.get(':nth-child(4) > .form-checkbox').scrollIntoView().click({force:true}).wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(2000)
        cy.get('#password').type('Asdf@1234',{scrollBehavior:false}).wait(2000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('.bkg-ylb').realHover().wait(1000).click().wait(3000)
        cy.get('#alert-1').should('include.text','User created successfully')

    }
    CreateProjUser()
    {
        cy.get('[data-role="Project User"]').click({scrollBehavior:false}).wait(2000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('.mx-auto > .inline-flex').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).wait(2000)
        cy.url().should('include','/users/create')
        cy.get('#name').type('Faisal Proj User',{scrollBehavior:false}).wait(1000)
        const randomuser = 'f.faisalathar'+'+projuser'+Math.floor(Math.random() * (999 - 100 + 1))+'@gmail.com'
        cy.get('#email').type(randomuser,{scrollBehavior:false}).wait(1000)
        cy.get('#password').type('Asdf@1234',{scrollBehavior:false}).wait(1000)
        cy.get('#confirm-password').type('Asdf@1234',{scrollBehavior:false}).wait(1000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(2000)
        cy.get('.p-4').should('include.text','The role field is required')
        cy.get(':nth-child(5) > .form-checkbox').scrollIntoView().click({force:true}).wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(2000)
        cy.get('#password').type('Asdf@1234',{scrollBehavior:false}).wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().wait(3000)
        cy.get('#alert-1').should('include.text','User created successfully')
    }
    CreateGamingUser()
    {
        cy.get('[data-role="Launchboom Gaming User"]').click({scrollBehavior:false}).wait(2000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('.mx-auto > .inline-flex').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).wait(2000)
        cy.url().should('include','/users/create')
        cy.get('#name').type('Faisal Gaming User',{scrollBehavior:false}).wait(1000)
        const randomgamer = 'f.faisalathar'+'+gaminguser'+Math.floor(Math.random() * (999 - 100 + 1))+'@gmail.com'
        cy.get('#email').type(randomgamer,{scrollBehavior:false}).wait(1000)
        cy.get('#password').type('Asdf@1234',{scrollBehavior:false}).wait(1000)
        cy.get('#confirm-password').type('Asdf@1234',{scrollBehavior:false}).wait(1000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(2000)
        cy.get('.p-4').should('include.text','The role field is required')
        cy.get(':nth-child(6) > .form-checkbox').scrollIntoView().click({force:true}).wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().realMouseMove(100,100).wait(2000)
        cy.get('#password').type('Asdf@1234',{scrollBehavior:false}).wait(2000)
        cy.get('.bkg-ylb').realHover().wait(1000).click().wait(3000)
        cy.get('#alert-1').should('include.text','User created successfully')
    }
    SearchUser()
    {      // Search results and Reset results
        cy.get('[data-role="Project Owner"]').click({scrollBehavior:false}).wait(3000)
        cy.get('#search').type('Faisal',{scrollBehavior:false}).wait(2000)
        cy.get(':nth-child(3) > .flex-shrink-0').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100)
        cy.get('thead > tr > :nth-child(1)').scrollIntoView().wait(3000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('#reset').click({scrollBehavior:false,force:true}).wait(2000)
        cy.get('.sm\\:flex-1').scrollIntoView({duration:5000})
        cy.get('.sm\\:flex-1 > :nth-child(1) > .text-sm').invoke('text').then((text) => {const normalizedText = text.replace(/\s+/g, ' ').trim()
        expect(normalizedText).to.include('Showing 1 to 20')})
        cy.get('[aria-label="Go to page 2"]').click().wait(2000)
        cy.get('.sm\\:flex-1 > :nth-child(1) > .text-sm').invoke('text').then((text) => {const normalizedText = text.replace(/\s+/g, ' ').trim()
            expect(normalizedText).to.include('Showing 21 to 40')})
        cy.get('[aria-label="Go to page 3"]').click().wait(2000)
        cy.get('.sm\\:flex-1 > :nth-child(1) > .text-sm').invoke('text').then((text) => {const normalizedText = text.replace(/\s+/g, ' ').trim()
            expect(normalizedText).to.include('Showing 41 to 60')})
        cy.get('[aria-label="Go to page 4"]').click().wait(2000)
        cy.get('.sm\\:flex-1 > :nth-child(1) > .text-sm').invoke('text').then((text) => {const normalizedText = text.replace(/\s+/g, ' ').trim()
            expect(normalizedText).to.include('Showing 61 to 80')})
        cy.get('[aria-label="Go to page 5"]').click().wait(2000)
        cy.get('.sm\\:flex-1 > :nth-child(1) > .text-sm').invoke('text').then((text) => {const normalizedText = text.replace(/\s+/g, ' ').trim()
            expect(normalizedText).to.include('Showing 81 to 100')})
        cy.get('[aria-label="Go to page 6"]').click().wait(2000)
        cy.get('.sm\\:flex-1 > :nth-child(1) > .text-sm').invoke('text').then((text) => {const normalizedText = text.replace(/\s+/g, ' ').trim()
            expect(normalizedText).to.include('Showing 101 to 120')})
        cy.get('[aria-label="Go to page 7"]').click().wait(2000)
        cy.get('.sm\\:flex-1 > :nth-child(1) > .text-sm').invoke('text').then((text) => {const normalizedText = text.replace(/\s+/g, ' ').trim()
            expect(normalizedText).to.include('Showing 121 to 140')})
        cy.get('[aria-label="Go to page 8"]').click().wait(2000)
        cy.get('.sm\\:flex-1 > :nth-child(1) > .text-sm').invoke('text').then((text) => {const normalizedText = text.replace(/\s+/g, ' ').trim()
            expect(normalizedText).to.include('Showing 141 to 160')})
        cy.get('#myTab > .active').scrollIntoView({duration:4000})
        cy.get('#reset').click({scrollBehavior:false,force:true}).wait(2000)
        
    }
    EditUserName()
    {
        cy.get('[data-role="Project Owner"]').click({scrollBehavior:false}).wait(2000)
        cy.get(':nth-child(1) > .px-6 > .text-indigo-600 > .inline-block > path').
        realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).wait(3000)
        cy.url().should('match', /\/users\/\d+\/edit/)
        cy.get('#name').type('Test',{scrollBehavior:false}).wait(2000)
        cy.get('#name').click().wait(1000).invoke('val').then((updatedName)=>{
            cy.log('Updated User Name: ',updatedName)
            cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('.bkg-ylb').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).wait(500)
        cy.get('[data-role="Project Owner"]').click({scrollBehavior:false}).wait(1000)
        cy.get('#alert-1').should('include.text','User updated successfully')
        cy.contains(updatedName).should('exist').invoke('attr', 'style', 'color: red; font-size: 20px;').wait(3000)})
    }

    EditUserRole()
    {
        cy.get('[data-role="Project Owner"]').click({scrollBehavior:false}).wait(2000)
        cy.get(':nth-child(1) > .px-6 > .text-indigo-600 > .inline-block > path').
        realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)
        cy.url().should('match', /\/users\/\d+\/edit/)
        cy.get('#name').invoke('val').then((userName)=>{
            cy.log('Captured User Name: ',userName)
        cy.get(':nth-child(5) > .form-checkbox').scrollIntoView().click({force:true}).wait(2000)
        cy.get('.bkg-ylb').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).wait(500)
        cy.get('[data-role="Project User"]').click({scrollBehavior:false}).wait(1000)
        cy.get('#alert-1').should('include.text','User updated successfully')
        cy.contains(userName).should('exist').invoke('attr', 'style', 'color: red; font-size: 20px;').wait(3000)})
        
    }
    DeleteProjUser()
    {
        cy.get('[data-role="Project User"]').click({scrollBehavior:false}).wait(2000)
        cy.get(':nth-child(1) > .px-6 > #deleteForm > .text-red-700 > .inline-block > path')
        .realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).wait(2000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('.swal2-confirm').realHover().wait(2000).click().wait(5000)
        cy.get('#alert-1').should('include.text','User deleted successfully')
    
    }
}
export default Users
