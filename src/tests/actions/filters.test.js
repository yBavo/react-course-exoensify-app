import moment from 'moment'
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from '../../actions/filters';

test('Should set SET_END_DATE as type filter', () => {
  expect( setEndDate(moment(0)) ).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  })
});

test('Should set SET_START_DATE as type filter', () => {
  expect( setStartDate(moment(0)) ).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  })
});

test('Should set a text as filter', () => {
  const text = "Something In";
  expect( setTextFilter(text) ).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
});

test('Should set an empty text as filter', () => {
  expect( setTextFilter() ).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ""
  })
});

test('Should set SORT_BY_DATE as type filter', () => {
  expect( sortByDate() ).toEqual({
    type: 'SORT_BY_DATE',
  })
});

test('Should set AMOUNT as type filter', () => {
  expect( sortByAmount() ).toEqual({
    type: "SORT_BY_AMOUNT",
  })
});