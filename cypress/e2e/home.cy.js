// cypress/e2e/homepage_elements.cy.js

describe('Teste E2E - Página Inicial da Superbid', () => {

  beforeEach(() => {
    cy.visit('https://bidtv.stage.superbid.net/');
  });

  it('Deve exibir os banners principais (desktop e mobile)', () => {
    cy.get('[data-testid="Highlights"] img[alt="main banner"]')
      .should('have.attr', 'src')
      .and('include', 'banner-bidtv.webp');
    cy.get('[data-testid="Highlights"] img[alt="main banner"]')
      .should('have.attr', 'src')
      .and('include', 'bannerMobile.webp');
  });

  it('Deve validar presença e funcionalidade do botão "Lista completa de eventos"', () => {
    cy.get('button[data-testid="button-testid"]')
      .should('be.visible')
      .click();

    cy.url().should('include', '/events'); // ajustar conforme a rota real pós-clique
  });

  it('Deve navegar pelo carrossel de categorias usando as setas', () => {
    cy.get('button.slick-arrow.slick-next').click();
    cy.wait(500);
    cy.get('button.slick-arrow.slick-prev').click();
  });

  it('Deve clicar em uma categoria e validar redirecionamento ou alguma ação', () => {
    cy.get('[data-index="1"]')
      .should('be.visible')
      .click();
    cy.url().should('include', '/category'); // validar rota conforme aplicação
  });

  it('Deve validar card "Acontecendo agora"', () => {
    cy.get('[data-list-name="Home - Acontecendo agora"] ._LiveCardContainer_tzphe_101')
      .first()
      .should('be.visible')
      .click({ force: true });

    cy.url().should('include', '/evento'); // ajustar conforme rota final
  });

  it('Deve navegar pelo carrossel "Próximos Eventos"', () => {
    cy.get('[data-list-name="Home - Próximos Eventos"] button.slick-next').click();
    cy.wait(500);
    cy.get('[data-list-name="Home - Próximos Eventos"] button.slick-prev').click();
    cy.get('[data-list-name="Home - Próximos Eventos"] ul.slick-dots li button')
      .eq(1).click();
  });

  it('Deve validar funcionalidade do botão "Ver Todos"', () => {
    cy.get('[data-testid="show-all-testid"]')
      .should('be.visible')
      .click();
    cy.url().should('include', '/eventos'); // ajustar rota conforme aplicação
  });

  it('Deve validar clique no link "Entre" para login', () => {
    cy.contains('Entre')
      .should('have.css', 'cursor', 'pointer')
      .click();

    cy.url().should('include', '/login'); // ou validar exibição de modal
  });

});