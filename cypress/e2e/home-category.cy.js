describe('Interações com categorias na home do BidTV', () => {
  it('Deve exibir categorias e interagir com a categoria "Carros & Motos"', () => {
    cy.visit('https://bidtv.stage.superbid.net/')

    cy.log('Verificando a presença do carrossel de categorias')
    cy.contains('Navegue pelas categorias').should('be.visible')

    cy.log('Clicando na categoria "Carros & Motos"')
    cy.contains('Carros & Motos').click()

    cy.log('Verificando redirecionamento da categoria "Carros & Motos"')
    cy.url().should('include', '/carros') // Ajuste a URL conforme o comportamento real esperado
  })
})