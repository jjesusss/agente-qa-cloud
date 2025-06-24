describe('Teste E2E no site Superbid Exchange', () => {
  beforeEach(() => {
    cy.visit('https://bidtv.stage.superbid.net/');
  });

  it('Valida o banner principal nos dispositivos desktop e mobile', () => {
    cy.get('._desktopBanner_1ceul_144 img')
      .should('have.attr', 'src', 'https://bidtv.stage.superbid.net/images/banner-bidtv.webp')
      .and('have.attr', 'alt', 'main banner');
    cy.viewport('iphone-6');
    cy.get('._mobileBanner_1ceul_157 img')
      .should('have.attr', 'src', 'https://bidtv.stage.superbid.net/images/bannerMobile.webp')
      .and('have.attr', 'alt', 'main banner');
  });

  it('Verifica o botão "Lista completa de eventos"', () => {
    cy.get('[data-testid="button-testid"]').should('be.visible').click();
    // Adicione uma verificação para confirmar se foi redirecionado corretamente
  });

  it('Navega pelas categorias usando as setas do carrossel', () => {
    cy.get('.slick-arrow.slick-next').click();
    cy.get('.slick-arrow.slick-prev').click().should('not.have.class', 'slick-disabled');
  });

  it('Verifica navegação dentro das categorias do slider', () => {
    cy.get('._categoryContainer_11e0j_143').first().click();
    // Adicione uma verificação para confirmar a navegação correta
  });

  it('Valida interação com elementos de eventos "Acontecendo agora"', () => {
    cy.get('._FeaturedLivesContainer_7mytm_129[data-list-name="Home - Acontecendo agora"] .slick-active')
      .each(($el) => {
        cy.wrap($el).click();
        // Adicione uma verificação para confirmar a navegação correta
      });
  });

  it('Valida interação com elementos de "Próximos Eventos"', () => {
    cy.get('._FeaturedLivesContainer_7mytm_129[data-list-name="Home - Próximos Eventos"] .slick-active')
      .each(($el) => {
        cy.wrap($el).click();
        // Adicione uma verificação para confirmar a navegação correta
      });
  });

  it('Verifica o botão "Ver Todos" nos eventos', () => {
    cy.get('[data-testid="show-all-testid"]').should('be.visible').click();
    // Adicione uma verificação para confirmar a expansão da lista
  });

  it('Interage com os indicadores de página do slider', () => {
    cy.get('.slick-dots li').eq(1).click();
    cy.get('.slick-dots li').eq(0).should('not.have.class', 'slick-active');
  });
});