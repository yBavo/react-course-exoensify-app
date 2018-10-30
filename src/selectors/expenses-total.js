export default (expenses = []) => {
  return expenses
    .map(expense => expense.amount)
    .reduce((sum, amountToAdd) => sum + amountToAdd, 0);
}
