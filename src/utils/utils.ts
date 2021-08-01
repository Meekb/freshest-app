interface CleaningFunctions {
  response: { id: string; marketname: string }[];
  distance: number;
  detailsResponse: {
    GoogleLink: string;
    Address: string;
    Schedule: string;
    Products: string;
  };
  id: number;
  marketDetails: {
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
    name: string;
  }[];
  markets: {
    id: number;
    distanceFromZip: number;
    marketName: string;
    schedule: {
      dayOfWeek: string;
      time: string;
      season: string;
    }[];
  }[];
}

export const cleanMarketsData = (
  response: CleaningFunctions['response'],
  distance: CleaningFunctions['distance']
) => {
  let mapped = response.map(currentMarket => {
    let name = currentMarket.marketname.split(' ');
    let distance = parseInt(name[0]);
    return {
      id: parseInt(currentMarket.id),
      distanceFromZip: Math.round(distance * 10) / 10,
      marketName: name.slice(1).join(' '),
      schedule: [{ dayOfWeek: '', time: '', season: '' }]
    };
  });

  return mapped.filter(
    currentMarket => currentMarket.distanceFromZip < distance
  );
};

export const cleanDetailsData = (
  response: CleaningFunctions['detailsResponse'],
  id: CleaningFunctions['id']
) => {
  let addressArray = response.Address.split(', ');
  let schedule = response.Schedule.replaceAll('<br>', '').split(';');
  schedule.pop();

  let formattedSchedule = schedule.map(currentDay => {
    let season;
    if (currentDay.split(': ')[0].slice(0, -4).length < 24) {
      season = 'No information available';
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
    mapsLink: response.GoogleLink,
    name: ''
  };
};

export const addScheduleToMarkets = (
  marketDetails: CleaningFunctions['marketDetails'],
  markets: CleaningFunctions['markets']
) => {
  markets.forEach(market => {
    marketDetails.forEach(currentDetails => {
      if (market.id === currentDetails.id) {
        market.schedule = currentDetails.schedule;
        currentDetails.name = market.marketName;
      }
    });
  });

  return { markets: markets, marketDetails: marketDetails };
};

export const checkForError = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  } else {
    return response.json();
  }
};
