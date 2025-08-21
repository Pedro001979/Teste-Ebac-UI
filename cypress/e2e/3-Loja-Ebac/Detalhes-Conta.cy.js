///<reference types="cypress"/>
const Perfil = require('../../fixtures/Perfil.json')

describe('Fucionalidade: Detalhes da Conta', () => {
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.login(Perfil.Usuario, Perfil.Senha, { log: false })
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Pedro', 'Ricardo' , 'Pedro10')
        cy.get('.woocommerce-message').should('exist')
    });
});