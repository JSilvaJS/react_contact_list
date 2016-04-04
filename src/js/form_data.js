import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';

export default class FormView extends Component {
	static propTypes = {
		onAdd: PropTypes.func.isRequired
	}

	dataHandler(formData) {
		this.props.onAdd(formData);
	}

	render() {
		return (
			<div className="form-view">
				<div className="header_div>">
				<h1>Add Peep</h1>
				</div>
				<SSF onData={::this.dataHandler}>
					<div>
						<label>
							Picture:
						<input type="img" name="photo"/>
						</label> 
					</div>
					<div>
						<label>
							Fullname:
						<input type="text" name="name"/>
						</label> 
					</div>
					<div>
						<label>
							Email:
						<input type="email" name="email"/>
						</label> 
					</div>
					<div>
						<label>
							Phone:
						<input type="tel" name="phone"/>
						</label> 
					</div>
					<div>
						<label>
							Location:
						<input type="text" name="location"/>
						</label> 
					</div>
					<button className="Add_Peeps_btn">Add New User</button>
				</SSF>
			</div> 
		);
	}
}