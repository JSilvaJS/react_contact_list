import React, {Component, PropTypes} from 'react';
import UserShape from './user_shape';
import UserData from './user_data';
import UserDetails from './user_details';
import Icon from './icon';
import FormView from './form_data';



export default class UserList extends Component {
	static propTypes = {
		user: PropTypes.arrayOf(UserShape).isRequired,
		onUserSelect: PropTypes.func.isRequired,
		onNew: PropTypes.func.isRequired
	}

	getUser(user) {
	let {onUserSelect} = this.props;
	return(
		<li className="peeps_li" key={user.name} onClick={onUserSelect.bind(null, user)}>
			<img className="peeps_img" src={user.photo}/>{user.name}
		</li>
		);
}

	render() {
		let {user, onUserSelect, onNew } = this.props;
		return(
			<div className="user-list">
				<div className="header_div">
				<h1 className="peeps_header">My Peeps</h1>
				<button onClick={onNew}>Add New Peep</button>
				</div>
				<ul>{user.map(::this.getUser)}</ul>
			</div>
		);
	}

}

