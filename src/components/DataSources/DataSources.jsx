import React from 'react';

import './data-sources.scss';

const DataSources = ({ setSource, sources }) => {
  const onChange = ({ target }) => {
    const sourceIndex = sources.indexOf(target.name);
    if (sourceIndex === -1) {
      setSource([...sources, target.name]);
    } else {
      setSource([...sources.slice(0, sourceIndex), ...sources.slice(sourceIndex + 1)]);
    }
  };

  return (
    <div className="data-sources">
      <div className="data-sources__text">Data sources:</div>
      <div className="data-sources__sources">
        <div className="data-sources__source">
          <label>
            <input name="fashion" type="checkbox" checked={sources.includes('fashion')} onChange={onChange} />
            Fashion
          </label>
        </div>
        <div className="data-sources__source">
          <label>
            <input name="sport" type="checkbox" checked={sources.includes('sport')} onChange={onChange} />
            Sports
          </label>
        </div>
      </div>
    </div>
  );
};

export default DataSources;
