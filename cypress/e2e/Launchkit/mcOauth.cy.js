///<reference types = "cypress"/>
Cypress.on("uncaught:exception",()=>false)
it("Oauth",function(){
cy.visit("https://release.launchboom.com/admin/app/login")
cy.viewport(1200,800)
cy.get('#email').type('syed@launchboom.com')
cy.wait(1000)
cy.get('#password').type('12345678')
cy.wait(1000)
cy.get('.button').click()
cy.wait(2000)
cy.get('.bkg-ylb').click()
const random = 'Proj'+Math.random().toString().substring(5,1)
cy.get('#name').type(random)
cy.wait(1000)
cy.get('#overview > .py-4 > .mb-8 > :nth-child(2) > .bkg-ylb').click()
cy.wait(1000)
cy.get('.divide-y > :nth-child(1) > :nth-child(1) > a').click()
cy.wait(1000)
cy.get('[data-tabs-target="#email"]').click()
cy.wait(1000)
cy.get('.flex > [style="align-self:flex-end;"] > .mc-btn-wrap > .bg-white').click()
cy.wait(1000)
cy.get('#username').type('Shahidsq1')
})