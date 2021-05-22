import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateContact, toggleEditContact } from '../actions';

function EditContactForm({ contact, updateContact, toggleEditContact }) {
	const [updatedContact, setUpdatedContact] = useState({
		name: '',
		email: '',
		phone: '',
	});

	useEffect(() => {
		setUpdatedContact(contact);
	}, [contact]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUpdatedContact({ ...updatedContact, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updateContact(updatedContact);
		toggleEditContact({
			type: 'TOGGLE_EDIT_CONTACT',
			editingContact: updatedContact,
		});
	};

	const handleCancel = () => {
		toggleEditContact({
			type: 'TOGGLE_EDIT_CONTACT',
			editingContact: contact,
		});
	};

	return (
		<form onSubmit={handleSubmit} className="form edit__contact">
			<input
				value={updatedContact.name}
				onChange={handleChange}
				type="text"
				name="name"
				placeholder="name"
				required
			/>
			<input
				value={updatedContact.email}
				onChange={handleChange}
				type="text"
				name="email"
				placeholder="email"
				required
			/>
			<input
				value={updatedContact.phone}
				onChange={handleChange}
				type="text"
				name="phone"
				placeholder="phone"
			/>
			<div className="form__button_block">
				<button type="submit">Update</button>
				<button onClick={handleCancel}>Cancel</button>
			</div>
		</form>
	);
}

export default connect(null, { updateContact, toggleEditContact })(
	EditContactForm
);
