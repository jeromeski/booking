const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');
const usrCtrlr = require('../controllers/user');

router.get('/secret', usrCtrlr.authMiddleware, (req, res) => {
  res.json({
    secret: 'You are now in the secret page'
  });
});

router.get('', (req, res) => {
  Rental.find({})
		.select('-bookings')
		.exec((err, foundRentals) => {
			res.json(foundRentals);
		});
});

router.get('/:id', (req, res) => {
  const rentalId = req.params.id;

  Rental.findById(rentalId)
		.populate('user', 'username -_id')
		.populate('bookings', 'startAt endAt -_id')
		.exec((err, foundRental) => {
			if (err) {
				res.status(422).send({
					errors: [{ title: 'Rental Error!', detail: 'Could not find Rental!' }]
				});
			}
			res.json(foundRental);
		});
});

module.exports = router;
