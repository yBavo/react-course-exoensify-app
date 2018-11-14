import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LoginPage } from '../../component/LoginPage';
//import { startLogin } from '../../actions/auth';

configure({ adapter: new Adapter() });

let startLogin, wrapper;
beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(
    <LoginPage startLogin={startLogin} />
  );
})

test('Should render Login page correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

test('Should call startLogin on button click', () => {
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled()
})