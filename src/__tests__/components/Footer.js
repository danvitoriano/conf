import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);

  it('render self', () => {
    expect(wrapper.is('div')).toBe(true);
  });
});
