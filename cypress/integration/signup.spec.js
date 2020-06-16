/// <reference types="cypress" />

import Chance from 'chance';
const chance = new Chance();

describe('Signup' ,()=> {

    const email = chance.email();
    const password = 'test123'
    const name = 'CypressTest'
    const cpf = '3708392910'

    beforeEach(()=> {
        cy.visit('https://crisfeit.github.io/cashback-app')
    })

    it('Cadastrar novo usuário' , ()=> {
        cy.get('.button-signup').click();

        cy.url().should('include','cadastro');

        cy.get('input[name=name]').type(name)
        cy.get('input[name=cpf]').type(cpf)
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(password)

        cy.get('.button-submit').click()

    })
})