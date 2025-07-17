/// <reference types="cypress" />
describe('selectors lesson', () => {
    it('validate that the logo is exist in the header page home', () => {
        cy.visit("/")
        cy.get(".logo")//get elements by class name
        // بقدر اجيب عنصر باستخدام Tag لكن بعطيني كل الي موجودين بالموقع وهو غير صحيح
        // لو بدي اشوف ايش ال selector المناسب ل search bar
        cy.get("#search")
        // you can used name 
        cy .get("[name=q]")
        // حتى اقدر اجيب sign in عملت استدعاء لل class وحدتت اني بدي a وعندي ثنتين اخترت الاولى
        cy.get(".authorization-link a").first()
        cy.get(".base")
        cy.get(".showcart")
        cy.get(".page-footer .links a").first()
        cy.contains("Note")


    });
});