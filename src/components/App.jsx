import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
//most programming logic goes in here 
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'moleculardeveloper',
			userData: [],
			userRepos: [],
			perPage: 3 
		}
	}
	getUserData() {
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({userData: data});
				console.log(data);
			}.bind(this),
			error: function(xhr, status, error) {
				this.setState({username: null})
				console.log(error);
			}.bind(this)
		});
	}
	componentDidMount() {
		this.getUserData();
	}

	render() {
		return (
				<div><Profile userData= {this.state.userData} /></div>
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