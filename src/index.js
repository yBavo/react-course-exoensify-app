import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './container/App';
import { startSetExpenses } from './actions/expenses'
import configureStore from './store/store';
import * as serviceWorker from './serviceWorker';
import './firebase/firebase';

const store = configureStore();

store.subscribe(() => { console.log(store.getState()) });

const jsx =
	<Provider store={store}>
		<App />
	</Provider>

ReactDOM.render(jsx, document.getElementById('root'));

store.dispatch(startSetExpenses())
	.then(() => {
		ReactDOM.render(jsx, document.getElementById('root'))
	})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
