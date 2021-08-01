import React, { useState } from 'react';
import { useEffect } from 'react';
import './Search.css';

interface getMarkets {
  getMarkets: (zip: string, distance: number) => Promise<void>;
}

export const Search: React.FC<getMarkets> = ({ getMarkets }) => {
  let [zip, setZip] = useState('');
  let [isValid, setIsValid] = useState(false);
  let [distance, setDistance] = useState(15);

  useEffect(() => {
    const validZip = new RegExp('^[0-9]{5}(?:-[0-9]{4})?$');
    if (validZip.test(zip)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [zip]);

  const onSubmitSearch = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    getMarkets(zip, distance);
    setZip('');
    setDistance(0);
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
      />
      <label className='label' htmlFor='distance'>
        Choose Distance:
      </label>
      <select
        id='distance'
        name='distance'
        onChange={e => setDistance(Number(e.target.value))}
      >
        <option value={15}>15 miles</option>
        <option value={25}>25 miles</option>
        <option value={50}>50 miles</option>
      </select>
      <button
        type='submit'
        className='find-btn'
        onClick={e => onSubmitSearch(e)}
        disabled={!isValid}
      >
        Find Markets
      </button>
    </form>
  );
};
