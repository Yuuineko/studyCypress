/// <reference path = "../support/index.d.ts"/>  

import { findAllByRole } from "@testing-library/dom";

describe('game page', () => {
    it('should render game page sections', () => {
        cy.visit('/game/cyberpunk-2077')


        cy.getByDataCy('game-info').within(() => {
            cy.findByRole('heading', { name: /cyberpunk 2077/i }).should('exist')
            cy.findByText(/^Cyberpunk 2077 is an open-world/i).should('exist')   //^  < comeca com 
            cy.findByText('$59.99').should('exist')
            cy.findByRole('button', { name: /add to cart/i }).should('exist')
        })
        //gallery 
        cy.findAllByRole('button', { name: /thumb \-/i }).should('have.length.gt', 0)
    });

});