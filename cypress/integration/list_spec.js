describe('List user flows', () => {

  beforeEach(() => {
    let url = 'https://search.ams.usda.gov/farmersmarkets/v1/data.svc/'
    cy.intercept('GET', `${url}zipSearch?zip=00001`, { fixture: 'markets.json' })
      .intercept('GET', `${url}mktDetail?id=1000006`, { fixture: 'market01.json' })
      .intercept('GET', `${url}mktDetail?id=1000066`, { fixture: 'market02.json' })
      .intercept('GET', `${url}mktDetail?id=1000666`, { fixture: 'market03.json' })
      .intercept('GET', `${url}mktDetail?id=1006666`, { fixture: 'market04.json' })
      .intercept('GET', `${url}mktDetail?id=1066666`, { fixture: 'market05.json' })
      .intercept('GET', `${url}mktDetail?id=1666666`, { fixture: 'market06.json' })
      .visit('http://localhost:3000')
      .get('input[name="zip"]')
      .type('00001')
      .type('{enter}')
  });

  it('The url should be ', () => {

  });

  it('Should have a header', () => {
    cy.contains('Freshly Fetched')
  });

  it('A user should see a list of markets', () => {
    
  });

  it('Each market should have a name', () => {
    
  });

  it('Each market should have a distance', () => {
    
  });

  it('Each market should have a schedule', () => {
    
  });

  it('A user should be able to click a market card and be taken to a details page', 
  () => {
    
  });

});