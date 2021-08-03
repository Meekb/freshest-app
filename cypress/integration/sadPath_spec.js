describe('List user flow sad paths', () => {
  it("Should alert the user with an error if the fetch call fails", () => {
    
    cy.intercept('GET', `https://search.ams.usda.gov/farmersmarkets/v/data.svc/'zipSearch?zip=00001`, 
      { statusCode: 404, 
      body: {
        locked: false
      }
    })

      .visit('http://localhost:3000')
      .get('input[name="zip"]').type('00001')
      .get('select').select('50')
      .get('button').click()
      cy.get("p").contains("Sorry, no markets found. Please try a different zip or distance!")
  })

})