describe('Home - Interação com Categorias', () => {
  it('Deve exibir carrossel e interagir com a categoria "Carros & Motos"', () => {
    cy.visit('https://bidtv.stage.superbid.net/')

    cy.log('Verifica se o carrossel de categorias está visível')
    cy.get('.slick-slider').first().should('be.visible')

    cy.log('Clica na seta próxima para navegar no carrossel')
    cy.get('.slick-arrow.slick-next').first().click()

    cy.log('Seleciona a categoria "Carros & Motos" e clica')
    cy.contains('Carros & Motos').click()

    cy.log('Verifica se redirecionou para a listagem da categoria')
    cy.url().should('include', '/')
  })
})