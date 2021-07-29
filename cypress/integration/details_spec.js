describe('Details user flows', () => {

  beforeEach(() => {
    cy.loadList()
      .get('article[id="1000006"]').click()
  });

  it('The url should be ', () => {
    cy.url().should('include', '/1000006')
  });

  it('It should display the name of the app', () => {
    cy.get('h1').contains('Freshly Fetched')
  });

  it('The page should have a back button', () => {
    cy.get('button')
  });

  it('The page should display the market name', () => {
    cy.contains('Alex\'s Main Street Stand')
  });

  it('The page should display the market address', () => {
    cy.contains('6666 NW 66th Street, Gainesville, Florida, 32666')
  });

});