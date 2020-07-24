import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results.jsx';

describe('Results container', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Results response={{}} />);
  });

  it('renders a results container', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
