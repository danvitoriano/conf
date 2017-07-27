import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Body from '../../components/Body';
import Logo from '../../components/Logo';
import ActionButton from '../../components/ActionButton';

describe('<Body />', () => {
  const wrapper = shallow(<Body />);

  it('render Logo', () => {
    expect(wrapper.find(Logo)).toHaveLength(1); // passes
  });

  it('render ActionButton', () => {
    expect(wrapper.find(ActionButton)).toHaveLength(1); // passes
  });
});
