describe('Teste de login com credenciais inválidas', () => {
    it('Deve exibir mensagem de erro para login inválido', () => {
        cy.visit('/');
        
        cy.get('button[data-testid="button-testid"]').click(); // Clica no botão de Login
        
        cy.get('input[type="email"]').type('teste.invalido@superbid.net'); // Preenche o e-mail
        cy.get('input[type="password"]').type('senhaerrada123'); // Preenche a senha
        
        cy.get('button[type="submit"]').click(); // Clica no botão de submeter login
        
        cy.contains('Usuário ou senha inválida').should('be.visible'); // Verifica se a mensagem de erro aparece
    });
});