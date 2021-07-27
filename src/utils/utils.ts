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