// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)
it('Data Driven Login Test',function(){
    cy.viewport(1200,600)
    cy.visit(Cypress.env('LaunchkitAppUrl')).wait(2000)
    cy.fixture('launchboom').then((data)=>{
        data.forEach((userdata)=>{
        cy.get('#email').clear().type(userdata.email).wait(1000)
        cy.get('#password').clear().type(userdata.password).wait(1000)
        cy.get('.button').realHover().click().realMouseMove(100,100).wait(2000)
        if(userdata.email=='syed@launchboom.com' && userdata.password=='12345678')
        {
          cy.url().should('eq','https://release.launchboom.com/admin/projects')
        }
        else
        {
          cy.get('li').should('include.text','These credentials do not match our records.')
        }
        })
    })
})