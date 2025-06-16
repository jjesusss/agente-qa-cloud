describe('Teste E2E de Login com Credenciais Inválidas', () => {
  it('Deve exibir mensagem de erro ao tentar logar com credenciais inválidas', () => {
    cy.visit('/'); // a. Visita a página inicial
    cy.get('button#login').click(); // b. Clica no botão de Login
    cy.get('input#email').type('teste.invalido@superbid.net'); // c. Preenche o e-mail
    cy.get('input#senha').type('senhaerrada123'); // c. Preenche a senha
    cy.get('button#submit-login').click(); // d. Clica no botão para submeter o login
    cy.contains('Usuário ou senha inválida').should('be.visible'); // e. Verifica a mensagem de erro
  });
});