import React, { Component, PropTypes} from 'react';
import UserData from './user_data';
import UserShape from './user_shape';
import Icon from './icon';

export default class UserDetails extends Component {

	static propTypes = {
		user: UserShape.isRequired,
		onBack: PropTypes.func.isRequired
	}

	render() {

		let {user, onBack } = this.props;

		return (
			<div className="user-details">
				<div className="avatar">
					<button onClick={onBack}></button>
					<img src={user.photo} alt={user.name}/>
				</div>
				<ul className="info">
					<li><Icon type="user"/>{user.name}</li>
					<li><Icon type="envelope"/>{user.email}</li>
					<li><Icon type="mobile"/>{user.phone}</li>
					<li><Icon type="globe"/>{user.location}</li>
				</ul>
			</div>
		);
	}
}








