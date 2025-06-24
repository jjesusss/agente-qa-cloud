describe('Testes E2E na página BidTV', () => {
  it('Deve acessar a página e interagir com os elementos principais', () => {
    cy.visit('https://bidtv.stage.superbid.net/')

    // Verifica e clica no botão "Lista completa de eventos"
    cy.get('[data-testid="button-testid"]').should('be.visible').click()
    cy.url().should('include', '/eventos')

    // Retorna para a home
    cy.visit('https://bidtv.stage.superbid.net/')

    // Verifica presença do carrossel de categorias
    cy.get('h3').contains('Navegue pelas categorias').should('be.visible')
    cy.log('Interagindo com carrossel de categorias')

    // Clica no botão de navegação direita
    cy.get('h3').contains('Navegue pelas categorias').parent().within(() => {
      cy.get('button.slick-next').should('exist').click()
    })

    // Clica no botão de navegação esquerda
    cy.get('h3').contains('Navegue pelas categorias').parent().within(() => {
      cy.get('button.slick-prev').should('exist').click()
    })

    // Clica no item de categoria "Carros & Motos"
    cy.contains('Carros & Motos').parents('[data-index]').first().click()
    cy.url().should('include', '/')

    // Retorna para a home
    cy.visit('https://bidtv.stage.superbid.net/')

    // Verifica carrossel "Acontecendo agora"
    cy.get('[data-list-name="Home - Acontecendo agora"]').should('be.visible')

    // Verifica carrossel "Próximos Eventos" e interage com as setas
    cy.get('[data-list-name="Home - Próximos Eventos"]').should('be.visible')
    cy.get('[data-list-name="Home - Próximos Eventos"]').within(() => {
      cy.get('button.slick-next').should('exist').click()
      cy.get('button.slick-prev').should('exist').click()
    })

    // Clica no botão "Ver Todos"
    cy.get('[data-testid="show-all-testid"]').should('be.visible').click()
    cy.url().should('include', '/')

    // Verifica se os botões de paginação do carrossel existem
    cy.get('ul.slick-dots').find('button').should('have.length.at.least', 1)

    // Clica no texto "Entre" para simular login
    cy.contains("Entre").parents('h1').should('be.visible').click()
  })
})