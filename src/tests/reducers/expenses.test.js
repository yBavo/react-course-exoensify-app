//import moment from 'moment'
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should return an empty array', () => {
  const state = expensesReducer(undefined, '@@INIT');
  expect(state).toEqual([])
})

test('Should add an expense', () => {
  const expense = {
    id: '4',
    description: "Rent",
    note: "",
    amount: 23000,
    createdAt: 0
  }

  const action = {
    type: "ADD_EXPENSE",
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
})

test('Should remove expense by id', () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
})

// Should NOT remove expense if id not found
test('Should NOT remove expense if id not found', () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: '-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})

// Should edit expense by valid id
test('Should edit expense by valid id', () => {
  const amount = 128950
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {amount}
  }
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
})

// Should not edit expense if id not found
test('Should not edit expense if id not found', () => {
  const amount = 128950
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {amount}
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[1]])
})