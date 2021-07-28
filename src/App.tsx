import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import { getData } from './utils/apiCalls';
import {
  cleanMarketsData,
  cleanDetailsData,
  checkForError
} from './utils/utils';
import { Results } from './components/Results/Results';
import Details from './components/Details/Details';
import { Error } from './components/Error/Error';
import { Search } from './components/Search/Search';
import './App.css';

interface ApiMarkets {
  markets: {
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

export const App: React.FC = () => {
  const [allMarkets, setMarkets] = useState<ApiMarkets['markets']>([]);
  const [marketDetails, setDetails] = useState<ApiMarkets['marketDetails']>([]);
  const [zip, setZip] = useState<ApiMarkets['zip']>('');
  const [error, setError] = useState(0);

  const getMarkets = async (zip: string) => {
    setZip(zip);
    try {
      let response = await getData(`zipSearch?zip=${zip}`);
      checkForError(response);
      let data = await response.json();
      let cleanedData = cleanMarketsData(data.results);
      setMarkets(cleanedData);
      getDetails(cleanedData);
    } catch (error) {
      setError(error);
    }
  };

  const getDetails = (filteredMarkets: ApiMarkets['markets']) => {
    Promise.all(
      filteredMarkets.map(currentMarket => {
        return getData(`mktDetail?id=${currentMarket.id}`)
          .then(response => checkForError(response))
          .then(response => response.json());
      })
    )
      .then(arrayOfPromises => cleanDetailsData(arrayOfPromises))
      .then(cleanData => setDetails(cleanData))
      .catch(error => setError(error));
  };

  return (
    <main>
      <header>
        <h1>Freshly Fetched</h1>
      </header>
      <Switch>
        <Route
          exact
          path='/'
          render={() => <Search getMarkets={getMarkets} />}
        />
        <Route
          exact
          path='/markets'
          render={() => (
            <Results
              allMarkets={allMarkets}
              marketDetails={marketDetails}
              zip={zip}
            />
          )}
        />
        <Route
          exact
          path='/markets/:id'
          render={({ match }) => <Details id={parseInt(match.params.id)} />}
        />
        {/* <Route
          render={() => (
            <Error error="Sorry that page doesn't exist, do you want to go home?" />
          )}
        /> */}
      </Switch>
    </main>
  );
};
