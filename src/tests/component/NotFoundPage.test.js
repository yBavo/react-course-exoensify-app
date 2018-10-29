import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFoundPage from '../../component/NotFoundPage'


configure({ adapter: new Adapter() });

test('Should render NotFoundPage', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
})