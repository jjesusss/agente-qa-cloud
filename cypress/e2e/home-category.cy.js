describe('Exibir e interagir com categorias', () => {
  it('Deve acessar a página e interagir com o carrossel de categorias', () => {
    cy.visit('https://bidtv.stage.superbid.net/')
    cy.log('Verificando se o carrossel de categorias está visível')
    cy.get('[data-testid="categories-carousel-container"]').should('be.visible')

    cy.log('Clicando na seta próxima para avançar o carrossel de categorias')
    cy.get('[data-testid="categories-carousel-container"] .slick-next').click()

    cy.wait(1000)

    cy.log('Clicando na seta anterior para voltar no carrossel de categorias')
    cy.get('[data-testid="categories-carousel-container"] .slick-prev').click()

    cy.wait(1000)

    cy.log('Clicando na categoria "Imóveis"')
    cy.get('[data-testid="categories-carousel-item-13"]').click()

    cy.wait(2000)

    cy.go('back')

    cy.wait(2000)

    cy.log('Clicando na categoria "Carros & Motos"')
    cy.get('[data-testid="categories-carousel-item-10"]').click()

    cy.wait(2000)

    cy.go('back')

    cy.wait(2000)

    cy.log('Clicando na categoria "Caminhões & Ônibus"')
    cy.get('[data-testid="categories-carousel-item-11"]').click()
  })
})