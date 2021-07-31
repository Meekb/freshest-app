import React, { useState } from "react";

interface MarketIProps {
  marketDetails: {
    street: string;
    city: string;
    state: string;
    zip: string;
    schedule: {
      dayOfWeek: string;
      time: string;
      season: string;
    }[];
  }
}
// : React.FC<MarketIProps>

export const Filter = () => {

  const [day, setDay] = useState('');

  const filterResults = () => {

  }

  return (
    // pass in the markets here? 
    // logic out a filter that will filter the results for the days markets are open
    // If a filter is selected, dynamically use that info to display only the results that include the selected day
   // If no filter is selected, return all results
  <div>
    <label>Filter by day: </label>
    <select 
      id='day' 
      name='day' 
      onChange={e => setDay(e.target.value)}
    >
      <option value='Sun'></option>
      <option value='Sun'>Sun</option>
      <option value='Mon'>Mon</option>
      <option value='Tue'>Tue</option>
      <option value='Wed'>Wed</option>
      <option value='Thu'>Thu</option>
      <option value='Fri'>Fri</option>
      <option value='Sat'>Sat</option>
    </select>
  </div>
  );
};