/// <reference types="cypress" />

describe('check that all fields/titles/buttons are visible', () => {
    it('validate that the fields/titles/buttons are visible in create new account form', () => {
        cy.visit("/")
        //cy.get(".header.links a").eq(2).click()//Way(1)
        cy.contains("Create an Account").click()//Way(2)
        // او بجيب الرابط مباشرة من الموقع 
        cy.contains("Create New Customer Account").should("be.visible")
        cy.contains("Personal Information").should("be.visible")
        cy.contains("First Name").should("be.visible")
        //cy.get("[for=firstname]  span").should("be.visible")//way(2)
        cy.get("#firstname").should("be.visible")
        cy.contains("Last Name").should("be.visible")
        //cy.contains("span","Last Name").should("be.visible")//way(2)
        cy.get("#lastname").should("be.visible")
        cy.contains("Sign-in Information").should("be.visible")
        cy.contains("Email").should("be.visible")
        cy.get("#email_address").should("be.visible")
        cy.contains("Password").should("be.visible")
        cy.get("#password").should("be.visible")
        cy.get("#password-strength-meter").should("be.visible")
        cy.contains("Confirm Password").should("be.visible")
        cy.get("#password-confirmation").should("be.visible")
        cy.get(".primary").should("be.visible")
        //cy.contains("button","Create an Account").should("be.visible")// way(2)
        

    });
    
});