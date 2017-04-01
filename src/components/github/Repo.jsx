import React, { Component } from 'react';
//most programming logic goes in here 
class Repo extends Component {

	render() {
        const {repo} = this.props;
		return (
                <li className="list-group-item repo-item">
                    <a href={repo.html_url}>
                        {repo.name}
                    </a> : {repo.description}
                </li>
            )
		}
}

export default Repo