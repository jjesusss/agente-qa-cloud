describe('Testa formulário de contato na página da Superbid', () => {
  it('Verifica a presença e funcionalidade do formulário de contato', () => {
    cy.visit('https://example.com/page2');

    // Verifica se o formulário de contato está presente
    cy.get('form').should('exist');

    // Preencher o formulário se presente
    cy.get('input[name="nome"]').type('Teste Nome');
    cy.get('input[name="email"]').type('teste@example.com');
    cy.get('textarea[name="mensagem"]').type('Esta é uma mensagem de teste.');

    // Enviar o formulário
    cy.get('form').submit();

    // Verifica se após o envio uma mensagem de sucesso ou similar é exibida
    cy.contains('Mensagem enviada com sucesso').should('exist');
  });
});