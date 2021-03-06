/* eslint-disable no-useless-escape */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');

const userSchema = new Schema({
	username: {
		type: String,
		min: [4, 'Too short, min is 4 characters'],
		max: [32, 'Too long max is 32 characters']
	},
	email: {
		type: String,
		min: [4, 'Too short, min is 4 characters'],
		max: [32, 'Too long, max is 32 characters'],
		unique: true,
		lowercase: true,
		required: 'Email is required',
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
	},
	password: {
		type: String,
		min: [4, 'Too short, min is 4 characters'],
		max: [32, 'Too long, max is 32 characters'],
		required: 'Password is required'
	},
	rentals: [{ type: Schema.Types.ObjectId, ref: 'Rental' }],
	bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }]
});

userSchema.methods.hasSamePassword = function (requestedPassword) {
  let password = this.password;
  // return new Promise((resolve, reject) => {
  //   bcrypt.compareSync(requestedPassword, password, (err, success) => {
  //     if (err) return reject(err);
  //     return resolve(success);
  //   });
  // });
  return async () => {
    return await bcrypt.compareSync(requestedPassword, password);
  };
};

userSchema.pre('save', function (next) {
  const user = this;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, function (err, hash) {
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', userSchema);
