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

  it('The page should display the market schedule', () => {
    cy.contains('01/24/1986 to 12/31/2016')
      .contains('Sun: 8:30 AM-12:00 PM')
  });

  it('The page should display the market\'s products', () => {
    cy.contains('Concrete')
      .contains('Records')
      .contains('Bikes')
      .contains('Cat litter')
      .contains('Cat food')
  });

});