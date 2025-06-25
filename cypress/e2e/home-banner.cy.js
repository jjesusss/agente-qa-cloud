describe('Página BidTV - Exibe Banner Highlights', () => {
  it('Deve exibir o banner highlights corretamente no desktop', () => {
    cy.viewport(1280, 720)
    cy.visit('https://bidtv.stage.superbid.net/')

    cy.log('Verifica se o banner desktop está visível')
    cy.get('img[alt="main banner"]').should('be.visible')

    cy.log('Verifica se o botão "Lista completa de eventos" está visível e clicável')
    cy.get('[data-testid="button-testid"]').should('be.visible').and('contain', 'Lista completa de eventos')
  })
})