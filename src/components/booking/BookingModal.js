import React from 'react';
import ResModal from 'react-responsive-modal';

const BookingModal = (props) => {
	const { open, closeModal } = props;
	return (
		<ResModal open={open} onClose={closeModal} center>
			<h2>Simple centered modal</h2>
		</ResModal>
	);
};

export default BookingModal;
