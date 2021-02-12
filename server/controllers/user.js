const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { normalizeErrors } = require('../helpers/mongoose');
const config = require('../config/dev.js');

exports.auth = (req, res) => {
  const { email, password } = req.body;
  if (!password || !email) {
    return res.status(422).send({
      errors: [
        { title: 'Data missing', detail: 'Provide email and passsword!' }
      ]
    });
  }

  User.findOne({email}, (err, user) => {
    if (err) {
      return res.status(422).send({
        errors: normalizeErrors(err.errors)
      });
    }

    if(!user) {
      return res.status(422).send({
         title: 'Invalid User', detail: 'User doesn\'t exist!' 
      });
    }

    if (user.hasSamePassword(password)) {
      const token = jwt.sign(
        {
          userId: user.id,
          username: user.username
        },
        config.SECRET,
        { expiresIn: '1h' }
      );
      return res.json(token);
    } else {
      return res.status(422).send({
        title: 'Wrong Data',
        detail: 'Wrong email or password!'
      });
    }
  })

};

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
        errors: normalizeErrors(err.errors)
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
          errors: normalizeErrors(err.errors)
        });
      }
      return res.send({ registered: true });
    });
  });
};
