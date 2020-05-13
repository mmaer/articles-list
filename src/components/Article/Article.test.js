import React from 'react';
import { shallow } from 'enzyme';

import Article from './';

const fakeArticle = {
  date: '2. februar 2019',
  image: 'https://placeimg.com/280/180/nature',
  title: 'Vålerengas førsterekke smadrer rivalene: - Seriegullet er I våre hender',
  preamble:
    'MERÅKER (VG) Finn-Hågen Krogh (28) opplevde den gedigne nedturen da han ble vraket til OL-sprinten i Sotsji etter at han først var tatt ut på laget. Nå føler han seg aldri trygg på å få starte i mesterskap.',
};

describe('Article component', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(<Article {...fakeArticle} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should match snapshot when image is empty', () => {
    const wrapper = shallow(<Article {...fakeArticle} image="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
