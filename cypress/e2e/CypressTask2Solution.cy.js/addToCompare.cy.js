/// <reference types="cypress" />
describe('Add to Wishlist', () => {
    it('validate that the user can be Add to Compare', () => {
        cy.visit("/")
        cy.get(".product-item-info").first().click()
        //cy.contains("Add to Compare").should('be.visible').click()
        cy.get(".action.tocompare").should('be.visible').click()
        //cy.get("[data-role=add-to-links]").should('be.visible').click()

        cy.wait(3000)
       
        cy.get("[role=alert]").should('be.visible').and("contain","You added product Radiant Tee to the comparison list.")
        
    });
    
});