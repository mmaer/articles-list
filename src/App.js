import React, { useState, useEffect } from 'react';

import DataSources from './components/DataSources';
import Sort from './components/Sort';
import Article from './components/Article';

import { fetchArticles } from './utils';
import { URLS, SOURCES } from './constants';

import './app.scss';

const App = () => {
  const [sources, setSources] = useState(SOURCES);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [orderByASC, setOrderByASC] = useState(true);

  useEffect(() => {
    fetchArticles(URLS, setData, setError);
  }, []);

  const refreshArticles = () => {
    fetchArticles(URLS, setData, setError);
  };

  return (
    <div className="app">
      <div className="app__sort">
        <Sort setOrderByASC={setOrderByASC} />
      </div>
      <div className="app__data-source">
        <DataSources setSource={setSources} sources={sources} />
      </div>

      <div className="app__articles">
        {error ? (
          <div>
            <span>Something went wrong.</span>
            <button onClick={refreshArticles}>Refresh Articles</button>
          </div>
        ) : (
          data
            .filter(({ category }) => sources.includes(category))
            .sort((a, b) => (orderByASC ? b.enDate - a.enDate : a.enDate - b.enDate))
            .map(({ id, ...data }) => <Article key={id} {...data} />)
        )}
      </div>
    </div>
  );
};

export default App;
