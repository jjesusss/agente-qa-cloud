describe('Teste de interação com categorias - BidTV', () => {
  it('Deve exibir e interagir com a categoria "Carros & Motos"', () => {
    cy.visit('https://bidtv.stage.superbid.net/')

    cy.log('Verifica o título da seção de categorias')
    cy.contains('Navegue pelas categorias').should('be.visible')

    cy.log('Verifica se a categoria "Carros & Motos" está visível')
    cy.contains('Carros & Motos').should('be.visible')

    cy.log('Clica na categoria "Carros & Motos"')
    cy.contains('Carros & Motos').closest('[data-index]').click()

    cy.log('Valida se redirecionou para página da categoria (URL ou elemento esperado)')
    cy.url().should('include', '/carros')
  })
})