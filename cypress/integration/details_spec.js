describe('Details user flows', () => {

  beforeEach(() => {
    cy.loadList()
      .get('article[id="1000006"]').click()
  });

  it('The url should be url/markets/:marketID', () => {
    cy.url().should('include', '/1000006')
  });

  it.only('Should show an error if id is invalid', () => {
    cy.visit('localhost:3000/markets/00e00000')
    cy.get('h2').contains('Uh oh, no market available!')
  });

  it('It should display the name of the app', () => {
    cy.get('h1').contains('Freshly Fetched')
  });

  it('The app title should be a link home', 
  () => {
    cy.get('h1').click()
      .url().should('include', '/')
  });

  it('The page should have a back button', () => {
    cy.get('.pin-icon').click()
      .url().should('include', '/markets')
  });

  it('The page should display the market name', () => {
    cy.contains('Alex\'s Main Street Stand')
  });

  it('The page should display the market address', () => {
    cy.get('.address').contains('6666 NW 66th Street')
  });

  it('The page should display the market schedule', () => {
    cy.get('.schedule').contains('Sun')
  });

  it('The page should display the market\'s products', () => {
    cy.get('.list').should('have.length', 4)
     cy.get('.list').contains('Records')
     cy.get('.list').contains('Bikes')
     cy.get('.list').contains('Cat litter')
     cy.get('.list').contains('Cat food')
  });

  it('The page should have a google maps link', () => {
    cy.get('.location-details').children('a').should('have.attr', 'href').and('includes', 'https://goo.gl/maps/eAZ2jAqNNGey8JTE9')
  });

});