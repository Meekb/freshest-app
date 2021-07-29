describe('Search user flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('When a user first visits the site it should display the name of the app', 
  () => {
    cy.get('h1').contains('Freshly Fetched')
  });

  it('When a user first visits the site it should contain instructions', () => {
    cy.contains('Enter your zip code to find markets near you')
  });

});