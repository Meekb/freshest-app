import React, { useState } from 'react';
import './Search.css';

interface getMarkets {
  getMarkets: (zip: string) => Promise<void>,
}

const Search: React.FC<getMarkets> = ({getMarkets}) => {

  let [zip, setZip] = useState('')

  const submitZipSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    zip = zip.replace(/[^0-9]/g, '');
    zip = zip.substring(0, 5);
    setZip(zip);
    getMarkets(zip);
    clearInput();
  } 

  const clearInput = () => {
    setZip('');
  }

  return (
    <form>
      <label className='zip-label'>Enter your zip code: </label>
      <input 
        type='number' 
        name='zip'
        placeholder='zip...'
        onChange={e => setZip(e.target.value)}
        min='00001'
        max='99999'
        required
      />
      <button 
        className='find-btn' 
        onClick={submitZipSearch}
      >Find Markets</button>
    </form>
  );
}

export default Search;