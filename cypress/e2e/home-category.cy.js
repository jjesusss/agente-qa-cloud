describe('Exibir e interagir com categorias', () => {
  it('Deve acessar a página e interagir com o carrossel de categorias', () => {
    cy.visit('https://bidtv.stage.superbid.net/');
    cy.log('Página carregada');

    cy.contains('Navegue pelas categorias').should('be.visible');
    cy.log('Título de categorias visível');

    cy.get('main').find('button.slick-next').click();
    cy.wait(500);
    cy.get('main').find('button.slick-prev').click();
    cy.wait(500);
    cy.log('Navegação no carrossel de categorias realizada');

    cy.contains('Imóveis').should('be.visible').click();
    cy.log('Categoria "Imóveis" clicada');
  });
});