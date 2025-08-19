///<reference types="cypress"/>

describe('Fucionalidade: Login' , () => {

    it('Deve fazer login coim sucesso' , () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('Pedro.teste123@teste.com.br')
        cy.get('#password').type('Teste@1979')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, pedro.teste123')
    })
})