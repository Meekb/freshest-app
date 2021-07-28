import React from 'react';
import Home from  "./components/Home/Home";
import Details from "./components/Details/Details"
interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return (
    <main>
      <h1>Hi</h1>
      <Home />
    </main>
  );
};
