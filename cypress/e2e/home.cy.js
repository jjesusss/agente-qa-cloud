describe('Teste E2E da página Superbid Exchange', function() {
  
  beforeEach(function() {
    cy.visit('https://bidtv.stage.superbid.net/');
  });

  it('Valida o banner principal', function() {
    cy.get('img[alt="main banner"]').should('have.attr', 'src', 'https://bidtv.stage.superbid.net/images/banner-bidtv.webp');
  });

  it('Verifica o botão "Lista completa de eventos"', function() {
    cy.get('button[data-testid="button-testid"]').should('contain.text', 'Lista completa de eventos').click();
    // Após o clique, adicionar verificação para garantir que estamos na página/lista de eventos completa
  });

  it('Valida as setas de navegação do carrossel "Navegue pelas categorias"', function() {
    cy.get('.slick-arrow.slick-next').click();
    // Aguarde o carrossel rolar. Poderia adicionar verificações para garantir que as categorias mudaram
  });

  it('Interage e verifica a resposta ao selecionar categorias', function() {
    cy.get('span').contains('Imóveis').click();
    // Verifique se estamos na página correspondente de "Imóveis"
  });

  it('Testa o botão "Ver Todos" na seção "Próximos Eventos"', function() {
    cy.get('div[data-testid="show-all-testid"]').click();
    // Após o clique, adicionar verificação para garantir que todos os eventos estão visíveis/mostrados
  });

  it('Verifica os botões de paginação do carrossel "Próximos Eventos"', function() {
    cy.get('ul.slick-dots li').eq(1).click();
    // Verifique se outro conjunto de eventos é exibido, indicando mudança na paginação
  });
});