import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import { getData } from './utils/apiCalls';
import {
  cleanMarketsData,
  cleanDetailsData,
  checkForError
} from './utils/utils';
import { Results } from './components/Results/Results';
import { Details } from './components/Details/Details';
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
  const history = useHistory();

  const getMarkets = async (zip: string) => {
    setZip(zip);
    try {
      let response = await getData(`zipSearch?zip=${zip}`);
      checkForError(response);
      let data = await response.json();
      let cleanedData = cleanMarketsData(data.results);
      setMarkets(cleanedData);
      getDetails(cleanedData);
      history.push('/markets');
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
<<<<<<< HEAD
<<<<<<< HEAD
          render={({ match }) => <Details />}
=======
=======
>>>>>>> c1da71d009c79962b70d1b1cb44be9727350ef2d
          render={({ match }) => {
            const { id } = match.params
            return <Details id={id} markets={allMarkets} marketDetails={marketDetails} />
          }}
<<<<<<< HEAD
>>>>>>> 77379fb (Get all of the minor details displaying inside of the Details component, and test that Route to Details in App is working as expected)
=======
>>>>>>> c1da71d009c79962b70d1b1cb44be9727350ef2d
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
