import React from 'react';
import { connect } from 'react-redux';
import ContactCard from './ContactCard';
import EditContactForm from './EditContactForm'

function ContactList({ contactList }) {
	return (
		<div className="container contact__list">
			{contactList.length > 0 ? (
				contactList.map((contact, index) =>
					contact.editing ? (
						<EditContactForm key={index} contact={contact} />
					) : (
						<ContactCard key={index} contact={contact} />
					)
				)
			) : (
				<p>Задание сделано с учетом CRUD C-create, R-read, U-update, D-delete, БД не подключена, то есть при обновлении страницы сохраненные контакты пропадут</p>
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		contactList: state.contactList,
	};
};

export default connect(mapStateToProps)(ContactList);
