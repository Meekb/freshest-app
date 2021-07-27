export const cleanMarketsData = (response: {id: string, marketname: any}[]) => {
  
  let mapped = response.map(currentMarket => {
    let name = currentMarket.marketname.split(' ')
    let distance = name[0]
    return {
      id: parseInt(currentMarket.id),
      distanceFromZip: Math.round(distance * 10) / 10,
      marketName: name.slice(1).join(' ')
    }
  })

  return mapped.filter(currentMarket => currentMarket.distanceFromZip < 10)
};

export const cleanDetailsData = (arrayOfPromises: {}[]) => {
  return arrayOfPromises.map(currentMarket => {
    let addressArray = currentMarket.marketdetails.Address.split(',')

    return {
      street: addressArray[0],
      city: addressArray[addressArray.length-3],
      state: addressArray[addressArray.length-2],
      zip: addressArray[addressArray.length-1],
      products: currentMarket.marketdetails.Products.split(';'),
      mapsLink: currentMarket.marketdetails.GoogleLink
    }
  })
};