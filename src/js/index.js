// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import UserDetails from './user_details';
import UserShape from './user_shape';
import UserData from './user_data';
import UserList from './user_list';



let renderDetails = (user) => ReactDOM.render(
	<UserDetails user={user} onBack={renderList}/>
	, document.querySelector('.app')
	);

let renderList = () => ReactDOM.render (
	<UserList user={UserData} onUserSelect={renderDetails}/>
	, document.querySelector('.app')
	);

renderList();