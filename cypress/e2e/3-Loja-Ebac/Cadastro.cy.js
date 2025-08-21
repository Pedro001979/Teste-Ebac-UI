///<reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Fucionalidade: Cadastro', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password'). type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('exist')
    });

     it('Deve completar o cadastro com sucesso - Usando Variaveis', () => {
        var firstName = faker.person.firstName()
        var lastName = faker.person.lastName()
        var email = faker.internet.email(firstName , lastName)
        var password = faker.internet.password()
 
 
        cy.get('#reg_email').type(email)
        cy.get('#reg_password'). type(password)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(firstName)
        cy.get('#account_last_name').type(lastName)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('exist')
    });
});