import React, { useState } from 'react';
import { Route, Switch, useHistory, Link, Redirect } from 'react-router-dom';
import { getData } from '../../utils/apiCalls';
import {
  cleanMarketsData,
  cleanDetailsData,
  addScheduleToMarkets,
  checkForError
} from '../../utils/utils';
import { Results } from '../Results/Results';
import { Details } from '../Details/Details';
import { Error } from '../Error/Error';
import { Search } from '../Search/Search';
import './App.css';
import ScrollToTop from '../../utils/scrollToTop';
import { OneDetail, ApiMarkets } from '../../types';

export const App: React.FC = () => {
  const [allMarkets, setMarkets] = useState<ApiMarkets['markets']>([]);
  const [marketDetails, setDetails] = useState<ApiMarkets['marketDetails']>([]);
  const [selectedMarket, setSelectedMarket] =
    useState<OneDetail['oneDetail']>();
  const [zip, setZip] = useState<string>('');
  const [errorCode, setErrorCode] = useState<ApiMarkets['errorCode']>('');
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();

  const getMarkets = async (zip: string, distance: number) => {
    setLoading(true);
    setZip(zip);
    try {
      let response = await getData(`zipSearch?zip=${zip}`);
      let data = await checkForError(response);
      let cleanedData = cleanMarketsData(data.results, distance);
      getDetails(cleanedData);
      history.push('/markets');
    } catch (error) {
      setErrorCode(error.message);
      history.push('/markets');
    }
  };

  const getDetails = (filteredMarkets: ApiMarkets['markets']) => {
    Promise.all(
      filteredMarkets.map(async currentMarket => {
        const response = await getData(`mktDetail?id=${currentMarket.id}`);
        const data = await checkForError(response);
        return cleanDetailsData(data.marketdetails, currentMarket.id);
      })
    )
      .then(data => addScheduleToMarkets(data, filteredMarkets))
      .then(completeData => setData(completeData));
  };

  const setData = (data: ApiMarkets) => {
    setMarkets(data.markets);
    setDetails(data.marketDetails);
    setLoading(false);
  };

  const findSelectedMarket = (marketID: number) => {
    const selection = marketDetails.find(market => market.id === marketID);
    setSelectedMarket(selection);
  };

  return (
    <>
      <ScrollToTop />
      <header>
        <Link
          to='/'
          style={{ textDecoration: 'none' }}
          onClick={() => setErrorCode('')}
        >
          <h1>Freshly Fetched</h1>
        </Link>
      </header>
      {!!errorCode?.length && <Error errorCode={errorCode} />}
      {!errorCode?.length && (
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
                  zip={zip}
                  findSelectedMarket={findSelectedMarket}
                  marketDetails={marketDetails}
                  loading={loading}
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
              exact
              path='/page-not-found'
              render={() => <Error errorCode={'page not found'} />}
            />
            <Redirect to='/page-not-found' />
          </Switch>
        </main>
      )}
    </>
  );
};
