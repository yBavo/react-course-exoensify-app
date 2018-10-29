import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './container/App';
import configureStore from './store/store';
import { addExpense } from './actions/expenses'
import * as serviceWorker from './serviceWorker';

const store = configureStore();

store.subscribe(() => { console.log(store.getState()) });
store.dispatch(addExpense({ description: 'Gas bill', amount: 75, createdAt: 3 }));
store.dispatch(addExpense({ description: 'Water bill', amount: 3, createdAt: 38 }));
store.dispatch(addExpense({ description: 'Rent', amount: 103, createdAt: 0 }));
store.dispatch(addExpense({ description: 'Hotel bill', amount: 130, createdAt: 6 }));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
