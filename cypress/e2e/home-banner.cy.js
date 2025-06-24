describe('Exibir Banner Highlights', () => {
  it('Deve carregar o destaque principal com botão de lista completa de eventos', () => {
    cy.visit('https://bidtv.stage.superbid.net/')

    cy.log('Verifica se o banner de destaque está visível')
    cy.get('[data-testid="Highlights"]').should('be.visible')

    cy.log('Verifica se o botão "Lista completa de eventos" está presente e clica nele')
    cy.get('[data-testid="button-testid"]')
      .should('be.visible')
      .contains('Lista completa de eventos')
      .click()
  })
})