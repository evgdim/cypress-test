describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
    cy.get('button[id="L2AGLb"]').click()// accept cookies
    cy.get('textarea[name=q]').type('my search')
  })
})