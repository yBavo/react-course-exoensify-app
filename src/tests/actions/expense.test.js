import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  addExpense,
  startAddExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const uid = 'fakeUid';
const defaultAuthState = { auth: { uid }};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt }
  });

  database.ref(`users/${uid}/expenses`).set(expensesData)
    .then(() => done())
})

test('Should setup remove expense action object', () => {
  const id = { id: '123abc' }
  const action = removeExpense(id);
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
})

test('Should remove expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id

  store.dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      })
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done()
    })
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
test('Should edit expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id
  const updates = { amount: 200 }

  store.dispatch(startEditExpense(id, updates))
    .then(() => {
      // Test if the action is dispatched correctly
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
      })
      
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    // Test if data change on Firebase correctly
    .then((snapshot) => {
      expect(snapshot.val().amount).toBe(updates.amount);
      done()
    })
})

test('Should addExpense with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenses[2],
      id: expect.any(String)
    }
  });
})

test('should add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: 'Dog',
    amount: 3000,
    note: 'Woaf!',
    createdAt: 1000
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })
    // Fetch data
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done();
  })
})

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseDefault = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefault
      }
    })
    // Fetch data
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefault)
    done();
  })
})

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'SET_EXPENSES',
        expenses
      })
      done()
    })
})