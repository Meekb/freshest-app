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

  it('Should have a form that takes a 5 digit number between 1 and 99999', 
  () => {
    cy.get('input[name="zip"]')
      .type('{enter}')
  });

  it('The zip input should not take a number less than 1', () => {
    cy.get('input[name="zip"]')
      .type('00000').type('{enter}')
  });

  it('The zip input should not take a number greater than 100000', () => {
    cy.get('input[name="zip"]')
      .type('100000').type('{enter}')
  });

  it('The submit button is disabled if the number isn\'t 5 digits in length',
  () => {

  });

  it('The form input should only take numbers', () => {
    cy.get('input[name="zip"]')
      .type('abababa')
      .should('have.value', '')
  });

});