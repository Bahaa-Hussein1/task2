///reference type="cypress"/
describe('check login functionality', () => {
    it.only('validate that the user can login to the magento website successfilly', () => {
        cy.visit("/customer/account/login/")
        cy.get("#email").type("CypressUser@gmail.com")
        cy.get("#pass").type("test@123")
        cy.get("#send2").click()

        
    });
    it('validate that the user can open home page', () => {
        cy.visit("/")
        
    });
    
});