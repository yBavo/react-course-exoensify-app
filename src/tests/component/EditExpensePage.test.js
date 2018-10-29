import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { EditExpensePage } from '../../component/EditExpensePage';
import expenses from '../fixtures/expenses';

configure({ adapter: new Adapter() });

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
    />);
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
})

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({
    id: expenses[0].id
  });
})