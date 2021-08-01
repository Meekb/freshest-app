import React from 'react';
import './Details.css';
import pin from '../../images/location-pin.png';
import { NavLink } from 'react-router-dom';
import previous from '../../images/previous.png';

interface SelectedMarketProps {
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
    name: string;
  };
  id: string;
}

export const Details: React.FC<SelectedMarketProps> = ({
  selectedMarket,
  id
}) => {
  const openSeason = `Season: ${selectedMarket?.schedule[0].season}`;

  const daysAndTimes = selectedMarket?.schedule.map((sched, index) => {
    return (
      <div key={index}>
        <ul className='day-list'>
          <li>
            {sched.dayOfWeek} {sched.time}
          </li>
        </ul>
      </div>
    );
  });

  const productList = selectedMarket?.products.map((prod, index) => {
    return (
      <div className='list' key={index}>
        <ul>
          <li key={index}>{prod}</li>
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
          <h2 className='market-name'>{selectedMarket?.name}</h2>
        </div>
      </div>
      <section className='market-details'>
        <section className='location-details'>
          <img src={pin} alt='location pin icon' className='pin-icon' />
          <p>{selectedMarket?.street}</p>
          <p>
            {selectedMarket?.city}, {selectedMarket?.state}{' '}
            {selectedMarket?.zip}
          </p>
          <a href={selectedMarket?.mapsLink} target='_blank' rel='noreferrer'>
            Open in Google Maps
          </a>
        </section>
        <div className='schedule'>
          <h3>Season and Schedule:</h3>
          {openSeason}
          <h3>Open Days and Times:</h3>
          {daysAndTimes}
        </div>
        <div className='prod-list'>
          <h3>Products available at this market:</h3>
          {productList}
        </div>
      </section>
    </div>
  );
};
