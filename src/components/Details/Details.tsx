import React, { useState } from 'react';
import './Details.css';
import pin from '../../images/location-pin.png';
import { NavLink } from 'react-router-dom';
import previous from '../../images/previous.png';
import { Error } from '../Error/Error';

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
    marketName: string;
  };
  id: string;
}

export const Details: React.FC<SelectedMarketProps> = ({
  selectedMarket,
  id
}) => {
  const openSeason = `Season: ${selectedMarket?.schedule[0].season}`;

  let [error, setError] = useState("")
  // console.log("markets", markets)
  // console.log("details", marketDetails)

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
    !error && !marketDetails ? <h2>Loading...</h2> :
    error ? <h2>Uh oh! Market not found! Please try again.</h2> :
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
          <h2 className='market-name'>{selectedMarket?.marketName}</h2>
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
