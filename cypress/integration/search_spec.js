describe('Search user flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('The url should be url/', 
  () => {
    cy.url().should('include', '/')
  });

  it('When a user first visits the site it should display the name of the app', 
  () => {
    cy.get('h1').contains('Freshly Fetched')
  });

  it('The app title should be a link home', 
  () => {
    cy.get('h1').click()
      .url().should('include', '/')
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

  it('The zip input is empty and the submit button is disabled by default', 
  () => {
    cy.get('button')
      .should('be.disabled')
  });

  it('The submit button is disabled if the number is less than 1', () => {
    cy.get('input[name="zip"]')
      .type('-12345')
      .get('button')
      .should('be.disabled')
  });

  it('The submit button is disabled if the number is greater than 100000', 
  () => {
    cy.get('input[name="zip"]')
    .type('100000')
    .get('button')
    .should('be.disabled')
  });

  it('The submit button is disabled if the number isn\'t a whole number', 
  () => {
    cy.get('input[name="zip"]')
    .type('100.00')
    .get('button')
    .should('be.disabled')
  });

  it('The submit button is disabled if the number isn\'t 5 digits in length',
  () => {
    cy.get('input[name="zip"]')
      .type('1000')
      .get('button')
      .should('be.disabled')
  });

  it('The form input should only take numbers', () => {
    cy.get('input[name="zip"]')
      .type('abababa')
      .should('have.value', '')
  });

  it('The form contains a drop down for a mileage filter that has a default value', 
  () => {
    cy.get('select')
      .should('have.value', '15')
  });

  it('User can choose a different value than the default value', 
  () => {
    cy.get('select')
      .select('25')
      .should('have.value', '25')
  });

  it('The submit button routes the user to the List component', () => {
    cy.get('input[name="zip"]')
      .type('00001')
      .get('button').click()
      .url().should('include', '/markets')
  });

  it('The homepage can be fully navigated using tab', () => {
    cy.get('body').tab()
      .type('00001').tab().tab()
      .type('{enter}')
      .url().should('include', '/markets')
  });

});