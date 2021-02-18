const Booking = require('../models/booking');
const Rental = require('../models/rental');
const User = require('../models/user');
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
					errors: [{ title: 'Invalid User!', detail: 'Cannot create booking on your choice!' }]
				});
			}

			return res.json({ booking, foundRental });
		});
};
