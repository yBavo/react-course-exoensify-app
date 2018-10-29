import React from 'react';
import ExpenseListFilter from './ExpenseListFilters'
import ExpenseList from './ExpenseList'


const ExpenseDashBoardPage = () => (
	<div>
		<h1>Expense DashBoard</h1>
		<div>
		<ExpenseListFilter />
		<ExpenseList />
		</div>
	</div>
);

export default ExpenseDashBoardPage;
