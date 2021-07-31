import React from "react";
import "../Details/Details.css"

interface MarketProps {
  id: string,
  selectedMarket?: {
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
  };
}

export const Details: React.FC<MarketProps> = ({ id, selectedMarket }) => {
  const openSeason = `Season: ${selectedMarket?.schedule[0].season}`;
  const daysAndTimes = `Open: ${selectedMarket?.schedule[0].dayOfWeek} ${selectedMarket?.schedule[0].time}`;
  const productList = selectedMarket?.products.map(prod => {
    let key = Date.now() + prod.indexOf(prod)
    return (
    <div className='list' key={key}>
      <ul>
        <li key={key}>{prod}</li>
      </ul>
    </div>
    );
  });

  return (
    <section className='market-details'>
      {/* <h2>{selectedMarket.name}</h2> */}
      <p>Located at: {selectedMarket?.street}, {selectedMarket?.city}, {selectedMarket?.state}, {selectedMarket?.zip}</p>
      <div className='schedule'>
        <h3>Season and Schedule:</h3>
        <p>{openSeason}</p>
        <p>{daysAndTimes}</p>
      </div>
      <div className='prod-list'>
        <h3>Products available at this market:</h3>
        {productList}
      </div>
      <a href={selectedMarket?.mapsLink} target='_blank' className='link' >Open this location in Google Maps</a>
    </section>
  );
}

