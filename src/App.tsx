import React from 'react';

import { Home } from './components/Home/Home';
import './App.css';

export const App: React.FC = () => {
  return (
    <main>
      <header>
        <h1>Freshly Fetched</h1>
      </header>
      <Home />
    </main>
  );
};
