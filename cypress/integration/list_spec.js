describe('List user flows', () => {

  beforeEach(() => {
    cy.loadList()
  });

  it('The url should be ${url.com}/markets', () => {
    cy.url().should('include', '/markets')
  });

  it('It should display the name of the app', 
  () => {
    cy.get('h1').contains('Freshly Fetched')
  });

  it('A user should see a list of markets', () => {
    cy.get('article').should('have.length', 5)
  });

  it('Each market should have a name', () => {
    cy.get('article[id="1000006"]')
      .contains('Alex\'s Main Street Stand')
      .get('article[id="1000066"]')
      .contains('Ellen\'s Veg Table at Depot Park')
      .get('article[id="1000666"]')
      .contains('Gaby\'s Shed of Honey')
      .get('article[id="1006666"]')
      .contains('Claire Springs Farmers Market')
  });

  it('Each market should have a distance', () => {
    cy.get('article[id="1000006"]')
      .contains('6.6 miles away')
      .get('article[id="1000066"]')
      .contains('16.6 miles away')
      .get('article[id="1000666"]')
      .contains('26.6 miles away')
      .get('article[id="1006666"]')
      .contains('36.6 miles away')
  });

});