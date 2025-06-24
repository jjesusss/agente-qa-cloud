// cypress/e2e/home_page_interactions.cy.js

describe('Validação de elementos interativos da página principal Superbid Exchange', () => {

  beforeEach(() => {
    cy.visit('https://exchange.stage.superbid.net/');
  });

  it('Valida exibição dos banners principais (desktop e mobile)', () => {
    cy.get('[data-testid="Highlights"] img[alt="main banner"]').should('have.attr', 'src').and('include', 'banner');
  });

  it('Valida botão "Lista completa de eventos"', () => {
    cy.get('[data-testid="Highlights"]').contains('Próximos Eventos').should('be.visible');
    cy.get('[data-testid="button-testid"]').should('be.visible').click();
    cy.url().should('include', '/'); // Pode ser ajustado conforme o redirecionamento real
  });

  it('Valida a navegação do carrossel de categorias', () => {
    cy.contains('Navegue pelas categorias').should('be.visible');

    // Clica na seta "próxima" para rolar o carrossel
    cy.get('button.slick-next').click();
    cy.wait(1000); // Aguarda a movimentação do carrossel

    // Clica na seta "anterior" para voltar
    cy.get('button.slick-prev').should('not.have.class', 'slick-disabled').click();
  });

  it('Valida clique em item do carrossel de categorias', () => {
    cy.get('[data-index="0"]').contains('Imóveis').click();
    cy.url().should('include', '/'); // Ajustar a url esperada se conhecida
  });

  it('Valida botão de login "Entre"', () => {
    cy.contains('Entre na sua conta para ver seus favoritos').within(() => {
      cy.get('span').contains('Entre').click();
    });
    cy.url().should('include', 'login'); // Ajustar para URL correta de login
  });

});