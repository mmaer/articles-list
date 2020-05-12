import React from 'react';

import './article.scss';

const Article = ({ date, image, title, premable }) => {
  return (
    <div className="article">
      <div className="article__image">
        <img src={image} alt="nature" />
      </div>
      <div className="article__content">
        <div className="article__title">
          <h2>{title}</h2>
        </div>
        <div className="article__date">{date}</div>
        <div className="article__text">{premable}</div>
      </div>
    </div>
  );
};

export default Article;
