import { CleaningFunctions } from '../types';

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
    marketName: ''
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
        currentDetails.marketName = market.marketName;
      }
    });
  });

  return { markets: markets, marketDetails: marketDetails };
};

export const checkForError = async (response: Response) => {
  if (!response.ok) {
    throw new Error(response.status.toString());
  } else if (response.ok) {
    let data = await response.json();
    if (data.results && data.results[0].id === 'Error') {
      throw new Error('fake404');
    }
    if (
      !data.results &&
      data.marketdetails.Address === 'Error, market not found.'
    ) {
      throw new Error('fakeDetails404');
    }
    return data;
  }
};
