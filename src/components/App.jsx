import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';
//most programming logic goes in here 
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'moleculardeveloper',
			userData: [],
			userRepos: [],
			perPage:4
		}
	}
	handleFormSubmit(username) {
		this.setState({
			username: username
		}, function() {
			this.getUserData();
			this.getUserRepos();
		})
	}
	//grab user data from github
	getUserData() {
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({userData: data});
			}.bind(this),
			error: function(xhr, status, error) {
				this.setState({username: null})
			}.bind(this)
		});
	}

	getUserRepos() {
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({userRepos: data});
			}.bind(this),
			error: function(xhr, status, error) {
				this.setState({username: null})
			}.bind(this)
		});
	}

	componentDidMount() {
		this.getUserData();
		this.getUserRepos();
	}

	render() {
		return (
				<div>
					<Search onFormSubmit={this.handleFormSubmit.bind(this)} />
					<Profile {...this.state} />
				</div>
			)
	}
}
//properties are things that don't change.
App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};

App.defaultProps = {
	clientId: '1cc4a121c2f3146714d5',
	clientSecret: '1556f8b317e40322de3f9da18bb6ffb4fcd42da9'
};

export default App