describe('List user flows', () => {

  beforeEach(() => {
    cy.loadList()
  });

  it('The url should be ${url.com}/markets', () => {
    cy.url().should('include', '/markets')
  });

});