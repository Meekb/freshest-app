import React, { useState } from 'react';
import './Search.css';

interface getMarkets {
  getMarkets: (zip: string) => Promise<void>,
}

const Search: React.FC<getMarkets> = ({getMarkets}) => {

  const [zip, setZip] = useState('')
  console.log(zip);

  const submitZipSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    // if zip.length  > 5 we need to give the user an error
    event.preventDefault();
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