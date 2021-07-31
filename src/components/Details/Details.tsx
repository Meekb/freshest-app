import React from 'react';
import './Details.css';
import pin from '../../images/location-pin.png';
import { NavLink } from 'react-router-dom';
import previous from '../../images/previous.png';

interface MarketProps {
  id: string,
  selectedMarket?: {
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
    name: string;
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
    <div className='container'>
      <div className='image-container'>
        <NavLink to='/markets'>
          <img
            src={previous}
            alt='go back to previous'
            className='previous-icon'
          />
        </NavLink>
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
