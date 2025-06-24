/// <reference types="cypress" />

describe('Teste E2E - Página Inicial BidTV', () => {
  beforeEach(() => {
    cy.visit('https://bidtv.stage.superbid.net/')
  })

  it('Deve exibir o banner principal desktop e mobile', () => {
    cy.get('img[alt="main banner"]').should('have.attr', 'src').and('include', 'banner-bidtv.webp')
    cy.get('img[alt="main banner"]').should('have.attr', 'src').and('include', 'bannerMobile.webp')
  })

  it('Deve exibir o título "Próximos Eventos"', () => {
    cy.get('[data-testid="Highlights"]')
      .contains('Próximos Eventos')
      .should('be.visible')
  })

  it('Deve exibir o botão "Lista completa de eventos"', () => {
    cy.get('[data-testid="button-testid"]')
      .should('be.visible')
      .and('contain', 'Lista completa de eventos')
  })

  it('Deve exibir as categorias principais', () => {
    cy.contains('Navegue pelas categorias').should('be.visible')
    cy.get('[alt="categoria"]').should('have.length.at.least', 1)
    cy.get('[alt="categoria"]').first().should('be.visible')
  })

  it('Deve exibir a seção "Acontecendo agora" com pelo menos um card', () => {
    cy.contains('Acontecendo agora').should('be.visible')
    cy.get('[id^="gtm_bidtv_home_card_"]').first().should('be.visible')
    cy.get('[id^="gtm_bidtv_home_card_"]').first().contains('AO VIVO').should('exist')
  })

  it('Deve exibir o título "Entre na sua conta para ver seus favoritos"', () => {
    cy.contains('Entre').should('be.visible')
    cy.contains('na sua conta para ver seus favoritos').should('exist')
  })

  it('Deve exibir a seção "Próximos Eventos" com pelo menos um card e botão "Ver Todos"', () => {
    cy.contains('Próximos Eventos').should('be.visible')
    cy.get('[id^="gtm_bidtv_home_card_"]').should('have.length.at.least', 1)
    cy.get('[data-testid="show-all-testid"]').should('be.visible').and('contain', 'Ver Todos')
  })
})