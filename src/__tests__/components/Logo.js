import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Logo from '../../components/Logo';
import { MorphReplace } from 'react-svg-morph';

describe('<Logo />', () => {
  const wrapper = shallow(<Logo />);

  it('render self', () => {
    expect(wrapper.is('MorphReplace')).toBe(true);
  });
});
