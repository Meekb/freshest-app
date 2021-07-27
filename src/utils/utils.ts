export const cleanMarketsData = (response: {id: string, marketname: any}[]) => {
  
  let mapped = response.map(currentMarket => {
    let name = currentMarket.marketname.split(' ')
    let distance = name[0]
    return {
      id: currentMarket.id,
      distanceFromZip: Math.round(distance * 10) / 10,
      marketName: name.slice(1).join(' ')
    }
  })
};