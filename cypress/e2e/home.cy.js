/// <reference types="cypress" />

describe('Teste E2E - Página Inicial BidTV', () => {
  beforeEach(() => {
    cy.visit('https://bidtv.stage.superbid.net');
  });

  it('Valida presença dos banners principais (desktop e mobile)', () => {
    cy.get('[data-testid="Highlights"] img[alt="main banner"]')
      .should('have.attr', 'src')
      .and('include', 'banner-bidtv.webp');

    cy.get('[data-testid="Highlights"] img[alt="main banner"]')
      .should('have.attr', 'src')
      .and('include', 'bannerMobile.webp');
  });

  it('Valida seção de próximos eventos', () => {
    cy.get('[data-testid="Highlights"]').within(() => {
      cy.contains('Próximos Eventos').should('be.visible');
      cy.contains('Veja os próximos eventos na Superbid Exchange').should('be.visible');
    });
  });

  it('Valida botão "Lista completa de eventos"', () => {
    cy.get('[data-testid="button-testid"]').should('be.visible').and('contain.text', 'Lista completa de eventos');
    cy.get('[data-testid="button-testid"]').click();
    cy.url().should('include', '/eventos'); // ajuste conforme a URL correta de redirecionamento
  });

  it('Valida existência de carrossel de eventos ao carregar', () => {
    cy.get('[data-testid="Highlights"]').should('exist');
    cy.get('[data-testid="Highlights"] button').should('be.visible');
  });

  it('Valida mensagem de login para ver favoritos', () => {
    cy.contains('Entre').should('be.visible');
    cy.contains('na sua conta para ver seus favoritos').should('be.visible');
  });

  it('Valida exibição dos blocos de eventos com Skeletons (placeholder)', () => {
    cy.get('main')
      .find('span')
      .filter((_, el) => {
        const height = parseInt(el.style.height, 10);
        return height >= 20 && el.innerText === '';
      })
      .should('have.length.greaterThan', 0);
  });
});