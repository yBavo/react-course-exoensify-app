import React from 'react';
import ExpenseListFilter from './ExpenseListFilters'
import ExpenseList from './ExpenseList'
import ExpensesSummary from './ExpensesSummary'


const ExpenseDashBoardPage = () => (
	<div>
		<h1>Expense DashBoard</h1>
		<div>
		<ExpensesSummary />
		<ExpenseListFilter />
		<ExpenseList />
		</div>
	</div>
);

export default ExpenseDashBoardPage;
