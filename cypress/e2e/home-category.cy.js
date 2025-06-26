describe('Exibir e interagir com categorias', () => {
  it('Deve exibir os cards de categoria e navegar usando as setas', () => {
    cy.visit('https://bidtv.stage.superbid.net/')

    // Espera as categorias carregarem
    cy.contains('Navegue pelas categorias').should('be.visible')
    cy.log('Verificando as categorias visíveis inicialmente')
    cy.contains('Imóveis').should('exist')
    cy.contains('Carros & Motos').should('exist')
    cy.contains('Caminhões & Ônibus').should('exist')

    // Interage com uma categoria visível
    cy.log('Clicando na categoria "Imóveis"')
    cy.contains('Imóveis').click()

    // Volta à home para continuar teste
    cy.visit('https://bidtv.stage.superbid.net/')
    cy.contains('Navegue pelas categorias').should('be.visible')

    // Clica na seta próxima para navegar
    cy.log('Clicando na seta próxima do carrossel')
    cy.get('.slick-next').first().click()
    cy.wait(1000)

    // Verifica nova categoria que estava oculta
    cy.log('Verificando nova categoria "Móveis e Decoração"')
    cy.contains('Móveis e Decoração').should('exist')

    // Clica na categoria visível após scroll
    cy.log('Clicando na categoria "Móveis e Decoração"')
    cy.contains('Móveis e Decoração').click()
  })
})