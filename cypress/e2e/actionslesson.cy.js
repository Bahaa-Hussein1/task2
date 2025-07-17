/// <reference types="cypress" />
describe('Actons Lessons', () => {
    it('Click command', () => {
        cy.visit("http://127.0.0.1:5500/actionslesson.html")
        cy.get("#btn1").click()
        cy.get("#btn1").click("bottom")// فقط للتدريب فش منها فائدة في هاي الحالة
        cy.get("#btn0").click({force:true})
        cy.get("#btn0").click("left",{force:true})
        cy.get(".btn").click({multiple:true})
        
    });

    it('Type command', () => {
        cy.visit("http://127.0.0.1:5500/actionslesson.html")
        cy.get("[placeholder='Type your name']").clear().type("BAHA HUSSEIN")
        cy.get("[placeholder='Type your name']").clear().type("BAHA HUSSEIN",{delay:1000})
        cy.get("[name=input_0]").clear( {force:true }).type("Hello", {force:true })
        
    });
    
    it('search for product', () => {
        cy.visit("/")
        cy.get("#search").clear().type("bag{enter}")
        cy.get("#search").clear().type("bag"+"{enter}")
        cy.get("#search").clear().type("shirt"+"{home}")// برجع المؤشر على اول الكلمة
        cy.get("#search").clear().type("shirt"+"{home}"+"{del}",{delay:1000})//{del} بتحذف اول حرف الي على يمين المؤشر
        
        
    });

    it('Select command', () => {
         cy.visit("http://127.0.0.1:5500/actionslesson.html")
         cy.get("#country").select("Palestine")// select by text
         cy.get("#country").select("jordan_country",{delay:1000})//select by value
         cy.get("#country").select(2,{delay:1000})//select by index
        
    });
    it('check command', () => {
         cy.visit("http://127.0.0.1:5500/actionslesson.html")
        // cy.get("#Banana").check().uncheck()
        // cy.get("#checkMe").check({force:true})
        // cy.get("[type=checkbox]").not("#checkMe").check()
       // cy.get("[type=checkbox]").not("#checkMe").check(['Banana','ap','or'])
        //cy.get("[type=checkbox]").not("#checkMe").uncheck(['Nuts','Fries','le'])
        cy.get("#developer").check()
        cy.get("#tester").check()// هيك بكون عملت (uncheck on developer)
        cy.reload()// delete of all data in page
    });
    it('dblclick command', () => {
         cy.visit("http://127.0.0.1:5500/actionslesson.html")
         cy.get("#dbClick").dblclick()
    });
    it('focus and blur command', () => {
         cy.visit("http://127.0.0.1:5500/actionslesson.html")
         cy.get("#myTextField").focus()
         cy.get("#myTextField").blur()
    });
    it.only('Trigger command', () => {
        cy.visit("http://127.0.0.1:5500/actionslesson.html")
        cy.get("#btn1").trigger("mousedown")
        cy.pause()
        cy.get("#trigger_btn").trigger("mouseover")
        cy.pause()
        cy.get("#trigger_btn").trigger("mouseleave")


        
        
    });

    
});