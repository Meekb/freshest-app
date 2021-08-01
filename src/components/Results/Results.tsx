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
  zip
}) => {
  const [filteredResults, setFilteredResults] = useState<
    ResultsProps['allMarkets'] | undefined
  >();

  const makeCards = (markets: any) => {
    return markets.map((market: any) => {
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
  };

  const filterCards = (day: string) => {
    if (day === 'Any') {
      return setFilteredResults(undefined);
    }
    const filteredByDay = allMarkets.filter(market =>
      market.schedule[0].dayOfWeek.includes(day)
    );
    setFilteredResults(filteredByDay);
  };

  return (
    <>
      <h2 className='results-near'>Results near {zip}</h2>
      <Filter filterCards={filterCards} />
      {!filteredResults && (
        <div className='results-container'>{makeCards(allMarkets)}</div>
      )}
      {filteredResults && (
        <div className='results-container'>{makeCards(filteredResults)}</div>
      )}
    </>
  );
};
