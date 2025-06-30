describe('Página Inicial - Banner Highlights', () => {
  it('Exibir Banner Highlights - Dispositivo: desktop', () => {
    cy.visit('https://bidtv.stage.superbid.net/')

    cy.log('Verifica se o destaque Highlights está visível')
    cy.get('[data-testid="Highlights"]').should('be.visible')

    cy.log('Verifica se o banner desktop está presente')
    cy.get('[data-testid="Highlights"] img[alt="main banner"]').should('be.visible')
  })
})