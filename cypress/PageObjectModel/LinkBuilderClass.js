
class LinkBuilder{
    OpenLinkBuilder()
    { 
        cy.get('#search').type('Testing Project',{scrollBehavior:false}).wait(2000)
            cy.get('.basis-1\\/12 > :nth-child(2) > .flex-shrink-0').realHover({scrollBehavior:false})
            .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
            cy.get('.project-row > :nth-child(1) > a').click({scrollBehavior:false}).wait(2000)
            cy.get('.projects-name').realHover({scrollBehavior:false}).wait(2000)
            cy.contains('Overview').scrollIntoView().wait(1000)
            cy.get('body').should('have.css', 'font').and('include','Poppins')
            cy.contains('Link Builder').realHover({scrollBehavior:false}).wait(2000).should('have.css','background-color','rgba(255, 194, 28, 0.2)')
            .click({force:true}).wait(3000)
            cy.get('body').should('have.css', 'font').and('include','Poppins')
            cy.get('.projects-name').realHover({scrollBehavior:false}).wait(1000)
            cy.contains('Analytics').should('have.css','font-weight','700').realMouseMove(500,500)
            cy.get('nav.side-nav .top-nav-link .nav-link.active')
           .then(($el) => {
             const after = window.getComputedStyle($el[0], 'after'); 
             expect(after.getPropertyValue('background-color')).to.eq('rgb(255, 194, 28)')}).wait(1000)
    }
    CreateLink()
    {
        // Create link without link name
        cy.get('.bkg-ylb').realHover({scrollBehavior:false}).click({scrollBehavior:false}).realMouseMove(100,100)
        cy.get('.bold').scrollIntoView().wait(3000)
        // Create Link with wrong format
        cy.get('#unique_identifier').type('abLink@123',{scrollBehavior:false}).wait(2000)
        cy.get('#category_id').then($select => {
            const options = $select.find('option')
            const randomIndex = Math.floor(Math.random() * options.length)
            const randomValue = options[randomIndex].value;
            cy.get('#category_id').select(randomValue,{scrollBehavior:false,force:true})
          })
          cy.wait(2000)
        cy.get('#redirect_type').then($select => {
            const options = $select.find('option')
            const randomIndex = Math.floor(Math.random() * options.length)
            const randomValue = options[randomIndex].value;
            cy.get('#redirect_type').select(randomValue,{scrollBehavior:false,force:true})
          })
          cy.wait(2000)
        cy.get('.bkg-ylb').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100)
        cy.get('.bold').scrollIntoView().wait(3000)

        // Create link with valid format but duplicate link
        cy.get('#unique_identifier').clear({scrollBehavior:false}).wait(1000).type('abLink123',{scrollBehavior:false}).wait(2000)
        cy.get('.bkg-ylb').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
        cy.get('.p-4').should('include.text','The Link Name has already been taken.').wait(1000)

        // Create link with no duplication
        const random = 'CustomLink'+Cypress._.random(1,9999).toString()
        cy.get('#unique_identifier').clear({scrollBehavior:false}).wait(1000).type(random,{scrollBehavior:false}).wait(2000)        
        cy.get('#category_id').then($select => {
            const options = $select.find('option')
            const randomIndex = Math.floor(Math.random() * options.length)
            const randomValue = options[randomIndex].value;
            cy.get('#category_id').select(randomValue,{scrollBehavior:false,force:true})
          })
          cy.wait(2000)
        cy.get('#redirect_type').then($select => {
            const options = $select.find('option')
            const randomIndex = Math.floor(Math.random() * options.length)
            const randomValue = options[randomIndex].value;
            cy.get('#redirect_type').select(randomValue,{scrollBehavior:false,force:true})
          })
          cy.wait(2000)
          cy.get('#unique_identifier').invoke('val').then((custmLink)=>{
            cy.log('Captured Link: ',custmLink)

               cy.get('.bkg-ylb').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(5000)
               cy.contains(custmLink).should('exist')
               cy.get('.bg-white > :last-child').scrollIntoView()
               cy.contains(custmLink).invoke('attr', 'style', 'color: red; font-size: 20px;').wait(3000)
            })
            cy.get('.bg-white > :last-child').contains('Copy Link').realHover({scrollBehavior:false}).wait(2000).click({scrollBehavior:false}).realMouseMove(200,200).wait(2000)
            cy.get('.bg-white > :last-child').should('include.text','Copied!')


    }

    CheckDatePicker()
    {
       cy.get('#reportrange').scrollIntoView().wait(3000).click().wait(2000)
       cy.get('[data-range-key="Last 2 Weeks"]').realHover().wait(1000).click().realMouseMove(300,300).wait(7000)
       cy.get('#reportrange').click().wait(2000)
       cy.get('[data-range-key="Last Month"]').realHover().wait(2000).click().realMouseMove(300,300).wait(7000)
       cy.get('#reportrange').click().wait(2000)
       cy.get('.prev').realHover().wait(1000).click().realMouseMove(100,100).wait(2000)
       cy.get('.left').contains('19').realHover().wait(1000).click().realMouseMove(500,500).wait(2000)
       cy.get('.right').contains('19').realHover().wait(1000).click().realMouseMove(500,500).wait(2000)
       cy.get('.applyBtn').click().wait(9000)
    }

    
    
}
export default LinkBuilder
