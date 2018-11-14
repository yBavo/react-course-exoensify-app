import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { EditExpensePage } from '../../component/EditExpensePage';
import expenses from '../fixtures/expenses';

configure({ adapter: new Adapter() });

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
    />);
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/dashboard');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
})

test('should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/dashboard');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: expenses[0].id
  });
})