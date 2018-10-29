import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ExpenseList } from '../../component/ExpenseList'
import expenses from '../fixtures/expenses'

configure({ adapter: new Adapter() });

test('Should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
})

test('Should render ExpenseList with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]}/>);
  expect(wrapper).toMatchSnapshot();
})