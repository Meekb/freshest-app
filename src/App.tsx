import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import { getData } from './utils/apiCalls';
import {
  cleanMarketsData,
  cleanDetailsData,
  addScheduleToMarkets,
  checkForError
} from './utils/utils';
import { Results } from './components/Results/Results';
import { Details } from './components/Details/Details';
import { Error } from './components/Error/Error';
import { Search } from './components/Search/Search';
import './App.css';
import ScrollToTop from './scrollToTop';
import { useEffect } from 'react';

interface ApiMarkets {
  markets: {
    id: number;
    distanceFromZip: number;
    marketName: string;
    schedule: {
      dayOfWeek: string;
      time: string;
      season: string;
    }[];
  }[];
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
    marketName: string;
  }[];
  //zip: string;
  errorCode?: string;
}

interface OneDetail {
  oneDetail: {
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
  };
  zip: string;
  errorCode?: string;
}

interface ErrorProps {
  errorCode?: string;
}

export const App: React.FC = () => {
  const [allMarkets, setMarkets] = useState<ApiMarkets['markets']>([]);
  const [marketDetails, setDetails] = useState<ApiMarkets['marketDetails']>([]);
  const [selectedMarket, setSelectedMarket] =
    useState<OneDetail['oneDetail']>();
  const [zip, setZip] = useState<string>('');
  const [errorCode, setErrorCode] = useState<ApiMarkets["errorCode"]>("");
  const history = useHistory();

  const getMarkets = async (zip: string, distance: number) => {
    setZip(zip);
    try {
      let response = await getData(`zipSearch?zip=${zip}`);
      let data = await checkForError(response);
      let cleanedData = cleanMarketsData(data.results, distance);
      getDetails(cleanedData);
      history.push('/markets');
    } catch (error) {
      console.log(error)
      console.log("first", typeof error)
      let errors = await error
      // console.log("first", typeof error)
      setErrorCode(errors);
      console.log("second", errorCode)
    }
  };

  // useEffect(() => {setErrorCode(errors)}, [])

  const getDetails = (filteredMarkets: ApiMarkets['markets']) => {
    Promise.all(
      filteredMarkets.map(currentMarket => {
        return getData(`mktDetail?id=${currentMarket.id}`)
          .then(response => checkForError(response))
          .then(data => cleanDetailsData(data.marketdetails, currentMarket.id));
      })
    )
      .then(data => addScheduleToMarkets(data, filteredMarkets))
      .then(completeData => setData(completeData));
  };

  const setData = (data: ApiMarkets) => {
    setMarkets(data.markets);
    setDetails(data.marketDetails);
  };

  const findSelectedMarket = (marketID: number) => {
    const selection = marketDetails.find(market => market.id === marketID);
    setSelectedMarket(selection);
  };

  return (
    <>
      <ScrollToTop />

      <header>
        <h1>Freshly Fetched</h1>
      </header>
      <main>
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
                findSelectedMarket={findSelectedMarket}
                marketDetails={marketDetails}
                zip={zip}
              />
            )}
          />
          <Route
            path='/markets/:id'
            render={({ match }) => {
              const { id } = match.params;
              return <Details id={id} selectedMarket={selectedMarket} />;
            }}
          />
          <Route
          render={() => (
            <Error errorCode={errorCode} />
          )}
        />
        </Switch>
      </main>
    </>
  );
};
