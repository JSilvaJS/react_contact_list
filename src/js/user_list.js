import React, {Component, PropTypes} from 'react';
import UserShape from './user_shape';

getUser(user) {
	let {onUserSelect} = this.props;
	return(
		<li onClick={onUserSelect.bind(null, user)}>
			{user.name}
		</li>
		);
}

export default class UserList extends Component {
	static propTypes = {
		users: PropTypes.arrayof(UserShape).isRequired,
		onUserSelect: PropTypes.func.isRequired
	}

	render() {
		let {users, onUserSelect} = this.props;
		return(
			<div className="user-list">
				<h1>My Peeps</h1>
				<ul>{users.map(::this.getUser)}</ul>
		);
	}

}

