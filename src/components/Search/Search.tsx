import React, { useState } from 'react';
import './Search.css';

const Search = () => {

  const [zip, setZip] = useState('')

  const submitZipSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(zip);
    clearInput();
  }

  const clearInput = () => {
    setZip('');
  }

    console.log(zip)

  return (
    <form>
      <label className='zip-label'>Enter your zip code: </label>
      <input 
        type='text' //can limit input with type text, but not number
        name='zip'
        placeholder='zip...'
        // onChange={e => }
        min='00001'
        max='99999'
        maxLength={5} // if using 'text' we will need to add logic to convert to a number and check validity
        required
      />
      <label className='miles-label'>Find markets within:
      <select name='miles' className='dropdown'>
        <option value='10mi'>10mi</option>
        <option value='25mi'>25mi</option>
        <option value='50mi'>50mi</option>
      </select>
      </label>
      <button 
        className='find-btn' 
        onClick={submitZipSearch}
      >Find Markets</button>
    </form>
  );
}

export default Search;