import React from 'react';

import DataSources from './components/DataSources';
import Sort from './components/Sort';
import Article from './components/Article';

import './app.scss';

const App = () => {
  return (
    <div className="app">
      <div className="app__sort">
        <Sort />
      </div>
      <div className="app__data-source">
        <DataSources />
      </div>
      <div className="app__articles">
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
};

export default App;
