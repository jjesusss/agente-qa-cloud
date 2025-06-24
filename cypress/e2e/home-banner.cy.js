describe('Banner e botão "Lista completa de Eventos"', () => {
  it('Deve carregar o banner inicial e redirecionar para /up-comming/ ao clicar no botão', () => {
    cy.visit('https://bidtv.stage.superbid.net/')
    cy.log('Verificando o carregamento do banner inicial')
    cy.get('[data-testid="Highlights"]').should('be.visible')
    cy.get('[data-testid="button-testid"]').should('be.visible').click()
    cy.url().should('include', '/up-comming')
  })
})