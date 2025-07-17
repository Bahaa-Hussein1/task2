/// <reference types="cypress" />
describe('check the functionalitys(Selectors) for home page', () => {
    it('examples on selectors', () => {
        cy.visit("/")
        cy.get(".u-s-mb0")
        /** / OR WAY 
         * cy.contains("h1","Demos")// بدي يرجع Demos الي داخل h1
         * OR cy.get('h1').contains('Demos')
         * 
         * 
         * 
         * */
        cy.get(".NavAlt-anchor").eq(3)
       /*
       OR WAY
        cy.contains("Reporting & Docs")
        cy.contains("a","Reporting & Docs")
        cy.get("[aria-label=Reporting]")
        */
       cy.get("#web") 
       cy.contains("h2","Web")// no used for the class because contains the number 
       cy.get(".TK-Footer-Link").eq(6)
       cy.get(".TK-Footer-List").contains("Blogs")
       cy.get(".TK-Footer-List").eq(1).find(".TK-Footer-List-Item a").eq(4);
       //".TK-Footer-List-Item a" means : give the a in the class
       cy.get("[href='/blogs']").last()
       cy.get(".TK-Footer-List-Horizontal-Item").eq(1)
       cy.get(".TK-Footer-List-Social").find("li").first()
       cy.get(".TK--Footer-Desktop .TK-Footer-List-Social").children()
        cy.get(".TK--Footer-Desktop .TK-Footer-List-Social").find("li")

       

       
        
        
    });
    
});