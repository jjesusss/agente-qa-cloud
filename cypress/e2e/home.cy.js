describe('Teste E2E da página inicial do site BidTV', () => {
  before(() => {
    cy.visit('https://bidtv.stage.superbid.net/');
  });

  it('Deve carregar a página inicial corretamente', () => {
    cy.title().should('include', 'Acompanhe e dê lances em eventos todos os dias.');
  });

  it('Deve exibir o logotipo corretamente', () => {
    cy.get('[alt="logo"]').should('be.visible');
  });

  it('Deve exibir o campo de busca', () => {
    cy.get('input[placeholder="Busque pelo código do evento ou produto."]').should('exist');
  });

  it('Deve exibir botão de Entrar', () => {
    cy.contains('Entrar').should('be.visible');
  });

  it('Deve exibir o banner principal na versão desktop ou mobile', () => {
    cy.get('img[alt="main banner"]').should('be.visible');
  });

  it('Deve exibir o título "Próximos Eventos"', () => {
    cy.contains('Próximos Eventos').should('be.visible');
  });

  it('Deve exibir o botão "Lista completa de eventos"', () => {
    cy.contains('Lista completa de eventos').should('be.visible');
  });

  it('Deve exibir a seção "Navegue pelas categorias"', () => {
    cy.contains('Navegue pelas categorias').should('be.visible');
  });

  it('Deve exibir a seção "Acontecendo agora"', () => {
    cy.contains('Acontecendo agora').should('be.visible');
  });

  it('Deve exibir seção de rodapé com o texto "Superbid"', () => {
    cy.get('footer').contains('Superbid').should('be.visible');
  });
});