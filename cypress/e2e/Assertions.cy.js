/// <reference types="cypress" />
describe('Assertins Lesson', () => {
    it('visible-hidden', () => {
        cy.visit("/")
        cy.get(".logo").should("be.visible")
        cy.get("#search").should("be.visible")
        cy.get(".counter.qty").first().should("be.hidden")
        cy.get(".counter.qty").last().should("not.be.visible")
        // first & last are hidden (الاثنين مخفيات مش معروف مين تبعت المربع البرتقالي او لا , مش قادر احدد )
        cy.get(".counter.qty").first().should("exist")
    });
    
    it('chainers', () => {
         cy.visit("/")
         cy.get(".showcart").should("have.attr","href")
         cy.contains("Hot Sellers").should("have.class","title")
         cy.get("[name=q]").should("have.id","search")
    });
    it('css-assertions', () => {
          cy.visit("/")
          //cy.get(".copyright").should("have.css","display","block")
          //cy.get(".copyright").should("have.css","color","rgb(255, 255, 255)")
          //cy.get(".copyright").should("have.css","background-color","rgb(110, 113, 110)")
          cy.contains("XS").click()
          cy.contains("XS").should("have.css","background-color","rgb(255, 255, 255)")
          .and("have.css","outline-color","rgb(255, 85, 1)")  
    });
    it('have-text...have-value...contain', () => {
        cy.visit("/")
        cy.get(".info").last().should("have.text","Here is what`s trending on Luma right now")// ما بقبل الا النص الكامل
        cy.get(".info").last().should("contain","Here is what`s trending on Luma")// عادي لو كان في نقص بالنص
        
    });
    it('verify that the default value for the qty input field  is 1', () => {
        cy.visit("/")
        cy.get(".product-item").eq(2).click()
        cy.get("#qty").should("have.value","1")
        
    });
    it.only('disabled-enabled', () => {
        cy.visit("/")
        cy.get("[type=submit]").should("be.disabled")
        cy.get("#search").type("bag")
        cy.get("[type=submit]").should("be.enabled")
        
    });


});