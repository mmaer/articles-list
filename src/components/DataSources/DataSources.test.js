import React from 'react';
import { shallow, mount } from 'enzyme';

import { SOURCES } from '../../constants';

import DataSources from './';

describe('DataSources component', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(<DataSources sources={SOURCES} setSource={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call setSource function when checkbox is clicked', () => {
    const mockSetSource = jest.fn();
    const wrapper = mount(<DataSources sources={SOURCES} setSource={mockSetSource} />);
    const fashionInput = wrapper.find('input[name="fashion"]');
    fashionInput.simulate('change', { target: { name: SOURCES[0] } });

    expect(mockSetSource.mock.calls.length).toBe(1);
  });

  it('Should remove one source when checkbox is clicked', () => {
    const mockSetSource = jest.fn();
    const wrapper = mount(<DataSources sources={SOURCES} setSource={mockSetSource} />);
    const fashionInput = wrapper.find('input[name="fashion"]');
    fashionInput.simulate('change', { target: { name: SOURCES[0] } });

    expect(mockSetSource.mock.calls[0]).toEqual([[SOURCES[1]]]);
  });

  it('Should add one source when checkbox is clicked', () => {
    const mockSetSource = jest.fn();
    const wrapper = mount(<DataSources sources={[SOURCES[0]]} setSource={mockSetSource} />);
    const fashionInput = wrapper.find('input[name="fashion"]');
    fashionInput.simulate('change', { target: { name: SOURCES[1] } });

    expect(mockSetSource.mock.calls[0]).toEqual([SOURCES]);
  });
});
