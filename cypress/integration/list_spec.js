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

  it('The app title should be a link home', 
  () => {
    cy.get('h1').click()
      .url().should('include', '/')
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
      .get('article[id="1066666"]')
      .contains('ASHville Downtown Market')
  });

  // it('Each market should have a schedule', () => {
  //   cy.get('article[id="1000006"]')
  //     .contains('Sun: 8:30 AM-12:00 PM')
  //     .get('article[id="1000066"]')
  //     .contains('Mon: 8:30 AM-12:00 PM')
  //     .get('article[id="1000666"]')
  //     .contains('Tue: 8:30 AM-12:00 PM')
  //     .get('article[id="1006666"]')
  //     .contains('Wed: 8:30 AM-12:00 PM')
  //     .get('article[id="1066666"]')
  //     .contains('Thu: 8:30 AM-12:00 PM')
  // });

  it('A user should be able to click a market card and be taken to a details page', 
  () => {
    cy.get('article[id="1000006"]').click()
      .url().should('include', '/1000006')
  });

});