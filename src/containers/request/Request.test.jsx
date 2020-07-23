import React from 'react';
import { shallow } from 'enzyme';
import Request from './Request.jsx';

describe('Request container', () => {
  let wrapper;
  let onSubmit;
  let handleChange;

  beforeEach(() => {
    onSubmit = jest.fn();
    handleChange = jest.fn();
        
    wrapper = shallow(<Request url='http://api.url.here' onChange={handleChange} onSubmit={onSubmit} />);
  });

  it('renders a request container', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
