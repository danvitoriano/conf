import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ActionButton from '../../components/ActionButton';
import Button from '../../components/Button';

describe('<ActionButton />', () => {
  const wrapper = shallow(<ActionButton />);

  it('render self', () => {
    expect(wrapper.is('div'));
  });

  it('render buttons', () => {
    const wrapper = shallow(<ActionButton />);
    expect(wrapper.find(Button)); // passes
    expect(wrapper.find(Button)).toHaveLength(2); // passes
  });
});
