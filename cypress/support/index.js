// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

before(()=>{
    // cy.visit('https://sage.concord.org/branch/master/sage.html');
    cy.visit('https://sagemodeler.concord.org/app');
    // cy.visit('https://sagemodeler.concord.org/app/?codap=staging#shared=https://cfm-shared.concord.org/gRFYONX8GmYg9SJ4266K/file.json');
    // cy.visit('http://127.0.0.1:8080/sage.html');
    cy.wait(2000);

});
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});
