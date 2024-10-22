
class LinkBuilder{
    OpenLinkBuilder()
    {
        cy.get('#search').type('Testing Project',{scrollBehavior:false}).wait(2000)
            cy.get('.basis-1\\/12 > :nth-child(2) > .flex-shrink-0').realHover({scrollBehavior:false})
            .wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(2000)
            cy.get('.project-row > :nth-child(1) > a').click({scrollBehavior:false}).wait(2000)
            cy.get('.projects-name').realHover({scrollBehavior:false}).wait(2000)
            cy.contains('Link Builder').realHover().wait(2000).click({force:true}).wait(3000)
    }
    CreateLink()
    {
        // Create link without link name
        cy.get('.bkg-ylb').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100)
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
        cy.get('.bkg-ylb').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(3000)

        // Create link with no duplication
        const random = 'CustomLink'+Math.floor(Math.random() * (999 - 100 + 1))
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
        cy.get('.bkg-ylb').realHover({scrollBehavior:false}).wait(1000).click({scrollBehavior:false}).realMouseMove(100,100).wait(5000)

    }

    CheckDatePicker()
    {
       cy.get('#reportrange').scrollIntoView().wait(5000).click().wait(3000)
       cy.get('[data-range-key="Last 2 Weeks"]').realHover().wait(2000).click().realMouseMove(300,300).wait(5000)
       cy.get('#reportrange').click().wait(3000)
       cy.get('[data-range-key="Last Month"]').realHover().wait(2000).click().realMouseMove(300,300).wait(5000)
       cy.get('#reportrange').click().wait(3000)
       cy.get('.prev').realHover().wait(2000).click().realMouseMove(100,100).wait(3000)
       cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(3) > [data-title="r2c4"]')
       .realHover().wait(2000).click().realMouseMove(500,500).wait(3000)
       cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(6) > [data-title="r5c1"]')
       .realHover().wait(2000).click().realMouseMove(500,500).wait(3000)
       cy.get('.applyBtn').click().wait(8000)
    }

    CopyLink()
    {
       // Copy link and then paste it in browser to check it is working
       cy.get('.bg-white > :nth-child(6)').scrollIntoView().wait(4000)
       cy.get(':nth-child(6) > .link-div > .text-right > .copy-link').realHover().wait(2000).click().realMouseMove(200,200).wait(4000)
        cy.window().then((win) => {
            // Assuming your link is copied to the clipboard via navigator.clipboard
            return win.navigator.clipboard.readText()})
            .then((copiedLink) => {
            cy.visit(copiedLink)
          })
    }
    
}
export default LinkBuilder