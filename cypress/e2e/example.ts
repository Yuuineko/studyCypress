//Exemplos de alteração no github cypress//
/// <reference path = "../support/index.d.ts"/> 
describe.skip ( 'Cypress TS', () => {
    it.skip('should go to go Google', () =>{
        cy.google()
    })
    
    it ('should change light/dark theme on william justem site' , () =>{
        cy.visit('https://willianjusten.com.br')

        cy.findByTitle(/Mudar o Tema/).click()

           //buscando uma classe cy.get// 
        cy.get('.light').should('exist')

        cy.findByTitle(/Mudar o Tema/).click()

           //buscando uma classe cy.get// 
        cy.get('.dark').should('exist')
    })
    it ('should visit won games',() =>{
        cy.visit('https://wongames.willianjusten.com.br')

        cy.findByText(/Esse é um site de estudos!/i).should('exist')
    })
})