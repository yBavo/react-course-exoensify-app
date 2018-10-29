import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExpenseListItem from '../../component/ExpenseListItem'
import expenses from '../fixtures/expenses'

configure({ adapter: new Adapter() });

test('Should render ExpenseListItem with expenses', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
  expect(wrapper).toMatchSnapshot();
})