describe('Search user flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('When a user first visits the site it should have a header', () => {
    cy.contains('Freshly Fetched')
  });

});