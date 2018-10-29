import moment from 'moment'
import filtersReducer from '../../reducers/filters';


test('Sould setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
})

// Should set sortBy to amount
test('Should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
})

// Should set sortBy to date
test('Should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' }
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
})

// Should set a text filter
test('Should set sortBy to text', () => {
  const text = "My text filter";
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  }
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
})

// Should set a start date filter
test('Should set sortBy to text', () => {
  const startDate = moment(0);
  const action = {
    type: 'SET_START_DATE',
    startDate
  }
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
})

// Should set an end date filter
test('Should set sortBy to text', () => {
  const endDate = moment(0).add(2,'day');
  const action = {
    type: 'SET_END_DATE',
    endDate
  }
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
})

