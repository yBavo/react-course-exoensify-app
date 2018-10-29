import {
	ADD_EXPENSE,
	REMOVE_EXPENSE,
	EDIT_EXPENSE
} from '../actions/expenses'

const initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_EXPENSE:
			return [
				...state,
				action.expense
			];
		case REMOVE_EXPENSE:
			return state.filter(({ id }) => action.id !== id);
		case EDIT_EXPENSE:
			return state.map((expense) => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updates
					};
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
}