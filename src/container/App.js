import React, { Component } from 'react';
import AppRouter from '../routers/AppRouter';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

class App extends Component {

  state = {
    
  };

  render() {
    return (
      <AppRouter />
    );
  }
}

export default App;
