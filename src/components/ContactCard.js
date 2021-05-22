import React from 'react';
import EditContact from './EditContact';
import DeleteContact from './DeleteContact';
//destructure props and render
function ContactCard({ contact }) {
	return (
		<div className="card">
			<h3>{contact.name}</h3>
			<address className="card__address_block">
				<p>
					{contact.firstLine}
					<br />
				</p>
			</address>
			<p>
				{contact.email}
				<br />
				{contact.phone}
			</p>
			<div className="card__button_block">
				<EditContact contact={contact} />
				<DeleteContact contact={contact} />
			</div>
		</div>
	);
}

export default ContactCard;
