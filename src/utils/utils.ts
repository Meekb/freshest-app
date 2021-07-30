export const cleanMarketsData = (
  response: { id: string; marketname: any }[], distance: number ) => {
  let mapped = response.map(currentMarket => {
    let name = currentMarket.marketname.split(' ');
    let distance = name[0];
    return {
      id: parseInt(currentMarket.id),
      distanceFromZip: Math.round(distance * 10) / 10,
      marketName: name.slice(1).join(' '),
      schedule: {}
    };
  });

  return mapped.filter(currentMarket => currentMarket.distanceFromZip < distance);
};

export const cleanDetailsData = (response: {
    GoogleLink: string;
    Address: string;
    Schedule: string;
    Products: string;
  }, id: number) => {

  let addressArray = response.Address.split(', ');
  let schedule = response.Schedule.replaceAll('<br>','').split(';');
  schedule.pop();

  let formattedSchedule = schedule.map(currentDay => {
    let season;
    if (currentDay.split(': ')[0].slice(0, -4).length < 24) {
      season = 'bad format';
    } else {
      season = currentDay.split(': ')[0].slice(0, -4);
    }

    return {
      dayOfWeek: currentDay.split(': ')[0].slice(-3),
      time: currentDay.split(': ')[1],
      season: season
    };
  });

  return {
    id: id,
    street: addressArray[0],
    city: addressArray[addressArray.length - 3],
    state: addressArray[addressArray.length - 2],
    zip: addressArray[addressArray.length - 1],
    schedule: formattedSchedule,
    products: response.Products.split(';'),
    mapsLink: response.GoogleLink
  };
};

export const addScheduleToMarkets = (marketDetails: {
  id: number;
  street: string;
  city: string;
  state: string;
  zip: string;
  schedule: {
    dayOfWeek: string;
    time: string;
    season: string;
  }[];
  products: string[];
  mapsLink: string;
  }[],
  markets: {
    id: number;
    distanceFromZip: number;
    marketName: string;
    schedule: {};
  }[]
  ) => {

  markets.forEach(market => {
    marketDetails.forEach(currentDetails => {
      if (market.id === currentDetails.id) {
        market.schedule = currentDetails.schedule
      }
    })
  })

  return { markets: markets, marketDetails: marketDetails }
}

export const checkForError = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  } else {
    return response;
  }
};
