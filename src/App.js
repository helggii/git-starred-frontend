import './Styles/App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	BrowserRouter
} from 'react-router-dom';

import React, { Component } from 'react';
import Login from './Login';
import Starred from './Starred';
import Logout from './Logout';

export default class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<main>
						<Switch>
							<Route path="/" exact component={Login} />
							<Route path="/starred" exact component={Starred} />
							<Route path="/" render={() => <div>404</div>} />
						</Switch>
					</main>
				</div>
			</BrowserRouter>
		);
	}
}
