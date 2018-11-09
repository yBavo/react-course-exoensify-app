import uuid from 'uuid';
import database from '../firebase/firebase'

/**
 * action types
 */
export const ADD_EXPENSE = "ADD_EXPENSE"
export const REMOVE_EXPENSE = "REMOVE_EXPENSE"
export const EDIT_EXPENSE = "EDIT_EXPENSE"

/**
 * action creators
 */
// Add an expense
export const addExpense = (expense) => ({
	type: ADD_EXPENSE,
	expense
})

export const startAddExpense = (expenseData = {}) => {
	return (dispatch) => {
		const {
			description = '',
			note = '',
			amount = 0,
			createdAt = 0
		} = expenseData;
		const expense = { description, note, amount, createdAt }

		return database.ref('expenses').push(expense).then((ref) => {
			dispatch(addExpense({
				id: ref.key,
				...expense
			}))
		})
	}
}

// Remove an expense
export const removeExpense = ({ id } = {}) => ({
	type: REMOVE_EXPENSE,
	id
})
// Edit an expense
export const editExpense = (id, updates) => ({
	type: EDIT_EXPENSE,
	id,
	updates
})