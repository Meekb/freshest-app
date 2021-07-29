describe('Search user flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('When a user first visits the site it should display the name of the app', 
  () => {
    cy.get('h1').contains('Freshly Fetched')
  });

});