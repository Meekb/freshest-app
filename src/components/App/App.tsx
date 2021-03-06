import React, { useState } from 'react';
import { Route, Switch, useHistory, Link, Redirect } from 'react-router-dom';
import { getData } from '../../utils/apiCalls';
import {
  cleanMarketsData,
  cleanDetailsData,
  addScheduleToMarkets
} from '../../utils/utils';
import { Results } from '../Results/Results';
import { Details } from '../Details/Details';
import { Error } from '../Error/Error';
import { Search } from '../Search/Search';
import './App.css';
import ScrollToTop from '../../utils/scrollToTop';
import { ApiMarkets, Market } from '../../types';
import loadingIcon from '../../images/loading.jpg';

export const App: React.FC = () => {
  const [allMarkets, setMarkets] = useState<ApiMarkets['markets']>([]);
  const [marketDetails, setDetails] = useState<ApiMarkets['marketDetails']>([]);
  const [selectedMarket, setSelectedMarket] = useState<Market>();
  const [zip, setZip] = useState<string>('');
  const [errorCode, setErrorCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();

  const getMarkets = async (zip: string, distance: number) => {
    setErrorCode('');
    setLoading(true);
    setZip(zip);
    try {
      let data = await getData(`zipSearch?zip=${zip}`);
      let cleanedData = cleanMarketsData(data.results, distance);
      await getDetails(cleanedData);
      history.push('/markets');
    } catch (error) {
      setErrorCode(error.message);
      setLoading(false)
    }
  };

  const getDetails = async (filteredMarkets: ApiMarkets['markets']) => {
    try {
      let data = await Promise.all(
        filteredMarkets.map(async currentMarket => {
          const data = await getData(`mktDetail?id=${currentMarket.id}`);
          return cleanDetailsData(data.marketdetails, currentMarket.id);
        })
      );
      let completeData = await addScheduleToMarkets(data, filteredMarkets);
      setMarkets(completeData.markets);
      setDetails(completeData.marketDetails);
      setLoading(false);
    } catch (error) {
      setErrorCode(error.message);
      setLoading(false)
    }
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
      <main>
        {loading && (
          <div className='loading-container'>
            <img src={loadingIcon} alt='loading gif' className='loading-icon' />{' '}
          </div>
        )}
        {(errorCode === 'fake404' || errorCode === 'fakeDetails404') && (
          <>
            <Search getMarkets={getMarkets} />
            <Error errorCode={errorCode} />
          </>
        )}

        {!errorCode?.length && (
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
        )}
      </main>
    </>
  );
};
