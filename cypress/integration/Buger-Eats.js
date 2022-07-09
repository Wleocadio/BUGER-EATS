///<reference types="Cypress" />

import signupFactory from '../factories/SignupFactory'



describe('Verificando o sistema Buger Eats', () => {
  it('Acessar o sistema clicando em "cadastre-se para fazer entrega"', () => {

    cy.acess_bugereats()

  });

});


describe('Cadastro no sistema Buger Eats', () => {
  

  beforeEach(() => {
    cy.visit('https://buger-eats-qa.vercel.app/deliver')

  });

  

  it('Verifica Alerta de campos obrigatórios', () => {

    cy.clicksubmit()
    cy.get('.alert-error').should('have.length', 7).should('be.visible')

  });

  it('Verifica mensagem de erro ao tentar cadastrar com cpf invalido', () => {

    var deliver = signupFactory.deliver()
    deliver.cpf = '000000AAA00'

    cy.invalidcpf(deliver)
    cy.clicksubmit()
    cy.get('.alert-error').should('have.length', 1).should('be.visible').contains('Oops! CPF inválido').should('be.visible')

  });

  it('Verifica mensagem de erro ao tentar cadastrar com e-mail inválido', () => {
    var deliver = signupFactory.deliver()
    deliver.email = 'user@dd'

    cy.invalidemail(deliver)
    cy.delivery_methodM()
    cy.uploadfile()
    cy.clicksubmit()
    
    cy.get('.alert-error').should('be.visible').contains('Oops! Email com formato inválido').should('be.visible')

  });

  it('Verifica mensagem de erro ao pesquisar com CEP inválido', () => {
    var deliver = signupFactory.deliver()
    deliver.address.postalcode = '1732A010'

    cy.search_postalcode(deliver)
    cy.get('.alert-error').should('have.length', 1).contains('Informe um CEP válido').should('be.visible')

  });

  it('Validação dos campos Rua, Bairro e Cidade após a busca do CEP', () => {
    var deliver = signupFactory.deliver()
    cy.search_postalcode(deliver)
    cy.wait(1000)
    cy.checkaddress()

  });

  it('Verifica se os campos Rua, Bairro e Cidade/UF estão desabilitados', () => {

    cy.field_disabled()

  });

  it('Tentar cadastrar sem adicionar a cnh e o metodo de entrega', () => {
    var deliver = signupFactory.deliver()
    cy.signup(deliver)
    cy.clicksubmit()
    cy.get('.alert-error').should('have.length', 2).should('be.visible')

  });

  it('Selecionando os Método de entrega', () => {

    cy.delivery_method()

  });
  it('Selecionar um arquivo', () => {

    cy.uploadfile()

  });

  it('Realizar o cadastro selecionando o método de entrega Moto', () => {
    var deliver = signupFactory.deliver()
    cy.signup(deliver)
    cy.delivery_methodM()
    cy.uploadfile()
    cy.clicksubmit()
    
    cy.success_registration()
    cy.contains('Seja um parceiro entregador pela Buger Eats').should('be.visible')

  });

  it('Realizar o cadastro selecionando o método de entrega Bicicleta', () => {
    
    var deliver = signupFactory.deliver()
    cy.signup(deliver)
    cy.delivery_methodB()
    cy.uploadfile()
    cy.clicksubmit()
    cy.success_registration()
    cy.contains('Seja um parceiro entregador pela Buger Eats').should('be.visible')

  });

  it('Realizar o cadastro selecionando o método de entrega Van/Carro', () => {
    var deliver = signupFactory.deliver()
    cy.signup(deliver)
    cy.delivery_methodV()
    cy.uploadfile()
    cy.clicksubmit()
    cy.success_registration()
    cy.contains('Seja um parceiro entregador pela Buger Eats').should('be.visible')

  });



});