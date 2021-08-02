import React from 'react';
import { NavLink } from 'react-router-dom';
import './Details.css';
import pin from '../../images/location-pin.png';
import previous from '../../images/previous.png';
import { SelectedMarketProps } from '../../types';

export const Details: React.FC<SelectedMarketProps> = ({
  selectedMarket,
  id
}) => {
  const daysAndTimes = selectedMarket?.schedule.map((sched, index) => {
    return (
      <div key={index}>
        <ul className='day-list schedule'>
          <li>
            <h3>Season:</h3>
            {sched.season}
            <h3>Open Days and Times:</h3>
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
    <>
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
          {daysAndTimes}
          <div className='prod-list'>
            <h3>Products available at this market:</h3>
            {productList}
          </div>
        </section>
      </div>
    </>
  );
};
