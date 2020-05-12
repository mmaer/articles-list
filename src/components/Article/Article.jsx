import React from 'react';

import imageNotFound from '../../images/image-not-found.png';

import './article.scss';

const Article = ({ date, image, title, preamble }) => (
  <div className="article">
    <div className="article__image">
      <img src={image ? image : imageNotFound} alt={title} />
    </div>
    <div className="article__content">
      <div className="article__title-date">
        <div className="article__title">
          <h2>{title}</h2>
        </div>
        <div className="article__date">{date}</div>
      </div>
      <div className="article__text">{preamble}</div>
    </div>
  </div>
);

export default Article;
