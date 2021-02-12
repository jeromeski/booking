const User = require('../models/user');

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
      return  res.status(422).send({
        errors: [
          {
            title: 'Some Error',
            detail: 'Will be tackled later',
          },
        ],
      });
    }
    if (existingUser) {
      return res.status(422).send({
        errors: [
          {
            title: 'User Exists',
            detail: 'This email already exists in the database!',
          },
        ],
      });
    }

    const user = new User({
      username,

           email,
     
      password,
    });

    user.save((err) => {
      if(err) {
        return res.status(422).send({
          'mongoose': 'Handle mongoose error next lecture'
        });
      } else {
        return res.send({'registered': true})
      }
    });
  });
};
