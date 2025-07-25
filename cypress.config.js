const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://magento.softwaretestingboard.com",
   // viewportHeight:550 ,
    //viewportWidth:550 ,
   // watchForFileChanges : false
    //هاي بعملها حتى ما يعمل التعديلات مباشرة على شاشة output
   // baseUrl:"https://demo.productionready.io/#/register",
    //baseUrl:"https://www.telerik.com/support/demos",

    
     //video:true,
     reporter: "mochawesome",
      reporterOptions: {
        reportDir: "cypress/myReport", // where to save in directory
        overwrite: false,
        html: true,
        json: false,
        timestamp: "mmddyyyy_HHMMss"
    }


  },
  
});
