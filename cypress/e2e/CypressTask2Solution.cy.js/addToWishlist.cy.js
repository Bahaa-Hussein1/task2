/// <reference types="cypress" />
describe('Add to Wishlist', () => {

    before(()=>{
      //cy.visit("/")
        cy.visit("/customer/account/login/")
        cy.get("#email").type("CypressUser@gmail.com")
        cy.get("#pass").type("test@123")
        cy.get("#send2").click()
   })
    it('validate that the user can be Add to Wishlist', () => {
        cy.get(".logo").click()
        cy.get(".product-item-info").first().click()
        cy.contains("Add to Wish List").should('be.visible').click() 
        //cy.get(".action.towishlist").should('be.visible').click(); //another way
       cy.wait(3000)
       
        cy.get("[role=alert]").should('be.visible').and("contain","Radiant Tee has been added to your Wish List. Click here to continue shopping.")
        cy.screenshot({capture : "fullPage"})
      });
    
});