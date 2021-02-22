/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import axios from 'axios';
import './Styles/Logout.css';
import { BrowserRouter as Link, withRouter } from 'react-router-dom';
import './Styles/Logout.css';

export const Logout = withRouter(({ history }) => {
	return (
		<div className="logout_button_component">
			<Link to="/">
				<button
					className="logout_button"
					onClick={() => {
						axios.get('/logout');
						history.push('./');
					}}
				>
					Log out
				</button>
			</Link>
		</div>
	);
});

export default Logout;
