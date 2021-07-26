import React from 'react';
import Home from  "./components/Home/Home"
interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return (
    <main>
      <h1>Hi</h1>
      <Home />
    </main>
  );
};
