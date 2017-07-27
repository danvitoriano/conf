import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Header from '../../components/Header';

describe('<Header />', () => {
  const wrapper = shallow(<Header />);

  it('render self', () => {
    expect(wrapper.is('div')).toBe(true);
  });
});
