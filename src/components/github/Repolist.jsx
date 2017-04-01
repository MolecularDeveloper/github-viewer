import React, { Component } from 'react';
import Repo from './Repo.jsx';
//most programming logic goes in here 
class RepoList extends Component {

	render() {
		return (
            <div className="panel panel-default">
                <ul className="list-group">
                    {
                        this.props.userRepos.map(repo => {
                            return <Repo 
                                        repo={repo}
                                        key={repo.id}
                                        {...this.props} />
                        })
                    }
                </ul>
			</div>
            )
		}
}

export default RepoList