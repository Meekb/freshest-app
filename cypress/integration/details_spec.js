describe('Details user flows', () => {

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

  it('The page should have a back button', () => {
    
  });

  it('The page should display the market name', () => {
    
  });

  it('The page should display the market schedule', () => {
    
  });

  it('The page should display the market address', () => {
    
  });

  it('The page should have a google maps link', () => {
    
  });

  it('The page should display the market\'s products', () => {
    
  });

});