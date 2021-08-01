import React from 'react';
import { cleanMarketsData } from '../../utils/utils';
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
  marketDetails: {
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
    name: string;
  }[];
}

export const Results: React.FC<ResultsProps> = ({
  allMarkets,
  findSelectedMarket,
  marketDetails,
  zip
}) => {
  const makeCards = () => {
    return allMarkets.map(market => {
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
    const filteredByDay = marketDetails.filter(market =>
      market.schedule[0].dayOfWeek.includes(day)
    );

    filteredByDay.map(market => {
      return (
        <Card
          key={market.id}
          id={market.id}
          name={market.name}
          distance={69} // distanceFromZip is only prop we dont share
          findSelectedMarket={findSelectedMarket}
        />
      );
    });

    return filteredByDay;
  };

  return (
    <>
      <h2 className='results-near'>Results near {zip}</h2>
      <Filter filterCards={filterCards} />
      <div className='results-container'>{makeCards()}</div>
    </>
  );
};
