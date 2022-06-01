/// <reference path = "../support/index.d.ts"/>  


describe('game page', () => {
    it('should render game page sections', () => {
        cy.visit('/game/cyberpunk-2077')
    });
});