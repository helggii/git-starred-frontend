/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import axios from 'axios';
import './Styles/Login.css';
import gh_logo_light from './images/git-mark-light.svg';
import gh_logo from './images/git-mark.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Login extends Component {
	constructor() {
		super();

		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin() {
		axios.get('/login').then((res) => {
			window.location.href = res.data;
		});
	}

	render() {
		return (
			<div className="login_button_component">
				<button className="button" onClick={this.handleLogin}>
					<div className="button_container">
						<img className="logo" src={gh_logo} />
						<span className="button_text">Login with GitHub</span>
						<Link to="/starred" />
					</div>
				</button>
			</div>
		);
	}
}

export default Login;
