/**
 * action types
 */
export const SET_TEXT_FILTER = "SET_TEXT_FILTER"
export const SORT_BY_AMOUNT = "SORT_BY_AMOUNT"
export const SORT_BY_DATE = "SORT_BY_DATE"
export const SET_START_DATE = "SET_START_DATE"
export const SET_END_DATE = "SET_END_DATE"

// Set text filter
export const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

// Sort by date filter
export const sortByDate = () => ({
	type: SORT_BY_DATE,
})

// Sort by amount filter
export const sortByAmount = () => ({
	type: SORT_BY_AMOUNT,
})

export const setStartDate = (startDate) => ({
	type: SET_START_DATE,
	startDate 
})

export const setEndDate = (endDate) => ({
	type: SET_END_DATE,
	endDate 
})


