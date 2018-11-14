import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../component/AddExpensePage';
import EditExpensePage from '../component/EditExpensePage';
import ExpenseDashBoardPage from '../component/ExpenseDashBoard';
import NotFoundPage from '../component/NotFoundPage';
import LoginPage from '../component/LoginPage';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" component={LoginPage} exact={true} />
				<PrivateRoute path="/dashboard" component={ExpenseDashBoardPage} />
				<PrivateRoute path="/create" component={AddExpensePage} />
				<PrivateRoute path="/edit/:id" component={EditExpensePage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter