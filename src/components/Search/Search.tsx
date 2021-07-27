import React, { useState } from 'react';
import './Search.css';

interface IProps_Click {
  onclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Search = () => {

  const [zip, setZip] = useState('');

  const submitZipSearch = (event: <IProps_Click> ) => {
    const newSearch = {
      zip,
    }
    // call the Home method that retrieves the markets for that zip code
    // findMarkets(newSearch);
    clearInputs();
  }

  const clearInputs = () => {
    setZip('');
  }

    // console.log(zip)

  return (
    <form>
      <label>Enter your zip code: </label>
      <input 
        type='number'
        name='zip'
        placeholder='zip...'
        onChange={e => setZip(e.target.value)}
      />
      <button className='find-btn' onClick={submitZipSearch}>Find Markets</button>
    </form>
  );
}

export default Search;