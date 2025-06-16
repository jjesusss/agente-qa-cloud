describe('Login com credenciais inválidas', () => {
    it('Deve mostrar mensagem de erro ao tentar fazer login com dados inválidos', () => {
        cy.visit('/');
        cy.get('button').contains('Login').click();
        cy.get('input[type="email"]').type('teste.invalido@superbid.net');
        cy.get('input[type="password"]').type('senhaerrada123');
        cy.get('button[type="submit"]').click();
        cy.contains('Usuário ou senha inválida').should('be.visible');
    });
});