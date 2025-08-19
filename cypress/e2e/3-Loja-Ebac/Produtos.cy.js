///<reference types="cypress"/>

describe('Fucionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve Selecionar um Produto da Lista', () => {
        cy.get(' .product-block >')
            //  cy.get('.products > .row')
            .first()
            .click()

        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

});