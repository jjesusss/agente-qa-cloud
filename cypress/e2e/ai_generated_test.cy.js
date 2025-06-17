describe('Teste E2E da Página Inicial', () => {
  it('Deve visitar a página inicial e interagir com os elementos', () => {
    cy.visit('/');

    // Verificar se o banner principal está visível
    cy.get('div._desktopBanner_1ceul_144 img[alt="main banner"]').should('be.visible');

    // Verificar a seção de Destaques
    cy.get('[data-testid="Highlights"]').should('exist');
    cy.contains('Próximos Eventos').should('be.visible');
    
    // Clicar no botão "Lista completa de eventos"
    cy.get('[data-testid="button-testid"]').click();
    
    // Verificar se a ação foi realizada com sucesso (pode ser uma verificação com base na URL ou na presença de um novo elemento na página)
    cy.url().should('include', '/eventos');  // Assumindo que a URL muda para /eventos

    // Voltar para a página inicial
    cy.go('back');

    // Navegar pelas categorias
    cy.contains('Navegue pelas categorias').should('be.visible');
    cy.get('div._categoryContent_11e0j_154').first().click(); // Clicar na primeira categoria

    // Verificar se a página da categoria foi carregada (a lógica segue o fluxo esperado)
    cy.url().should('include', '/categoria'); // Assumindo que a URL muda para algum padrão de categoria
  });
});