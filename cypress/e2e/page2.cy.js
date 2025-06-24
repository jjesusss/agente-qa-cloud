describe('Teste de Formulário de Contato', () => {
    it('Deve verificar se o formulário de contato está presente e funcional', () => {
        cy.visit('https://example.com/page2');

        // Verifica se o formulário de contato está presente
        cy.get('form').should('exist');

        // Verifica os campos do formulário
        cy.get('input[name="nome"]').should('exist');
        cy.get('input[name="email"]').should('exist');
        cy.get('textarea[name="mensagem"]').should('exist');

        // Preenche o formulário
        cy.get('input[name="nome"]').type('Teste Nome');
        cy.get('input[name="email"]').type('teste@example.com');
        cy.get('textarea[name="mensagem"]').type('Esta é uma mensagem de teste.');

        // Envia o formulário
        cy.get('form').submit();

        // Verifica se o envio foi bem-sucedido (exemplo de verificação)
        cy.contains('Obrigado pela sua mensagem!').should('exist');
    });
});