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
  },
  id: string;
}

export const Details: React.FC<SelectedMarketProps> = ({ selectedMarket, id }) => {
  const openSeason = `Season: ${selectedMarket?.schedule[0].season}`;
  
  const daysAndTimes = selectedMarket?.schedule.map(sched => {
    return <p>{sched.dayOfWeek} {sched.time}</p>
  });
  
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
          <h2 className='market-name'>{selectedMarket?.name}</h2>
        </div>
      </div>
      <section className='market-details'>
        <section className='location-details'>
          <img src={pin} alt='location pin icon' className='pin-icon' />
          <p>{selectedMarket?.street}</p>
          <p>
            {selectedMarket?.city}, {selectedMarket?.state} {selectedMarket?.zip}
          </p>
          <a href={selectedMarket?.mapsLink} target='_blank' rel='noreferrer'>
            Open in Google Maps
          </a>
        </section>
        <div className='schedule'>
          <h3>Season and Schedule:</h3>
          <p>{openSeason}</p>
          <p>Open Days and Times:</p>
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
