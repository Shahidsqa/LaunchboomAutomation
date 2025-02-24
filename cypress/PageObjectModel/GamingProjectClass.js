class Gaming {

    CreateGameUser()
    {
        // Creating Gaming User
        cy.get('[data-role="Launchboom Gaming User"]').click({scrollBehavior:false}).wait(2000)
        cy.get('body').should('have.css', 'font').and('include','Poppins')
        cy.get('.mx-auto > .inline-flex').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).wait(2000)
        cy.url().should('include','/users/create')
        cy.get('#name').type('Faisal Gaming User',{scrollBehavior:false}).wait(1000)
        const randomgamer = 'f.faisalathar'+'+gaminguser'+Cypress._.random(1,9999).toString()+'@gmail.com'
        cy.get('#email').type(randomgamer,{scrollBehavior:false}).wait(1000)
        cy.get('#email').invoke('val').then((user)=>{const gamer = user
        cy.get('#password').type('Asdf@1234',{scrollBehavior:false}).wait(1000)
        cy.get('#confirm-password').type('Asdf@1234',{scrollBehavior:false}).wait(1000)
        cy.get(':nth-child(6) > .form-checkbox').scrollIntoView().click({force:true}).wait(1000)
        cy.get('.bkg-ylb').realHover().click().realMouseMove(100,100).wait(2000)
        cy.get('#alert-1').should('include.text','User created successfully')
        // Logout
        cy.get('.h-full > :nth-child(1) > :nth-child(2)').realHover().wait(2000)
        cy.contains('Logout').realHover().wait(1000).click().realMouseMove(500,500).wait(2000)
        // Login Gaming User
        cy.get('#email').type(gamer).wait(1000)
        cy.get('#password').type('Asdf@1234').wait(1000)
        cy.get('.button').realHover().click().realMouseMove(100,100).wait(2000)
        cy.url().should('include','/set-user-password')
        // Setting password
        cy.get('#new_password').type('Asdf@1234').wait(1000)
        cy.get('#confirm_password').type('Asdf@1234').wait(1000)
        cy.get(':nth-child(3) > :nth-child(1) > input').click().wait(1000)
        cy.get(':nth-child(3) > :nth-child(2) > input').click().wait(1000)
        cy.get('.button').realHover().click().realMouseMove(100,100)
        // Login after setting password
        cy.get('#email').type(gamer).wait(1000)
        cy.get('#password').type('Asdf@1234').wait(1000)
        cy.get('.button').realHover().click().realMouseMove(100,100).wait(3000)
        cy.url().should('include','/get-started')
        })
    }
    CreateGameProject()
    {
        const random = 'Gaming Project'+Cypress._.random(1,9999).toString()
        cy.get('.button').click().wait(1000)
        cy.get('#name').type(random,{scrollBehavior:false}).wait(2000)
        cy.get('.button').click().wait(2000)
        cy.get('#alert-1').should('include.text','Project successfully created.')
        cy.get('.welcome-title > .mb-0').should('include.text',random)

    }

    

}
export default Gaming