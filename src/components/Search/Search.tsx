import { listeners } from 'process';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

interface getMarkets {
  getMarkets: (zip: string) => Promise<void>;
}

export const Search: React.FC<getMarkets> = ({ getMarkets }) => {
  let [zip, setZip] = useState('');

  const submitZipSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    zip = zip.replace(/[^0-9]/g, '');
    zip = zip.substring(0, 5);
    setZip(zip);
    getMarkets(zip);
    clearInput();
  };

  const clearInput = () => {
    setZip('');
  };

  return (
    <form className='zip-search'>
      <label className='zip-label'>
        Enter your zip code to find markets near you:{' '}
      </label>
      <input
        type='number'
        name='zip'
        placeholder='Zip Code'
        value={zip}
        onChange={e => setZip(e.target.value)}
        min='00001'
        max='99999'
        required
      />
      <Link to='/markets' className='find-btn' onClick={submitZipSearch}>
        Find Markets
      </Link>
    </form>
  );
};
