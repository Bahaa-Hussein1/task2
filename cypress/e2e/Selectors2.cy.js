/// <reference types="cypress" />
describe('cypress selectors', () => {
    it('Select element by text', () => {
        cy.visit("/")
       // cy.contains("Sale").click()
        cy.contains("As low as")// برجع اول وحدة 
        cy.get(".price-label")// get all elements in (span)(As low as) (الكلاس مشتركة بينهم كلهم)
        cy.get(".price-label").first()// he is get first elements
         cy.contains("What's New")
           cy.contains("span","What's New")// اذا انطلب مني ارجع العنصر نفسه
           cy.get(".page-footer .links").find("li").contains("Orders and Returns")
    });

    it.only('Select element by position in list', () => {

        cy.visit("/")
        cy.get("li.level0").first().next()
        cy.get("li.level0").last().prev()
        cy.get("li.level0").eq(3)
        cy.get("div.swatch-option").eq(9)
        cy.get("li").filter(".authorization-link")
        cy.get("li").not(".authorization-link")
        cy.contains("Subscribe").parent()

    });
    
});