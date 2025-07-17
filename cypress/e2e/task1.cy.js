/// <reference types="cypress" />
describe('check functionality', () => {
   it('check functionalitys for home page', () => {
    cy.visit("https://demo.productionready.io/#/register")
    cy.contains("conduit")
    cy.get(".nav-link").first()
    cy.get(".nav-link").eq(2)
    cy.get(".text-xs-center").first()
    cy.get(".text-xs-center").last()
    cy.get(".form-control").first()
    cy.get(".form-control").eq(1)
    cy.get(".form-control").last()
    cy.get(".btn")
    cy.get(".logo-font")
    cy.get(".attribution")

       
   }); 
    
});