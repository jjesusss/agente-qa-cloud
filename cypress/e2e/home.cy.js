/// <reference types="cypress" />

describe('Teste E2E da Home Page - Superbid BidTV', () => {
  const baseUrl = 'https://bidtv.stage.superbid.net';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Deve validar os banners principais (desktop e mobile)', () => {
    cy.get('div[data-testid="Highlights"]')
      .within(() => {
        cy.get('img[alt="main banner"]').should('have.attr', 'src').and('include', 'banner-bidtv.webp');
        cy.get('img[alt="main banner"]').should('have.attr', 'loading', 'lazy');
      });
  });

  it('Deve validar o bloco "Próximos Eventos"', () => {
    cy.contains('h3', 'Próximos Eventos').should('exist');

    cy.get('[data-list-name="Home - Próximos Eventos"]')
      .within(() => {
        cy.get('div[style*="background-image"]').should('have.length.greaterThan', 0);
        cy.contains('time', 'Hoje').should('exist');
        cy.contains('span', 'Super').should('exist');
        cy.get('button.slick-next').should('be.visible');
        cy.get('button.slick-prev').should('exist');
        cy.get('[data-testid="show-all-testid"]').should('exist').contains('Ver Todos');
      });
  });

  it('Deve validar o bloco "Acontecendo agora"', () => {
    cy.contains('h3', 'Acontecendo agora').should('exist');

    cy.get('[data-list-name="Home - Acontecendo agora"]').within(() => {
      cy.get('strong').each(($el) => {
        cy.wrap($el).should('contain.text', 'AO VIVO');
      });

      cy.get('[id^="gtm_bidtv_home_card_"]').should('have.length.greaterThan', 0);

      cy.get('time').first().should('contain.text', 'Hoje');
      cy.get('span').contains('Leilão').should('exist');
    });
  });

  it('Deve validar o carrossel de categorias', () => {
    cy.contains('h3', 'Navegue pelas categorias').should('exist');

    cy.get('[alt="categoria"]').should('have.length.greaterThan', 5);

    cy.get('button.slick-prev').should('exist');
    cy.get('button.slick-next').should('exist').click();

    cy.get('[data-index="6"]').should('have.attr', 'aria-hidden', 'false');
  });

  it('Deve validar o botão de "Lista completa de eventos"', () => {
    cy.get('div[data-testid="Highlights"]').within(() => {
      cy.get('[data-testid="button-testid"]').should('exist').and('contain.text', 'Lista completa de eventos');
    });
  });
});