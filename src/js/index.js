// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import UserDetails from './user_details';
import UserShape from './user_shape';
import UserData from './user_data';
import UserList from './user_list';
import FormView	from './form_data';



let renderDetails = (user) => ReactDOM.render(
	<UserDetails user={user} onBack={renderList}/>
	, document.querySelector('.app')
	);

let renderList = () => ReactDOM.render (
	<UserList user={UserData} onUserSelect={renderDetails} onNew={renderForm}/>
	, document.querySelector('.app')
	);

function addPeepAndRenderList(newPeep) {
	UserData.push(newPeep);
	renderList();
}

let renderForm = () => ReactDOM.render ( 
		<FormView onAdd={addPeepAndRenderList}/>
		, document.querySelector('.app')
		);

renderList();