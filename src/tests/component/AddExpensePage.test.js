import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AddExpensePage } from '../../component/AddExpensePage';
import expenses from '../fixtures/expenses';

configure({ adapter: new Adapter() });

let startAddExpense, history, wrapper;

beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
})

test('should render AddExpense correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  expect(history.push).toHaveBeenCalledWith('/');
  expect(startAddExpense).toHaveBeenCalledWith(expenses[1]);
})
