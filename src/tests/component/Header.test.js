import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from '../../component/Header';
//import { startLogout } from '../../actions/auth';

configure({ adapter: new Adapter() });

let startLogout, wrapper;
beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(
    <Header startLogout={startLogout} />
  );
})

test('Should render Header correctly', () => {
  //const wrapper = shallow(<Header startLogout={() => { }} />);
  expect(wrapper).toMatchSnapshot();
})

test('Should call startLogout on button click', () => {
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled()
})
