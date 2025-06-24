describe('Página Inicial - Banner e Botão "Lista completa de eventos"', () => {
  it('Deve exibir o banner principal e redirecionar para /up-comming/ ao clicar no botão', () => {
    cy.visit('https://bidtv.stage.superbid.net/')
    cy.log('Verifica se o banner principal está visível')
    cy.get('[data-testid="Highlights"] img[alt="main banner"]').should('be.visible')

    cy.log('Verifica e clica no botão "Lista completa de eventos"')
    cy.get('[data-testid="button-testid"]').should('be.visible').click()

    cy.log('Verifica se o redirecionamento para /up-comming/ ocorreu')
    cy.url().should('include', '/up-comming/')
  })
})