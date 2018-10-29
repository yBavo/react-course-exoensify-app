import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import moment from 'moment'
import { ExpenseListFilters } from '../../component/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

configure({ adapter: new Adapter() });

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with alt data correctly ', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
  const value = 'rent';
  wrapper.find('input').simulate('change', {
    target: { value }
  })
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
})
test('should sort by date', () => {
  const value = 'date';
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByDate).toHaveBeenLastCalledWith();
})
test('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByAmount).toHaveBeenLastCalledWith();
})
test('should handle date change', () => {
  const startDate = moment();
  const endDate = moment().add(3, 'days');
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate })
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})
test('should handle date focus change', () => {
  const calendarFocused = 'endDate';
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused)
  expect(wrapper.state('calendarFocused')).toEqual(calendarFocused);
})
