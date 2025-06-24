describe('Teste E2E para Superbid Exchange', () => {
  beforeEach(() => {
    cy.visit('https://bidtv.stage.superbid.net/');
  });

  it('Valida o banner principal', () => {
    // Verifica o banner desktop
    cy.get('[alt="main banner"]').should('have.attr', 'src').and('include', 'banner-bidtv.webp');

    // Verifica o banner mobile
    cy.get('[alt="main banner"]').should('have.attr', 'src').and('include', 'bannerMobile.webp');
  });

  it('Valida o botão "Lista completa de eventos"', () => {
    // Clica no botão e verifica o redirecionamento
    cy.get('[data-testid="button-testid"]').click();
    cy.url().should('include', '/eventos-completos');
  });

  it('Interage com o carrossel de categorias', () => {
    // Clica no botão para avançar no carrossel e valida que ele muda de posição
    cy.get('.slick-next').click();
    cy.get('.slick-list').should('have.css', 'transform', 'matrix(1, 0, 0, 1, -174, 0)');

    // Clica no botão para retroceder no carrossel e valida que ele retorna à posição original
    cy.get('.slick-prev').click();
    cy.get('.slick-list').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)');
  });

  it('Valida interação com categorias', () => {
    // Clica em uma categoria e valida o redirecionamento
    cy.get('span').contains('Imóveis').click();
    cy.url().should('include', '/categoria/imoveis');
  });

  it('Valida o link de login', () => {
    // Clica no texto "Entre" e valida redirecionamento ou modal de login
    cy.contains('Entre').click();
    cy.url().should('include', '/login');
  });
});