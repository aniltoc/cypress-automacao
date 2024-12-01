/// <reference types="cypress" />

describe ('Interações', () => {

    it('Digitar em um campo', () => {
        cy.visit('/')
            .get('.logo')

        cy.get('.form-control')
            .type('anilto2005@gmail.com')
    })
    it('Click', () =>{
        cy.visit('/')
            .get('.logo')
        //cy.get('.fa-user')
            //.click()
            //.click (100, 100, {force:true})

        cy.get('.form-control')
            .type('anilto2005@gmail.com{enter}') //simular enter
    })    
    it('Select', () =>{
        cy.visit('/')
            .get('.logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View Two')
            .click()
            
        cy.get('#country')
            .select('Colombia')
    }) 
    it.only('Radiobutton e checkbox', () => {
        cy.visit('/')
            .get('.logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View One')
            .click()

        cy.get('#materialUnchecked')
            .check()
            .uncheck()

        cy.get('#css')
            .check()
    })
})
