import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Should setup remove expense action object', () => {
  const id = { id: '123abc' }
  const action = removeExpense(id);
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
})

test('Should editExpense with id and updates', () => {
  const id = '123'
  const updates = {
    note: 'New notes'
  }
  const action = editExpense(id, updates);
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates
  });
})

test('Should addExpense with provided values', () => {
  const expense = {
    description: 'Rent',
    note: '',
    amount: 12000,
    createdAt: 0
  }
  const action = addExpense(expense);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String)
    }
  });
})

test('Should add expense with default values', () => {
  const action = addExpense({});
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
})