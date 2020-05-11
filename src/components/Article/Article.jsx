import React from 'react';

import './article.scss';

const Article = () => {
  return (
    <div className="article">
      <div className="article__image">
        <img src="https://placeimg.com/280/180/nature" alt="nature" />
      </div>
      <div className="article__content">
        <div className="article__title">
          <h2>Title of article</h2>
        </div>
        <div className="article__date">2. februar 2019</div>
        <div className="article__text">
          MERÅKER (VG) Finn-Hågen Krogh (28) opplevde den gedigne nedturen da han ble vraket til OL-sprinten i Sotsji
          etter at han først var tatt ut på laget. Nå føler han seg aldri trygg på å få starte i mesterskap.
        </div>
      </div>
    </div>
  );
};

export default Article;
