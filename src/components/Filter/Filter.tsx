import React, { useState } from "react";
import './Filter.css'

interface MarketIProps {
  filterCards: (day: string) => any;
}

export const Filter: React.FC<MarketIProps> = ({ filterCards }) => {

  const [day, setDay] = useState('');

  return (
    
  <div>
    <label className='day-filter-label'>Filter by day: </label>
    <select 
      id='day' 
      name='day' 
      onChange={e => setDay(e.target.value)}
    >
      <option value='Any'>All</option>
      <option value='Sun'>Sun</option>
      <option value='Mon'>Mon</option>
      <option value='Tue'>Tue</option>
      <option value='Wed'>Wed</option>
      <option value='Thu'>Thu</option>
      <option value='Fri'>Fri</option>
      <option value='Sat'>Sat</option>
    </select>
    <button className='filter-btn' onClick={() => filterCards(day)}>Filter</button>
  </div>
  );
};