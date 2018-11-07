import uuid from 'uuid'

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
export const addExpense = ({
	description = '',
	note = '',
	amount = 0,
	createdAt = 0
}) => ({
	type: ADD_EXPENSE,
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
})
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