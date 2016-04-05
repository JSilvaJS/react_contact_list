import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';
import Icon from './icon';
import Dropzone from 'react-dropzone';

export default class FormView extends Component {
	static propTypes = {
		onAdd: PropTypes.func.isRequired
	}

	constructor() {
		super();
		this.state = {
			preview: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder.png'
		}
	}

	dataHandler(formData) {
		this.props.onAdd(formData);
	}

	dropHandler([file]) {
		this.setState({preview: file.preview});
	}

	render() {
		return (
			<div className="form-view">
				<div className="form_header_div">
				<h1 className="form_header">Add Peep</h1>
				</div>
				<SSF onData={::this.dataHandler}>
					<div className="form_input_div">
						<Dropzone onDrop={::this.dropHandler}>
							<span className="drop-span">Drop Something Here</span>
							<input type="hidden" value={this.state.preview} name="photo"/>
							<img className="dropzone-img" src={this.state.preview}/>
						</Dropzone>
					</div>
					<div className="form_input_div">
						<label>
							Fullname:
						<input type="text" name="name"/>
						</label> 
					</div>
					<div className="form_input_div">
						<label>
							Email:
						<input type="email" name="email"/>
						</label> 
					</div>
					<div className="form_input_div">
						<label>
							Phone:
						<input type="tel" name="phone"/>
						</label> 
					</div>
					<div className="form_input_div">
						<label>
							Location:
						<input type="text" name="location"/>
						</label> 
					</div>
					<button className="add_peeps_btn"><Icon type="save"/></button>
				</SSF>
			</div> 
		);
	}
}