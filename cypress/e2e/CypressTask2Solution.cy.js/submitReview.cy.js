/// <reference types="cypress" />
describe('Check Subment Review', () => {
    it('validate that the user can be to subment review', () => {
        cy.visit("/")
        cy.get(".product-item-info").first().click()
        cy.get("#tab-label-reviews").click()
        cy.get('#Rating_2_label').should('be.visible').click({ force: true }); 
        cy.get("#nickname_field").type(" bahaa")
        cy.get("#summary_field").type(" good product")
        cy.get("#review_field").type("I liked the design")
        cy.get(".submit").click()

          cy.wait(1000)

          cy.get("[role=alert]").should("be.visible").and("contain","You submitted your review for moderation.")
        
    });
    
});
