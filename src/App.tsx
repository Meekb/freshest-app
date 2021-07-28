import React from 'react';

import { Route, Switch } from 'react-router';
import { Home } from './components/Home/Home';
import { Results } from './components/Results/Results';
import { Details } from './components/Details/Details';
import { Error } from './components/Error/Error';
import './App.css';

export const App: React.FC = () => {
  return (
    <main>
      <header>
        <h1>Freshly Fetched</h1>
      </header>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        {/* <Route exact path='/markets' render={() => <Results />} /> */}
        {/* <Route
          exact
          path='/markets/:id'
          render={({ match }) => <Details id={parseInt(match.params.id)} />}
        /> */}
        {/* <Route
          render={() => (
            <Error error="Sorry that page doesn't exist, do you want to go home?" />
          )}
        /> */}
      </Switch>
    </main>
  );
};
