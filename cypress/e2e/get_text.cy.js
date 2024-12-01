describe ('Get text', () => {

    it('Obtendo texto', () => {
        cy.visit('/')
            .get('.logo')

        cy.get('.top_header_left > p')
            .then((element) => {
                console.log(element.text())
                element.hide()
            })
    })
})