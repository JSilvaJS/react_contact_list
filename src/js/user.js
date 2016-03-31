import React from 'react';

export default class User extends React.Component {
	render() {
		return (
			<div className="peeps">
				<img src={this.props.url}/>
			</div>
		);
	}
}