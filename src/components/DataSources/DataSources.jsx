import React from 'react';

import './data-sources.scss';

const DataSources = () => {
  return (
    <div className="data-sources">
      <div className="data-sources__text">Data sources</div>
      <div className="data-sources__sources">
        <div className="data-sources__source">
          <label>
            <input type="checkbox" checked /> Fashion
          </label>
        </div>
        <div className="data-sources__source">
          <label>
            <input type="checkbox" /> Sports
          </label>
        </div>
      </div>
    </div>
  );
};

export default DataSources;
