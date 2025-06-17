describe('Teste E2E da Página Inicial', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Valida a renderização dos banners e interações na página inicial', () => {
        // Valida a renderização de banners desktop e mobile
        cy.get('div._desktopBanner_1ceul_144').should('be.visible');
        cy.get('div._mobileBanner_1ceul_157').should('be.visible');

        // Verifica conteúdo do bloco "Próximos Eventos"
        cy.contains('Próximos Eventos').should('be.visible');
        cy.contains('Veja os próximos eventos na Superbid Exchange').should('be.visible');

        // Valida a presença e clique do botão "Lista completa de eventos"
        cy.get('button[data-testid="button-testid"]').should('be.visible').click();

        // Interage com o carrossel de categorias e valida pelo menos um item visível
        cy.get('.slick-slider').find('.slick-slide.slick-active').first().should('be.visible');

        // Interage com o carrossel de eventos ao vivo ("Acontecendo agora")
        cy.get('._FeaturedLivesContainer_7mytm_129').should('be.visible');

        // Valida o botão "Ver Todos" em "Próximos Eventos"
        cy.get('button[data-testid="button-testid"]').contains('Lista completa de eventos').should('be.visible');
    });
});