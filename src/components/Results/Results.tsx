import React from 'react';
import { Card } from '../Card/Card';
import './Results.css';
interface ResultsProps {
  allMarkets: {
    id: number;
    distanceFromZip: number;
    marketName: string;
  }[];
  zip: string;
  findSelectedMarket: (marketID: number) => void;
}

export const Results: React.FC<ResultsProps> = ({
  allMarkets,
  zip,
  findSelectedMarket
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

  return (
    <>
      <h2 className='results-near'>Results near {zip}</h2>
      <div className='results-container'>{makeCards()}</div>
    </>
  );
};
