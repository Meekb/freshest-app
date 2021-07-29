import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

interface getMarkets {
  getMarkets: (zip: string) => Promise<void>;
}

export const Search: React.FC<getMarkets> = ({ getMarkets }) => {
  let [zip, setZip] = useState('');
  let [isValid, setIsValid] = useState(false);

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
    getMarkets(zip);
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
      />
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
