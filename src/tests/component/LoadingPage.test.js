import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoadingPage from '../../component/LoadingPage';

configure({ adapter: new Adapter() });


test('Should render Loading page correctly', () => {
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
})


