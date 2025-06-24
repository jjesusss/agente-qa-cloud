describe('Testes E2E na Página Inicial', () => {
    it('Deve validar a renderização e interações na página inicial', () => {
        // Passo 1: Visita a página inicial
        cy.visit('/');

        // Passo 2: Valida renderização de banners desktop e mobile
        cy.get('div._desktopBanner_1ceul_144 img').should('be.visible');
        cy.get('div._mobileBanner_1ceul_157 img').should('be.visible');

        // Passo 3: Verifica conteúdo do bloco "Próximos Eventos"
        cy.get('div._videoInfo_1ceul_162 span').contains('Próximos Eventos').should('be.visible');

        // Passo 4: Valida a presença e clica no botão "Lista completa de eventos"
        cy.get('button[data-testid="button-testid"]').should('be.visible').click();

        // Passo 5: Interage com o carrossel de categorias, validando pelo menos um item visível
        cy.get('div.MuiBox-root.css-1afp10f').find('div.MuiStack-root').first().should('be.visible');

        // Passo 6: Interage com o carrossel de eventos ao vivo ("Acontecendo agora")
        cy.get('div._FeaturedLivesContainer_7mytm_129').find('div.MuiBox-root').first().should('be.visible');

        // Passo 7: Valida o botão "Ver Todos" em "Próximos Eventos"
        cy.get('div._videoInfo_1ceul_162').within(() => {
            cy.get('button').contains('Ver Todos').should('be.visible');
        });
    });
});