/// <reference types="cypress" />
describe('Check for shoping cart', () => {
    it('validate that the shoping cart is work successful', () => {
        cy.visit("/")
        cy.get("#search").type("shirt {enter}")
        cy.get(".product-item-info").first().click()
        //cy.get("#option-label-size-143-item-168").click()// is correct but id contain number
        cy.get(".swatch-option").first().click()
       // cy.get("#option-label-color-93-item-57").click()// is correct but id contain number
        cy.get(".swatch-option").eq(7).click()
        cy.get("#product-addtocart-button").click()

        cy.wait(1000)

        cy.get(".counter.qty").should("be.visible").and("contain","1")
        cy.get("[role=alert]").should("be.visible").and("contain","You added Radiant Tee to your shopping cart.")

    });
    
});