/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import homePage from '../support/pages/home_page'
import registerPage from "../support/pages/registro_page"

const user_data = require('../fixtures/desafio.json')

// const screens = ['desktop', 'iphone-x', 'iphone-6']

// screens.forEach(element => {
    describe('Cadastro de usuário', () => {

        beforeEach('Acessando a página de cadastro', () => {
        //    if(element != 'desktop' ) {
        //     cy.viewport('iphone-x')
        //    }     

           homePage.accessRegisterPage()
        })
    
        it('Validar campo nome vazio', () => {
            registerPage.saveRegister()
    
            registerPage.checkMessage('O campo nome deve ser prenchido')
    
        })
    
        it('Validar campo email vazio', () => {
            registerPage.fillName(user_data.name)
                
            registerPage.saveRegister()
    
            registerPage.checkMessage('O campo e-mail deve ser prenchido corretamente')
            
        })
    
        it('Validar campo email inválido', () => {
            registerPage.fillName(user_data.name)
    
            registerPage.fillEmail('emailinvalido')
                
            registerPage.saveRegister()
    
            registerPage.checkMessage('O campo e-mail deve ser prenchido corretamente')
            
        })
    
        it('Validar campo senha vazio', () => {
            registerPage.fillName(user_data.name)
    
            registerPage.fillEmail(user_data.email)
                
            registerPage.saveRegister()
    
            registerPage.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    
        })
    
        it('Validar campo senha inválido', () => {
            registerPage.fillName(user_data.name)
    
            registerPage.fillEmail(user_data.email)
    
            registerPage.fillPassword("123")
                
            registerPage.saveRegister()
    
            registerPage.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
            
        })
    
        it('Cadastro realizado com sucesso', () => {
            const name = faker.person.fullName()
            registerPage.fillName(name)
    
            registerPage.fillEmail(user_data.email)
    
            registerPage.fillPassword(user_data.password)
                
            registerPage.saveRegister()
    
            registerPage.sucessRegister(name)
    
            cy.get('.swal2-confirm')
                .click() //comentario pra subir
        })
    })
// })

