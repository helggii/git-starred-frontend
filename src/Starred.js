/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import React, { Component } from 'react';
import './Styles/Starred.css';

import gh_logo from './images/git-mark.svg';
import Repo from './Repo';
import Header from './Header';
export default class Starred extends Component {
	constructor(props) {
		super(props);

		this.state = {
			listOfRepos: [],
			user_info: {},
			visible: true,
			loading: true
		};

		this.handleDataFetching = this.handleDataFetching.bind(this);
		this.saveRepo = this.saveRepo.bind(this);
	}

	componentDidMount() {
		axios.get('./user').then((response) => {
			if (response.status !== 404) {
				this.setState({ user_info: response.data });
				this.setState({ loading: false });
			}
		});
	}

	saveRepo(repos) {
		this.setState({ listOfRepos: repos });
	}

	handleDataFetching() {
		this.setState({ visible: false });
		axios.get('./starred').then((response) => {
			if (response.status !== 404) {
				this.saveRepo(response.data);
			}
		});
	}

	render() {
		console.log(`tha repo ${this.state.listOfRepos}`);

		return (
			<div>
				<Header
					user_name={this.state.user_info.name}
					user_image={this.state.user_info.image}
				/>
				{this.state.visible ? (
					<button
						className="button"
						onClick={this.handleDataFetching}
					>
						<img className="github_logo" src={gh_logo} />
						<div>Get Starred Repos</div>
					</button>
				) : (
					<div />
				)}
				{'   '}
				{/* Hides button after the click */}
				<div className="repos">
					{this.state.listOfRepos.map((repo) => {
						return (
							<Repo
								repoName={repo.repoName}
								ownerImage={repo.ownerImage}
								language={repo.language}
								stargazers={repo.stargazers}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}
