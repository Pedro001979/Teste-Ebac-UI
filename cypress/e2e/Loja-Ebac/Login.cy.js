///<reference types="cypress"/>
const Perfil = require('../../fixtures/Perfil.json')

describe('Fucionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    // afterEach(() => {
    //    cy.screenshot()
    // });

    it('Deve fazer login coim sucesso', () => {
        cy.get('#username').type('Pedro.teste123@teste.com.br')
        cy.get('#password').type('Teste@1979', { log: false })
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, pedro.teste123')
    })

    it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('Pedro.123@teste.com.br')
        cy.get('#password').type('Teste@1979', { log: false })
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
    });

    it('Deve exibir mensagem de erro ao inserir Senha inválida', () => {
        cy.get('#username').type('Pedro.teste123@teste.com.br')
        cy.get('#password').type('Testeeeeeee@1979', { log: false })
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'A senha fornecida para o e-mail Pedro.teste123@teste.com.br está incorreta.')
    });

    it('Deve fazer login coim sucesso - Utilizando a massa de dados', () => {
        cy.get('#username').type(Perfil.Usuario)
        cy.get('#password').type(Perfil.Senha, { log: false })
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, pedro.teste123')
    })

    it('Deve fazer login coim sucesso - Utilizando Fixture', () => {
        cy.fixture('Perfil').then(dados => {
            cy.get('#username').type(dados.Usuario)
            cy.get('#password').type(dados.Senha, { log: false })
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, pedro.teste123')
        })
    })

    it('Deve fazer login coim sucesso - Comandos Customizados', () => {
        cy.login(Perfil.Usuario, Perfil.Senha, { log: false })
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, pedro.teste123')
    })
})