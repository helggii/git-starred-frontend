/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './Styles/Header.css';
import Logout from './Logout';

export default class Header extends Component {
	render() {
		return (
			<header>
				<div className="user_info">
					<a href={`https://github.com/${this.props.user_name}`}>
						<img className="image" src={this.props.user_image} />
					</a>
					{'  '}
					<span>
						<a
							className="user_name"
							href={`https://github.com${this.props.user_name}`}
						>
							{this.props.user_name}
						</a>
					</span>
				</div>
				<h3>GitHub Starred Repos</h3>
				<Logout />
			</header>
		);
	}
}
