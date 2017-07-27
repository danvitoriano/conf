import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Item from '../../components/Item';

describe('<Item />', () => {
  const wrapper = shallow(<Item />);

  it('render self', () => {
    expect(wrapper.is('div')).toBe(true);
  });
});
