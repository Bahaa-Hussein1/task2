/// <reference types="cypress" />
describe('Delete Product From Cart', () => {
   beforeEach(()=>{
      cy.visit("/")
        cy.get("#search").type("shirt {enter}")
        cy.get(".product-item-info").first().click()
        cy.get(".swatch-option").first().click()
        cy.get(".swatch-option").eq(7).click()
        cy.get("#product-addtocart-button").click()
   })
   // لازم قبل ما احذف يكون عندي اشي احذفه
   
    it('validate that the user can be delete product from the cart - dialog', () => {
      cy.wait(5000)
      cy.get(".showcart").click()
      cy.get(".action.delete").click()
      cy.get(".action-primary.action-accept").click()
      cy.get(".subtitle.empty").should("be.visible").and("contain","You have no items in your shopping cart.")
      cy.get(".counter.qty").should("not.be.visible")
    });
    

    it.only('validate that the user can be update product from the cart - dialog', () => {
      cy.wait(5000)
      cy.get(".showcart").click()
      cy.get("[data-cart-item-id='WS12-XS-Purple']").clear().type("3").click()
      cy.get(".update-cart-item").click()
      //cy.get(".subtitle.empty").should("be.visible").and("contain","You have no items in your shopping cart.")
      //cy.get(".counter.qty").should("not.be.visible")
    });



});