import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExpenseDashBoardPage from '../../component/ExpenseDashBoard'


configure({ adapter: new Adapter() });

test('Should render ExpenseDashBoardPage', () => {
  const wrapper = shallow(<ExpenseDashBoardPage />);
  expect(wrapper).toMatchSnapshot();
})