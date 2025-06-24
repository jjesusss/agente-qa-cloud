describe('Página inicial do BidTV - Testes E2E', () => {
  it('Deve acessar a home e interagir com os elementos principais', () => {
    cy.visit('https://bidtv.stage.superbid.net/')

    cy.log('Verifica o botão "Lista completa de eventos" e clica nele')
    cy.get('[data-testid="button-testid"]').should('be.visible').click()
    cy.url().should('include', '/eventos')
    cy.go('back')

    cy.log('Verifica o link "Entre" para login')
    cy.contains('Entre').should('be.visible')

    cy.log('Interage com o carrossel de categorias')
    cy.get('.slick-slider:first-child .slick-next').click()
    cy.wait(500)
    cy.get('.slick-slider:first-child .slick-prev').click()

    cy.log('Clica na categoria "Imóveis"')
    cy.contains('Imóveis').should('be.visible').click()
    cy.url().should('include', '/imoveis')
    cy.go('back')

    cy.log('Verifica carrossel "Acontecendo agora"')
    cy.get('[data-list-name="Home - Acontecendo agora"]').should('be.visible')

    cy.log('Verifica carrossel "Próximos Eventos"')
    cy.get('[data-list-name="Home - Próximos Eventos"]').should('be.visible')

    cy.log('Navega nos eventos futuros com setas')
    cy.get('[data-list-name="Home - Próximos Eventos"] .slick-next').click()
    cy.wait(500)
    cy.get('[data-list-name="Home - Próximos Eventos"] .slick-prev').click()

    cy.log('Clica no botão "Ver Todos" em próximos eventos')
    cy.get('[data-testid="show-all-testid"]').should('be.visible').click()
    cy.url().should('include', '/eventos')
  })
})