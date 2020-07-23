import React from 'react';
import { shallow } from 'enzyme';
import DisplayHistory from './DisplayHistory.jsx';

describe('test display history component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DisplayHistory history={[{ method:'get', url: 'www.test.com/api/test' }, { method:'post', url: 'www.test.com/api/test' }]}  />);
  });

  it('renders a display history component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
