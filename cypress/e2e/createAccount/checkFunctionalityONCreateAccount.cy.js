/// <reference types="cypress" />
describe('check functionality in create account', () => {
    it('validate that the functionality are successful for create new account', () => {
        cy.visit("/customer/account/create/#google_vignette")
        const emailNum = Math.floor(Math.random()*1000);

        cy.get("#firstname").type("Bahaa")
        cy.get("#lastname").type("Haitham")
        cy.get("#email_address").type("bahahussein"+emailNum+"@gmail.com")
        cy.get("#password").type("baha123@")
        cy.get("#password-confirmation").type("baha123@")
        cy.contains("span","Create an Account").click()//WAY(1)

        cy.wait(1000)// ممك بعض الشغلات تطول لحتى تطلع هاد لينتظر بعض الوقت 

        cy.get("[role=alert]").should("be.visible").and("contain","Thank you for registering with Main Website Store.")
        cy.get(".base").should("contain","My Account")
        cy.get(".logged-in").first().should("contain","Welcome, Bahaa Haitham!")
        cy.url().should("eq","https://magento.softwaretestingboard.com/customer/account/")
        
    });
    
    it.only('verfiy that validation password field', () => {
         cy.visit("/customer/account/create/#google_vignette")
        const emailNum = Math.floor(Math.random()*1000);

        cy.get("#firstname").type("Bahaa")
        cy.get("#lastname").type("Haitham")
        cy.get("#email_address").type("bahahussein"+emailNum+"@gmail.com")
        cy.get("#password").type("baha123@")
        cy.get("#password-strength-meter-label").should("contain","Medium")
        
    });

});