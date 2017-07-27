import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Button from '../../components/Button';

describe('<Button />', () => {
  it('render self', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.is('div')).toBe(true);
  });

  it('should render a label', () => {
    const wrapper = shallow(<Button label="MyLabel" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a button label', () => {
    const wrapper = shallow(<Button label="MyLabel" />);
    expect(wrapper.prop('label')).not.toEqual('MyLabel');
  });

  // it('should render a document title and a parent title', () => {
  //   const wrapper = shallow(
  //     <Button label="MyLabel" pattern="pattern" />
  //   );
  //   expect(wrapper.prop('label')).toEqual('MyLabel — pattern');
  // });
});
