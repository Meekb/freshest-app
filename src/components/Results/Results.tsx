import React from 'react';
import { Card } from '../Card/Card';
import './Results.css';
interface ResultsProps {
  allMarkets: {
    id: number;
    distanceFromZip: number;
    marketName: string;
  }[];
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
    products: string[];
    mapsLink: string;
  }[];
  zip: string;
}

export const Results: React.FC<ResultsProps> = ({
  allMarkets,
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
        />
      );
    });
  };

  return (
    <>
      <h2>Results near {zip}</h2>
      <div className='results-container'>{makeCards()}</div>
    </>
  );
};
