/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

const user_data = require('../fixtures/desafio.json')

describe('Cadastro de usuário', () => {

    beforeEach('Acessando a página de cadastro', () => {
    cy.visit('/')
        .get('.fa-lock')
        .click()
    
    cy.get('#user')
        .should('be.visible')
    })

    it('Validar campo nome vazio', () => {
        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .should('have.text','O campo nome deve ser prenchido')

    })

    it('Validar campo email vazio', () => {
        cy.get('#user')
            .type(user_data.name)
            
        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .contains('O campo e-mail deve ser prenchido corretamente')
        
    })

    it('Validar campo email inválido', () => {
        cy.get('#user')
            .type(user_data.name)

        cy.get('#email')
            .type('teste')
            
        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .contains('O campo e-mail deve ser prenchido corretamente')
        
    })

    it('Validar campo senha vazio', () => {
        cy.get('#user')
            .type(user_data.name)

        cy.get('#email')
            .type(user_data.email)
            
        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .contains('O campo senha deve ter pelo menos 6 dígitos')

    })

    it('Validar campo senha inválido', () => {
        cy.get('#user')
            .type(user_data.name)

        cy.get('#email')
            .type('teste@gmail.com')

        cy.get('#password')
            .type('123')
            
        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .contains('O campo senha deve ter pelo menos 6 dígitos')
        
    })

    it('Cadastro realizado com sucesso', () => {
        const name = faker.name.fullName()
        cy.get('#user')
            .type(name)

        cy.get('#email')
            .type(user_data.email)

        cy.get('#password')
            .type(user_data.password)
            
        cy.get('#btnRegister')
            .click()

        cy.get('#swal2-title')
            .contains('Cadastro realizado!')
        
        cy.get('#swal2-html-container')
            .should('have.text', `Bem-vindo ${name}`)
        
        cy.get('.swal2-confirm')
            .click()
    })
})