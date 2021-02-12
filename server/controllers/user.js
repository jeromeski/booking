const User = require('../models/user');
const MongooseHelpers = require('../helpers/mongoose');

exports.auth = (req, res) => {};

exports.register = (req, res) => {
  const { username, email, password, password2 } = req.body;
  if (!password || !email) {
    return res.status(422).send({
      errors: [
        { title: 'Data missing', detail: 'Provide email and passsword!' },
      ],
    });
  }

  if (password !== password2) {
    return res.status(422).send({
      errors: [
        {
          title: 'Invalid Password',
          detail: 'Password is not the same as confirmation',
        },
      ],
    });
  }

  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      return res.status(422).send({
        errors: [{ mongoose: 'handle mongoose errors in next lecture' }]
      });
    }
    if (existingUser) {
      return res.status(422).send({
        errors: [
          { title: 'Invalid email!', detail: 'User with this email exists' }
        ]
      });
    }

    const user = new User({
      username,

           email,
     
      password,
    });

    user.save((err) => {
      if (err) {
        return res.status(422).send({
          errors: MongooseHelpers.normalizeErrors(err.errors)
        });
      }
      return res.send({ registered: true });
    });
  });
};
