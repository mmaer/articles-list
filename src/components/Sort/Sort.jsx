import React from 'react';

import './sort.scss';

const Sort = ({ setOrderByASC }) => {
  const setOrder = () => {
    setOrderByASC(prev => !prev);
  };

  return (
    <div className="sort">
      Sort by date:
      <span className="sort__arrows" onClick={setOrder} onKeyPress={setOrder} role="button" tabIndex="0" />
    </div>
  );
};

export default Sort;
