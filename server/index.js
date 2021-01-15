const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Rental = require('./models/rental');

mongoose
  .connect(config.DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .catch(err => console.log(err))
  .then(res => console.log('#### mongoDB is connected ####'));

const app = express();

app.get('/rentals', (req, res) => {
  res.json({
    hello: 'World'
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('Server Running');
});
