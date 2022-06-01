// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//add testing library commands
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('google', () => cy.visit('https://google.com'));

Cypress.Commands.add('getByDataCy', (selector, ...args) =>{
    cy.get(`[data-cy="${selector}"]`, ...args)})


Cypress.Commands.add('shouldRenderBanner', () => {
    //usar within para pegar aquele elemento específico
    cy.get(".slick-slider").within(() => {
        //Selecionou os banners
        cy.findAllByRole("heading", { name: /cyberpunk 2077/i })
        cy.findAllByRole('link', { name: /buy now/i })

        cy.get('.slick-dots > :nth-child(2) > button').click()
        cy.wait(500)

        cy.findAllByRole("heading", { name: /horizon zero dawn/i })
        cy.findAllByRole('link', { name: /buy now/i })

        cy.get('.slick-dots > :nth-child(3) > button').click()
        cy.findAllByRole("heading", { name: /huge promotion!/i })
        cy.findAllByRole('link', { name: /browse games/i })
    })

})
Cypress.Commands.add('shouldRenderShowcase', ({ name, hightlight = false }) => {
    //usar within para pegar aquele elemento específico
    //usar crase (`) faz com a variavel sejam reconhecidas com ${} 
    cy.getByDataCy(name).within(() => {
        cy.findAllByRole('heading', { name }).should('exist')

        cy.getByDataCy("highlight").should(hightlight ? 'exist' : 'not.exist')
        
        if (hightlight) {
            cy.getByDataCy("highlight").within(() => {
                cy.findAllByRole('link').should('have.attr', 'href')
            })
        }
        
        console.log(name)
        cy.getByDataCy("game-card").should('have.length.gt', 0)
        
    })
})