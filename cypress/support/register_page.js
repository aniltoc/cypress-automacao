/// <reference types="cypress" />


// Elementos

const elements = {
    buttons: {
        register: '#btnRegister' 
    },
    fields: {
        name: '#user',
        email:'#email',
        password: '#password',
    },
    messages: {
        error: '#errorMessageFirstName',
        sucessTitle: '#swal2-title',
        sucessSubtitle: '#swal2-html-container',
    },
}


// Ações/ métodos / funções



Cypress.Commands.add('saveRegister', () => {
    cy.get(elements.buttons.register)
        .click()
})

Cypress.Commands.add('fillName', (name) => {
    cy.get(elements.fields.name)        
        .type(name)
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get(elements.fields.email)
        .should('be.visible')
        .type(email)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get(elements.fields.password)
        .type(password)
})

Cypress.Commands.add('checkMessage', (message) => {
    cy.get(elements.messages.error)
        .should('have.text',message)
})

Cypress.Commands.add('sucessRegister', (name) => {
    cy.get(elements.messages.sucessTitle)
        .should('have.text', 'Cadastro realizado!')

    cy.get(elements.messages.sucessSubtitle)
        .should('have.text',`Bem-vindo ${name}`)
})
