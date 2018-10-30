import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
  const total = selectExpensesTotal();
  console.log('Total : ', total);
  expect(total).toEqual(0);
});

test('Should correctly add up a single expense', () => {
  const total = selectExpensesTotal([expenses[0]]);
  console.log('Total : ', total);
  expect(total).toEqual(expenses[0].amount);
});

test('Should correctly add up multiple expensess', () => {
  const total = selectExpensesTotal(expenses);
  console.log('Total : ', total);
  expect(total).toEqual(114195);
});