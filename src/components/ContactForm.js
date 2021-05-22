import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions';

function ContactForm({ addContact }) {
	const [contact, setNewContact] = useState({
		name: '',
		email: '',
		phone: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewContact({ ...contact, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//send contact to store
		addContact({ ...contact, date: Date.now(), editing: false });
		setNewContact({
			name: '',
			email: '',
			phone: '',
		});
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="form">
				<input
					value={contact.name}
					onChange={handleChange}
					type="text"
					name="name"
					placeholder="name"
					required
				/>
				<input
					value={contact.email}
					onChange={handleChange}
					type="text"
					name="email"
					placeholder="email"
					required
				/>
				<input
					value={contact.phone}
					onChange={handleChange}
					type="text"
					name="phone"
					placeholder="phone"
				/>
				<button>Add contact</button>
			</form>
		</div>
	);
}

export default connect(null, { addContact })(ContactForm);
