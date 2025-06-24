describe('Teste E2E Exchange Superbid', () => {
  beforeEach(() => {
    cy.visit('https://exchange.stage.superbid.net');
  });

  it('Valida o carregamento inicial e elementos principais da página', () => {
    // Verifica se o root foi montado corretamente
    cy.get('#root').should('exist');

    // Verifica se o conteúdo principal está presente
    cy.get('main').should('exist');

    // Verifica se existe um container visível em tela cheia
    cy.get('main div')
      .filter((index, el) => {
        return getComputedStyle(el).height === '100vh' && getComputedStyle(el).display === 'flex';
      })
      .should('have.length.at.least', 1)
      .and('be.visible');
  });

  it('Valida banners (assumindo que são carregados dinamicamente)', () => {
    // Espera pelos banners se forem carregados dinamicamente
    cy.get('#root').within(() => {
      cy.get('img', { timeout: 10000 }).should('exist').and('be.visible');
    });
  });

  it('Valida existência e funcionamento dos botões principais', () => {
    // Espera por botões visíveis
    cy.get('button', { timeout: 10000 }).should('have.length.at.least', 1).each(($btn) => {
      cy.wrap($btn).should('be.visible');
    });
  });

  it('Valida se existe um carrossel na página (baseado em imagens ou listas)', () => {
    // Procura por elementos de carrossel (assumindo presença de lista ou sliders)
    cy.get('#root').within(() => {
      cy.get('[aria-roledescription="carousel"], [role="region"], ul, ol')
        .filter((index, el) => el.childElementCount > 1)
        .first()
        .should('exist')
        .and('be.visible');
    });
  });

  it('Valida blocos de eventos com informações exibidas', () => {
    // Busca por elementos com datas ou nomes (assumindo <section>, <article> ou <div>)
    cy.get('#root').within(() => {
      cy.get('section, article, div')
        .filter((index, el) => {
          return /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/.test(el.innerText) || /evento/i.test(el.innerText.toLowerCase());
        })
        .should('have.length.at.least', 1);
    });
  });

  it('Valida a aparição de modais ao interagir com algum botão (se aplicável)', () => {
    cy.get('button').then(($btnList) => {
      if ($btnList.length) {
        cy.wrap($btnList.first()).click();

        cy.get('div')
          .filter((index, el) => getComputedStyle(el).zIndex === '1400' && getComputedStyle(el).display !== 'none')
          .should('exist');
      }
    });
  });
});