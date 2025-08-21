Cypress.Commands.add('login', (Usuario, Senha) => {
   cy.get('#username').type(Usuario)
   cy.get('#password').type(Senha)
   cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add('preCadastro', (email, password, firstName, lastName) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(password)
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(firstName)
    cy.get('#account_last_name').type(lastName)
    cy.get('.woocommerce-Button').click()
})

Cypress.Commands.add('detalhesConta', (firstName, lastName, Usuario) => {
    cy.get('#account_first_name').clear().type(firstName)
    cy.get('#account_last_name').clear().type(lastName)
    cy.get('#account_display_name').clear().type(Usuario)
    cy.get('.woocommerce-Button').click()
})
