import React, { useState } from 'react';
import { Card } from '../Card/Card';
import { Filter } from '../Filter/Filter';
import './Results.css';
import { ResultsProps, LessDetailedMarket } from '../../types';

export const Results: React.FC<ResultsProps> = ({
  allMarkets,
  findSelectedMarket,
  marketDetails,
  zip
}) => {
  let [error, setError] = useState('');
  const [filteredResults, setFilteredResults] = useState<
    ResultsProps['allMarkets'] | undefined
  >();

  const makeCards = (markets: ResultsProps['allMarkets']) => {
    return markets.map((market: LessDetailedMarket) => {
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
    setError('');
    if (day === 'Any') {
      return setFilteredResults(undefined);
    }
    const filteredByDay = allMarkets.filter(market =>
      market.schedule[0].dayOfWeek.includes(day)
    );
    if (!filteredByDay.length) {
      setError('Sorry, no markets are open on this day!');
    }
    setFilteredResults(filteredByDay);
  };

  return (
    <div>
      <div className='results-text-container'>
        <h2 className='results-near'>Results near {zip}</h2>
        <Filter filterCards={filterCards} />
      </div>

      {!filteredResults && (
        <div className='results-container'>{makeCards(allMarkets)}</div>
      )}

      {filteredResults && !error && (
        <div className='results-container'>{makeCards(filteredResults)}</div>
      )}

      {!!error && <h2>{error}</h2>}
    </div>
  );
};
