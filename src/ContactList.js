import React from 'react';
import Contact from './Contact';
import ContactForm from './ContactForm';
import './ContactList.css';

class ContactList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {contacts: [
				{name: "Contact 1", phone: "1111111111"},
				{name: "Contact 2", phone: "2222222222"},
			]};
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleAdd(name, phone) {
		let contacts = this.state.contacts;
		contacts.unshift({name, phone});
		this.setState({contacts});
	}

	handleDelete(name) {
		let contacts = this.state.contacts;
		contacts = contacts.filter(contact => contact.name !== name);
		this.setState({contacts});
	}

	render() {
		const contacts = this.state.contacts;

		return (
			<div className="contact-list-app">
				<ContactForm
					onAdd={this.handleAdd}
				/>

				{
					contacts.map((contactItem) => {
						return (
							<Contact
								name={contactItem.name}
								phone={contactItem.phone}
								onDelete={this.handleDelete}
							/>
						);
					}) // ;
				}
			</div>
		);
	}
}

export default ContactList;