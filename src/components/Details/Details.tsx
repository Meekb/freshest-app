import React from 'react';
import './Details.css';
import pin from '../../images/location-pin.png';

interface MarketProps {
  markets: {
    id: number;
    distanceFromZip: number;
    marketName: string;
  }[];
  marketDetails: {
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
  }[];
  id: string;
}

export const Details: React.FC<MarketProps> = ({
  id,
  markets,
  marketDetails
}) => {
  const marketMatch = markets.filter(market => market.id === Number(id));
  const detailsMatch = marketDetails.filter(market => {
    const match = market.mapsLink
      .split('%22')[1]
      .includes(marketMatch[0].marketName.split(' ')[0]);
    return match;
  });

  const nameMatch = marketMatch[0].marketName;
  const detail = detailsMatch[0];
  const openSeason = `Season: ${detail.schedule[0].season}`;
  const daysAndTimes = `Open: ${detail.schedule[0].dayOfWeek} ${detail.schedule[0].time}`;
  const productList = detail.products.map(prod => {
    let key = Date.now() + prod.indexOf(prod);
    return (
      <div className='list' key={key}>
        <ul>
          <li key={key}>{prod}</li>
        </ul>
      </div>
    );
  });

  return (
    <div className='container'>
      <div className='image-container'>
        <div className='name-overlay'>
          <h2 className='market-name'>{nameMatch}</h2>
        </div>
      </div>
      <section className='market-details'>
        <section className='location-details'>
          <img src={pin} alt='location pin icon' className='pin-icon' />
          <p>{detail.street}</p>
          <p>
            {detail.city}, {detail.state} {detail.zip}
          </p>
          <a href={detail.mapsLink} target='_blank' rel='noreferrer'>
            Open in Google Maps
          </a>
        </section>
        <div className='schedule'>
          <h3>Season and Schedule:</h3>
          <p>{openSeason}</p>
          <p>{daysAndTimes}</p>
        </div>
        <div className='prod-list'>
          <h3>Products available at this market:</h3>
          {productList}
        </div>
      </section>
    </div>
  );
};
