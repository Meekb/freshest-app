describe('Search user flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('When a user first visits the site it should have a header', () => {
    cy.contains('Freshly Fetched')
  });

  it('When a user first visits the site it should contain instructions', () => {
    cy.contains('Enter your zip code to find markets near you')
  });

  it('Should have a form that takes a 5 digit number between 1 and 99999', 
  () => {
    cy.get('input[name="zip"]')
      .type('10101')
      .should('have.value', '10101')
  });

});