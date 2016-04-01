import React, { Component, PropTypes } from 'react';
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
					<button onClick={onBack}><Icon type="arrow-left"/></button>
					<img className="ud_img" src={user.photo} alt={user.name}/>
				</div>
				<ul className="info">
					<li className="ud_li"><Icon type="user"/>{user.name}</li>
					<li className="ud_li"><Icon type="envelope"/>{user.email}</li>
					<li className="ud_li"><Icon type="mobile"/>{user.phone}</li>
					<li className="ud_li"><Icon type="globe"/>{user.location}</li>
				</ul>
			</div>
		);
	}
}








