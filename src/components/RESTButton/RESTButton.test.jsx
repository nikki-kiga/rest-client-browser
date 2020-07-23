import React from 'react';
import { shallow } from 'enzyme';
import RESTButton from './RESTButton.jsx';

describe('REST Button', () => {
  let wrapper;
  let onChange;
  beforeEach(() => {
    onChange = jest.fn();
    wrapper = shallow(<RESTButton reqType='test' onChange={onChange}/>);
  });
  it('renders a button based on the input', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has a radio input', () => {
    expect(wrapper.find('input[name="requestType"]').prop('value')).toEqual('test');
  });
});
