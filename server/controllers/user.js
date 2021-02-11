exports.auth = (req, res) => {};

exports.register = (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const password2 = req.body.passsword2;

  res.json({ username, email });
};
