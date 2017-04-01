import React, { Component } from 'react';
//most programming logic goes in here 
class Search extends Component {
    handleSubmit(e) {
        e.preventDefault();
        let username = this.refs.username.value.trim();
        if(!username) {
            alert('please enter a username to search');
            return;
        }
        this.props.onFormSubmit(username);
        this.refs.username.value = '';
    }
	render() {
		return (
                <div>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label>Search Github Users</label>
                        <input type="text" ref="username" className="form-control" />
                    </form>
                </div>
            )
    }
}

export default Search