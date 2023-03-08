/// <reference types="cypress" />
"experimentalSourceRewriting".true;
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe("Testing", () => {
    it('Testing Google website, positive scenario', () => {
        cy.visit('https://www.google.com/')
        cy.title().should('eq', 'Google')
        cy.url().should('include', 'google.com')
    })

    it('Testing Google website, negative scenario', () => {
        cy.visit('https://www.google.com/')
        cy.title().should('not.eq', 'Gooogle')
        cy.url().should('include', 'google.com')
    })
})