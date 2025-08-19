///<reference types="cypress"/>

describe('Fucionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    // afterEach(() => {
    //    cy.screenshot()
    // });

    it('Deve fazer login coim sucesso', () => {
        cy.get('#username').type('Pedro.teste123@teste.com.br')
        cy.get('#password').type('Teste@1979')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, pedro.teste123')
    })

    it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('Pedro.123@teste.com.br')
        cy.get('#password').type('Teste@1979')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
    });

    it('Deve exibir mensagem de erro ao inserir Senha inválida', () => {
        cy.get('#username').type('Pedro.teste123@teste.com.br')
        cy.get('#password').type('Testeeeeeee@1979')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'A senha fornecida para o e-mail Pedro.teste123@teste.com.br está incorreta.')
    });
})