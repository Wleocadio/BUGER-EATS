

Cypress.Commands.add('signup', deliver => {

  cy.get('input[name="fullName"]').should('be.visible').type(deliver.name, { delay: 0 }).should('have.value', deliver.name)
  cy.get('input[name="cpf"]').should('be.visible').type(deliver.cpf, { delay: 0 }).should('have.value', deliver.cpf)
  cy.get('input[name="email"]').should('be.visible').type(deliver.email, { delay: 0 }).should('have.value', deliver.email)
  cy.get('input[name="postalcode"]').should('be.visible').type(deliver.address.postalcode, { delay: 0 }).should('have.value', deliver.address.postalcode)

  cy.get('input[value="Buscar CEP"]').click()

  cy.get('input[name="address-number"]').should('be.visible').type(deliver.address.number).should('have.value', deliver.address.number)
  cy.get('input[name="address-details"]').should('be.visible').type(deliver.address.details, { delay: 0 }).should('have.value', deliver.address.details)

})

Cypress.Commands.add('invalidcpf', (deliver) => {

  cy.get('input[name="fullName"]').should('be.visible').type(deliver.name, { delay: 0 }).should('have.value', deliver.name)
  cy.get('input[name="cpf"]').should('be.visible').type(deliver.cpf, { delay: 0 }).should('have.value', deliver.cpf)
  cy.get('input[name="email"]').should('be.visible').type(deliver.email, { delay: 0 }).should('have.value', deliver.email)
  cy.get('input[name="postalcode"]').should('be.visible').type(deliver.address.postalcode, { delay: 0 }).should('have.value', deliver.address.postalcode)

  cy.get('input[value="Buscar CEP"]').click()

  cy.get('input[name="address-number"]').should('be.visible').type(deliver.address.number).should('have.value', deliver.address.number)
  cy.get('input[name="address-details"]').should('be.visible').type(deliver.address.details, { delay: 0 }).should('have.value', deliver.address.details)

})

Cypress.Commands.add('invalidemail', deliver => {

  cy.get('input[name="fullName"]').should('be.visible').type(deliver.name, { delay: 0 }).should('have.value', deliver.name)
  cy.get('input[name="cpf"]').should('be.visible').type(deliver.cpf, { delay: 0 }).should('have.value', deliver.cpf)
  cy.get('input[name="email"]').should('be.visible').type(deliver.email, { delay: 0 }).should('have.value', deliver.email)
  cy.get('input[name="postalcode"]').should('be.visible').type(deliver.address.postalcode, { delay: 0 }).should('have.value', deliver.address.postalcode)

  cy.get('input[value="Buscar CEP"]').click()

  cy.get('input[name="address-number"]').should('be.visible').type(deliver.address.number).should('have.value', deliver.address.number)
  cy.get('input[name="address-details"]').should('be.visible').type(deliver.address.details, { delay: 0 }).should('have.value', deliver.address.details)

})

Cypress.Commands.add('clicksubmit', function () {

  cy.get('button[type="submit"]').click()

})
Cypress.Commands.add('acess_bugereats', function () {

  cy.visit('https://buger-eats-qa.vercel.app/');
  cy.get('a[href="/deliver"]').click()
  cy.contains('Cadastre-se para fazer entregas').should('be.visible')

})

Cypress.Commands.add('uploadfile', function () {

  cy.get('input[accept^="image"]').should('exist')
    .selectFile({contents:"cnh.jpg"}, { force: true })
    .should(function ($input) {
      expect($input[0].files[0].name).to.equal('cnh.jpg')

    })

})

Cypress.Commands.add('checkaddress', function () {

  cy.get('input[name="address"]').should('have.value', 'Avenida Paulista')
  cy.get('input[name="district"]').should('have.value', 'CECAP')
  cy.get('input[name="city-uf"]').should('have.value', 'Vera Cruz/SP')

})

Cypress.Commands.add('delivery_methodM', () => {

  cy.contains('.delivery-method li', 'Moto').click()

})

Cypress.Commands.add('delivery_methodB', () => {

  cy.contains('.delivery-method li', 'Bike Elétrica').click()

})

Cypress.Commands.add('delivery_methodV', () => {

  cy.contains('.delivery-method li', 'Van/Carro').click()

})

Cypress.Commands.add('success_registration', () => {

  cy.get('#swal2-title').should('have.text', 'Aí Sim...')
  cy.get('button[type="button"][class="swal2-confirm swal2-styled"]').click()

})

Cypress.Commands.add('delivery_method', () => {

  cy.contains('.delivery-method li', 'Moto').click().should('have.class', 'selected')
  cy.contains('.delivery-method li', 'Bike Elétrica').click().should('have.class', 'selected')
  cy.contains('.delivery-method li', 'Van/Carro').click().should('have.class', 'selected')

})

Cypress.Commands.add('search_postalcode', (deliver) => {

  cy.get('input[name="postalcode"]').should('be.visible').type(deliver.address.postalcode, { delay: 0 }).should('have.value', deliver.address.postalcode)
  cy.get('input[type="button"][value="Buscar CEP"]').click()

})

Cypress.Commands.add('field_disabled', () => {

  cy.get('[type="text"][name="address"]').should('be.visible').should('be.disabled')
  cy.get('[type="text"][name="district"]').should('be.visible').should('be.disabled')
  cy.get('[type="text"][name="city-uf"]').should('be.visible').should('be.disabled')

})

