import React from 'react';
import { shallow } from 'enzyme';
import RZSvg from '../RZSvg';

it('renders with defaults', () => {
  const wrapper = shallow(<RZSvg />);
  expect(wrapper).toMatchSnapshot();
});
