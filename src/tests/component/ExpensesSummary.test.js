import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ExpensesSummary } from '../../component/ExpensesSummary';
import expenses from '../fixtures/expenses';

configure({ adapter: new Adapter() });

test('Should render ExpensesSummary with  1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
})

test('Should render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235258} />);
  expect(wrapper).toMatchSnapshot();
})