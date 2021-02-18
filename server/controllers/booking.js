const Booking = require('../models/booking');
const Rental = require('../models/rental');
const User = require('../models/user');
const moment = require('moment');
const { normalizeErrors } = require('../helpers/mongoose');

exports.createBooking = (req, res) => {
	// 1. Get user booking data
	const { startAt, endAt, totalPrice, guests, days, rental } = req.body;

	// get related user
	const user = res.locals.user;

	// 3. instanciate booking model
	const booking = new Booking({
		startAt,
		endAt,
		totalPrice,
		guests,
		days
	});

	Rental.findById(rental._id)
		// populate the instance of rental model
		.populate('bookings')
		.populate('user')
		// execute the chain above ↑
		.exec((err, foundRental) => {
			if (err) {
				return res.status(422).send({
					errors: normalizeErrors(err.errors)
				});
			}
			if (foundRental.user.id === user.id) {
				return res.status(422).send({
					errors: [{ title: 'Invalid User!', detail: 'Cannot create booking on your own rental!' }]
				});
			}

      if (isValidBooking(booking, foundRental)) {
        booking.user = user;
				booking.rental = foundRental;
				foundRental.bookings.push(booking);
				booking.save((err) => {
					if (err) {
						return res.status(422).send({ errors: normalizeErrors(err.errors) });
					}
          foundRental.save();
          User.update({_id: user.id}, {$push: {bookings: booking}},()=> {})
				});
				return res.json({ startAt: booking.startAt, endAt: booking.endAt });
			} else {
				return res.status(422).send({
					errors: [{ title: 'Invalid Booking!', detail: 'Chosen dates are already taken!' }]
				});
			}
		});
};

const isValidBooking = (proposedBooking, rental) => {
	let isValid = true;

	if (rental.bookings && rental.bookings.length > 0) {
		isValid = rental.bookings.every((booking) => {
			const proposedStart = moment(proposedBooking.startAt);
			const proposedEnd = moment(proposedBooking.endAt);

			const actualStart = moment(booking.startAt);
			const actualEnd = moment(booking.endAt);

			return (
				(actualStart < proposedStart && actualEnd < proposedStart) ||
				(proposedEnd < actualEnd && proposedEnd < actualStart)
			);
		});
	}
	return isValid;
};