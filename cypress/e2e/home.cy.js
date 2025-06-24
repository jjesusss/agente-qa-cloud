describe('Teste E2E da página inicial', () => {
    beforeEach(() => {
        cy.visit('https://bidtv.stage.superbid.net/');
    });

    it('Verifica o botão "Lista completa de eventos"', () => {
        cy.get('button[data-testid="button-testid"]').should('be.visible').click();
        // Adicionar verificação do redirecionamento aqui
    });

    it('Navegação no carrossel de categorias', () => {
        cy.get('.slick-arrow.slick-next').click(); // Navega para a direita
        cy.get('.slick-arrow.slick-prev').click(); // Navega para a esquerda
        cy.get('div._categoryContainer_11e0j_143').first().click(); // Clica no primeiro item da categoria
        // Adicionar verificação do redirecionamento aqui
    });

    it('Interação com cards "Acontecendo agora"', () => {
        cy.get('div._LiveCardContainer_tzphe_101').first().click(); // Clica no primeiro card
        // Adicionar verificação do redirecionamento aqui
    });

    it('Navegação no carrossel "Próximos Eventos"', () => {
        cy.get('.slick-arrow.slick-next').click(); // Navega para a direita
        cy.get('.slick-arrow.slick-prev').click(); // Navega para a esquerda
        cy.get('ul.slick-dots > li > button').first().click(); // Clica no dot da primeira página
        cy.get('div[data-testid="show-all-testid"]').click(); // Clica no botão "Ver Todos"
        // Adicionar verificação do redirecionamento aqui
    });

    it('Verifica o link "Entre" para login', () => {
        cy.get('h1._title_dtde6_133 ._titleUnderline_dtde6_150').contains('Entre').click(); // Clica no link "Entre"
        // Adicionar verificação do modal ou redirecionamento para a página de login aqui
    });
});