import React from 'react';
import { shallow, mount } from 'enzyme';

import Sort from './';

describe('Sort component', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(<Sort setOrderByASC={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call setOrderByASC when arrows are clicked', () => {
    const mockSetOrderByASC = jest.fn();
    const wrapper = mount(<Sort setOrderByASC={mockSetOrderByASC} />);
    const arrows = wrapper.find('span');
    arrows.simulate('click');

    expect(mockSetOrderByASC.mock.calls.length).toBe(1);
  });
});
