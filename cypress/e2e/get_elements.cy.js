describe ('Get Elements', () => {

    it('Obtendo elementos', () => {
        //get () - selecionar elementos
        cy.visit('/')
            .get('.logo')

        //contains () -> procura texto em um escopo
        //usamos o get para diminiuir um escopo
        cy.get('#top_header').as('cabecalho')
            .contains('Login')

        // find () -> procura elemento em um escopo
        cy.get('@cabecalho')
            .find('.fa-user')

        // as() alias -> da um apelido para um elemento
        cy.get('@cabecalho')
            .find('.fa-user')
    })
})