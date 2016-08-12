# Synopsis 
Built a simplified version of a contact list using React.js

# Code Example
```javascript
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
					<button className="ud_back" onClick={onBack}><Icon type="arrow-left"/></button>
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
```

# Motivation
I wanted to create an application that resembled the photo below.
The "home" component needed to show a list of users from our database.
When you click on the users, you are supposed to be routed to that user's info.
There should be a back button involved in the user's info as well.

![alt text](https://tiy-learn-content.s3.amazonaws.com/bae2e9f1-list.png)
![alt text](https://tiy-learn-content.s3.amazonaws.com/9331b96c-detail.png)
