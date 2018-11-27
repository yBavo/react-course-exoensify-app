import React from 'react';
import ExpenseListFilter from './ExpenseListFilters'
import ExpenseList from './ExpenseList'
import ExpensesSummary from './ExpensesSummary'


const ExpenseDashBoardPage = () => (
	<div>
		<div>
		<ExpensesSummary />
		<ExpenseListFilter />
		<ExpenseList />
		</div>
	</div>
);

export default ExpenseDashBoardPage;
