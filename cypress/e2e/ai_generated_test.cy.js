Cypress.Commands.add("validateBanner", () => {
    cy.get('div._container_p0nid_1').should('be.visible'); // Verifica banner desktop
    cy.get('div._container_qenym_129').should('be.visible'); // Verifica banner mobile
});

describe('Teste E2E', () => {
    it('Valida a página inicial e suas funcionalidades', () => {
        // a. Visita a página inicial
        cy.visit('/');

        // b. Valida renderização de banners desktop e mobile
        cy.validateBanner();

        // c. Verifica conteúdo do bloco "Próximos Eventos"
        cy.get('div._container_qenym_129').contains('Próximos Eventos').should('be.visible');

        // d. Valida a presença e clique do botão "Lista completa de eventos"
        cy.get('button').contains('Lista completa de eventos').should('be.visible').click();

        // e. Interage com o carrossel de categorias, validando pelo menos um item visível
        cy.get('.carousel-categories').find('.category-item').first().should('be.visible');

        // f. Interage com o carrossel de eventos ao vivo ("Acontecendo agora")
        cy.get('.carousel-live-events').find('.event-item').first().should('be.visible').click();

        // g. Valida o botão "Ver Todos" em "Próximos Eventos"
        cy.get('button').contains('Ver Todos').should('be.visible');
    });
});