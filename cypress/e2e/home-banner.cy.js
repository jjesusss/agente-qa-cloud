describe('Exibir Banner Highlights - Desktop', () => {
  it('Deve exibir o banner principal na seção "Highlights"', () => {
    cy.visit('https://bidtv.stage.superbid.net/')
    cy.viewport(1280, 720)
    cy.log('Verifica se o banner desktop está visível')
    cy.get('[data-testid="Highlights"]')
      .within(() => {
        cy.get('img[alt="main banner"]').should('be.visible')
      })
  })
})