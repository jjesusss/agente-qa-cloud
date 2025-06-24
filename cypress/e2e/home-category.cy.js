describe('BidTV - Interação com categorias', () => {
  it('Deve exibir e interagir com a categoria "Carros & Motos"', () => {
    cy.visit('https://bidtv.stage.superbid.net/')
    cy.log('Verificando a presença do carrossel de categorias')
    cy.contains("Navegue pelas categorias").parent().should('be.visible')

    cy.log('Clicando na seta direita do carrossel para revelar mais categorias')
    cy.contains("Navegue pelas categorias").parent().find('button.slick-next').click()

    cy.log('Verificando e clicando na categoria "Carros & Motos"')
    cy.contains("Carros & Motos").should('be.visible').click()
  })
})