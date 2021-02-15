const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config/dev');
const FakeDb = require('./fake-db');
const rentalRoutes = require('./routes/rentals'),
  userRoutes = require('./routes/user');

mongoose
  .connect(config.DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })

  .then(res => console.log('#### mongoDB is connected ####'))
  .then(() => {
    const fakedb = new FakeDb();
    fakedb.seeDb();
  })
  .catch(err => console.log(err));

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRoutes);

app.get('/rentals', (req, res) => {
  res.json({
    hello: 'World'
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
