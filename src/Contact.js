import React from 'react';
import profile from './profile.svg';
import bin from './bin.svg';
import './Contact.css';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(event) {
		// event.target.parentNode.parentNode.remove();
		this.props.onDelete(this.props.name);
	}

	render() {
		return (
			<div className="contact-card">
				<img className="profile-photo" src={profile} alt="profile" />

				<div className="contact-details">
					<div className="contact-name">{this.props.name}</div>
					<div className="contact-phone">{this.props.phone}</div>
				</div>

				<img className="btn-img" src={bin} alt="delete" onClick={this.handleDelete} />
			</div>
		);
	}
}

export default Contact;