import React, { useState } from 'react';
import { Card } from '../Card/Card';
import { Filter } from '../Filter/Filter';
import './Results.css';

interface ResultsProps {
  allMarkets: {
    id: number;
    distanceFromZip: number;
    marketName: string;
    schedule: {
      dayOfWeek: string;
      season: string;
      time: string;
    }[];
  }[];
  zip: string;
  findSelectedMarket: (marketID: number) => void;
  marketDetails: Market[];
  loading: boolean;
}

interface Market {
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
  marketName: string;
}

export const Results: React.FC<ResultsProps> = ({
  allMarkets,
  findSelectedMarket,
  marketDetails,
  zip,
  loading
}) => {

  let [error, setError] = useState("")
  const [filteredResults, setFilteredResults] = useState<
    ResultsProps['allMarkets'] | undefined
  >();

  const makeCards = (markets:any) => {
    let cards;
    let message;
    if (loading) {
      return message = <h2>Loading...</h2> 
    } else if (!loading && !allMarkets.length) {
      return message = <h2>Sorry, no markets found for that zip code. Please try again!</h2> 
    } else {
      cards = markets.map((market:any) => {
        return (
          <Card
            key={market.id}
            id={market.id}
            name={market.marketName}
            distance={market.distanceFromZip}
            findSelectedMarket={findSelectedMarket}
          />
        );
      });
      return cards
    }
  }
  const filterCards = (day: string) => {
    setError("")
    if (day === 'Any') {
      return setFilteredResults(undefined);
    }
    const filteredByDay = allMarkets.filter(market =>
      market.schedule[0].dayOfWeek.includes(day)
    );
    if (!filteredByDay.length) {
      setError("Sorry, no markets are open on this day!")
    }
    setFilteredResults(filteredByDay);
  };
  return (
    <>
      <h2 className='results-near'>Results near {zip}</h2>
      <Filter filterCards={filterCards} />
      {!filteredResults && (
        <div className='results-container'>{makeCards(allMarkets)}</div>
      )}
      {filteredResults && !error &&(
        <div className='results-container'>{makeCards(filteredResults)}</div>
      )}
      {error && <h2>{error}</h2>}
    </>
  );
};
